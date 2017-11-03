class ImagesController < ApplicationController
  before_action :set_image_collection
  before_action :set_image, only: [:show, :update, :destroy]

  # GET /image_collections/:image_collection_id/images
  def index
    json_response(@image_collection.images)
  end

  # GET /image_collections/:image_collection_id/images/:id
  def show
    json_response(@image)
  end

  # POST /image_collections/:image_collection_id/images
  def create
    @image_collection.images.create!(image_params)
    json_response(@image_collection, :created)
  end

  # PUT /image_collections/:image_collection_id/images/:id
  def update
    @image.update(image_params)
    head :no_content
  end

  # DELETE /image_collections/:image_collection_id/images/:id
  def destroy
    @image.destroy
    head :no_content
  end

  private

  def image_params
    params.permit(:label, :page_type, :url)
  end

  def set_image_collection
    @image_collection = ImageCollection.find(params[:image_collection_id])
  end

  def set_image
    @image = @image_collection.images.find_by!(id: params[:id]) if @image_collection
  end
end
