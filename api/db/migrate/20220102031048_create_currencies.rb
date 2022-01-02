class CreateCurrencies < ActiveRecord::Migration[7.0]
  def change
    create_table :currencies do |t|
      t.string :coin_name
      t.decimal :value

      t.timestamps
    end
  end
end
