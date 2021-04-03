Rails.application.routes.draw do
  
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # get '/users/:user_id/posts', to: 'posts#user_posts'

  resources :users, only: [ :create, :show]
 
  resources :posts, shallow: true do
    resources :comments
    resources :likes, shallow: true
     end
  
 end
 
  
  
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

