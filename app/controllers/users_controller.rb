class UsersController < ApplicationController

 # GET /user /1
  def show 
    @user = User.find(params[:id])
    render json: @user, include: :posts
  end
  
  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end
