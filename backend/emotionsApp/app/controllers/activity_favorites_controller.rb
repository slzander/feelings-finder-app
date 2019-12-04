class ActivityFavoritesController < ApplicationController

    def index
        activity_favorites = ActivityFavorite.all 
        render json: activity_favorites, include: [:activity]
    end

    def show
        activity_favorite = ActivityFavorite.find_by(params[:id])
        render json: activity_favorite
    end

    def create
        activity_favorite = ActivityFavorite.create(
            activity_id: params[:activity_id],
            favorite_id: params[:favorite_id]
        )
    end

end
