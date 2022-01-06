require 'net/http'
require 'json'

class Api::V1::CurrenciesController < ApplicationController
  before_action :set_currency, only: %i[show update destroy]

  # GET /currencies
  def index
    page = !params[:page].nil? ? params[:page].to_i : 1
    limit = !params[:limit].nil? ? params[:limit].to_i : 10
    uri = URI("#{coin_market_endpoint}/listings/latest?start=#{page}&limit=#{limit}")
    res = Net::HTTP.get_response(uri, { 'X-CMC_PRO_API_KEY' => coin_market_key })
    payload = JSON.parse(res.body).deep_symbolize_keys
    coins = payload[:data]

    # gets coin logo from meta route
    coins.map do |coin|
      coin[:logo] = get_crypto_logo(coin[:id])
    end

    render json: coins
  end

  # GET /currencies/1
  def show
    render json: @currency
  end

  # POST /currencies
  def create
    @currency = Currency.new(currency_params)

    if @currency.save
      render json: @currency, status: :created, location: @currency
    else
      render json: @currency.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /currencies/1
  def update
    if @currency.update(currency_params)
      render json: @currency
    else
      render json: @currency.errors, status: :unprocessable_entity
    end
  end

  # DELETE /currencies/1
  def destroy
    @currency.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_currency
    @currency = Currency.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def currency_params
    params.require(:currency).permit(:coin_name, :value, :page, :limit)
  end

  def coin_market_endpoint
    (ENV['COIN_MARKET_URL']).to_s
  end

  def parsed_coin_market_response(res)
    payload = JSON.parse(res.body).deep_symbolize_keys
    payload[:data]
  end

  def coin_market_key
    (ENV['COIN_MARKET_API_KEY']).to_s
  end

  def get_crypto_logo(id)
    res = Net::HTTP.get_response(URI("#{coin_market_endpoint}/info?id=#{id}"),
                                 { 'X-CMC_PRO_API_KEY' => coin_market_key })
    data = parsed_coin_market_response(res)
    data[id.to_s.to_sym][:logo]
  end
end
