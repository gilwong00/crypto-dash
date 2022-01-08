Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :currencies
			resources :transactions
    end
  end
end
