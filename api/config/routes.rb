Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[destroy update create] do
        post :login, on: :collection
      end
      resources :currencies
      resources :transactions
    end
  end
end
