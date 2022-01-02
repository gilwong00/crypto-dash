require 'net/http'

class Api::V1::CurrenciesController< ApplicationController
  before_action :set_currency, only: %i[ show update destroy ]

  # GET /currencies
  def index
		page = !params[:page].nil? ? params[:page].to_i : 1
		limit = !params[:limit].nil? ? params[:limit].to_i : 10

		uri = URI("https://data.messari.io/api/v2/assets?page=#{page}&limit=#{limit}")
		res = Net::HTTP.get_response(uri)

    render json: res.body
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
end
