class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :user_id
      t.string :coin_name
      t.string :transaction_type
      t.decimal :amount

      t.timestamps
    end
  end
end
