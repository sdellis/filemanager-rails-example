class AddTitleToImageCollections < ActiveRecord::Migration[5.1]
  def change
    add_column :image_collections, :title, :string
  end
end
