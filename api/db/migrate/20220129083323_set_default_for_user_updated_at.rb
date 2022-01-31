class SetDefaultForUserUpdatedAt < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :updated_at, from: nil, to: DateTime.now
  end
end
