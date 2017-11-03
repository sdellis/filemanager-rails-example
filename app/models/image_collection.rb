class ImageCollection < ApplicationRecord
  has_many :images, dependent: :destroy
end
