class FavoritesController < ApplicationController

    def index
        favorites = Favorite.all 
        render json: favorites, include: [:activity_favorites]
    end

    def show
        favorite = Favorite.find_by(params[:id])
        render json: favorite
    end

end
