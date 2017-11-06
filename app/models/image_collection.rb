class ImageCollection < ApplicationRecord
  has_many :images, inverse_of: :image_collection, dependent: :destroy
  accepts_nested_attributes_for :images
end
