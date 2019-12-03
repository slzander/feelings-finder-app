class CreateActivityFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :activity_favorites do |t|
      t.references :activity, null: false, foreign_key: true
      t.references :favorite, null: false, foreign_key: true

      t.timestamps
    end
  end
end
