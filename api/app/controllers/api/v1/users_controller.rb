require 'bcrypt'

class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)
    @user.password = params[:password]

    if @user.save
      # eventually we will store this in a rails session
      # session[:user_id] = user.id
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def login
    if BCrypt::Password.new(current_user.password_digest) == params[:password]
      render json: { id: current_user.id, firstName: current_user.first_name, lastName: current_user.last_name, email: current_user.email },
             status: :ok
    else
      render json: { message: 'Incorrect password or email' }, status: :unauthorized
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  def current_user
		# read from session or cache
    User.find_by_email!(params[:email])
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:name, :email, :first_name, :last_name, :password)
  end
end
