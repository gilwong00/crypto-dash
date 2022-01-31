require 'date'

class UpdateUserTable < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :last_name, :string
    add_column :users, :email, :string
    add_column :users, :password, :string
    change_column_default :users, :created_at, from: nil, to: DateTime.now

    rename_column :users, :name, :first_name
  end
end
