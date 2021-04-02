Rails.application.routes.draw do
  resources :posts do
    resources :comments
    resources :likes, shallow: true
     end
  resources :users, only: [ :create, :show]
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
 end
 
  
  
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

