class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :emotion
      t.text :description

      t.timestamps
    end
  end
end
