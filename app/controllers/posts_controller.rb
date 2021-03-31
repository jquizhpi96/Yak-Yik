class PostsController < ApplicationController
  before_action :authorize_request
  before_action :set_post, only: [:update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, 
  end

  # GET /posts/1
  def show
    @post = Post.find(params[:id])
    render json: @post, include: { comments: {include: :likes} }
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = @current_user.posts.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:content)
    end
end
