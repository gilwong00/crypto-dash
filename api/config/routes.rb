Rails.application.routes.draw do
  resources :transactions
  namespace :api do
    namespace :v1 do
      resources :users
      resources :currencies
    end
  end
end
