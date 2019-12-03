class EmotionsController < ApplicationController
    before_action :find_emotion, only [:show]
    
    def index
        emotions = Emotion.all 
        render json: emotions, include: [:]
    end

    def show
        render json: @emotion
    end


    private

    def find_emotion
        @emotion = Emotion.find(params[:id])
    end

end
