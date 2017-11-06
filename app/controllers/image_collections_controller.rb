class ImageCollectionsController < ApplicationController
  before_action :set_image_collection, only: [:show, :update, :destroy]

  def index
    @image_collections = ImageCollection.all
    json_response(@image_collections)
  end

  def create
    @image_collection = ImageCollection.create!(image_collection_params)
    json_response(@image_collection, :created)
  end

  def show
    # imgs = @image_collection.collect {|o| {:id => o.id.to_s, :title => o.title, :startpage => o.startpage, :thumbnail => o.thumbnail} } }
    json_response(@image_collection.as_json(include: :images))
  end

  def update
    @image_collection.update(image_collection_params)
    head :no_content
  end

  def destroy
    @image_collection.destroy
    head :no_content
  end

  private

  def image_collection_params
    params.permit(:title, :thumbnail, :startpage, :images, :id)
  end

  def set_image_collection
    @image_collection = ImageCollection.find(params[:id])
  end
end
