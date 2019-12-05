class ActivitiesController < ApplicationController

    def index
        activities = Activity.all 
        render json: activities, include: [:activity_favorites]
    end

    def show
        activity = Activity.find(params[:id])
        render json: activity
    end

end
