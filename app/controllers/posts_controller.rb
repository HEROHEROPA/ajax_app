class PostsController < ApplicationController

  def index
   # @posts = Post.all
     @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    Post.create(content: params[:content])
    redirect_to action: #同一ページにリダイレクトする
  end
end
