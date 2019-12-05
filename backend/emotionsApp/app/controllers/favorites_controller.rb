class FavoritesController < ApplicationController

    def index
        favorites = Favorite.all 
        render json: favorites, include: [:activity_favorites, :user]
    end

    def show
        favorite = Favorite.find(params[:id])
        render json: favorite
    end

end
