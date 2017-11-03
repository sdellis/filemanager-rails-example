class CreateImageCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :image_collections do |t|
      t.string :startpage
      t.string :thumbnail

      t.timestamps
    end
  end
end
