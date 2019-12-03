class ActivityFavorite < ApplicationRecord
  belongs_to :activity
  belongs_to :favorite 
end
