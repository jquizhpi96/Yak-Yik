Rails.application.routes.draw do
  resources :posts do
    resources :comments
     end
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
    end
  # resources :likes, only: :index
  
  
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

