class Favorite < ApplicationRecord
  belongs_to :user
  has_many :activity_favorites
end
