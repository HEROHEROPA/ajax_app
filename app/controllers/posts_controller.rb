class PostsController < ApplicationController

  def index
   # @posts = Post.all
     @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    # binding.pry
    post = Post.create(content: params[:content])
    #redirect_to action: :index#同一ページにリダイレクトする
    render json:{post:post};#jsonフォーマットに変換してレスポンス送信する。
  end
end
