class Image < ApplicationRecord
  belongs_to :image_collection, inverse_of: :images
end
