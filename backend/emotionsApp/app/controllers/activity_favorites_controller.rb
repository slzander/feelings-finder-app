class ActivityFavoritesController < ApplicationController

    def index
        activity_favorites = ActivityFavorite.all 
        render json: activity_favorites, include: [:favorite]
    end

    def show
        activity_favorite = ActivityFavorite.find_by(params[:id])
        render json: activity_favorite
    end

end
