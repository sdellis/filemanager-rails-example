class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :label
      t.string :page_type
      t.string :url
      t.references :image_collection, foreign_key: true

      t.timestamps
    end
  end
end
