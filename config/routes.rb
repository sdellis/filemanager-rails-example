Rails.application.routes.draw do
  # root to: 'filemanager#index'
  get 'filemanager/index'

  resources :image_collections do
    resources :images
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
