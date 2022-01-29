require 'bcrypt'

class User < ApplicationRecord
	has_secure_password
	validates :email, presence: true, uniqueness: true
  validates :password, presence: true

	def password
    @password
  end

  def password=(new_password)
		@password = new_password
    self.password_digest = BCrypt::Password.create(new_password)
  end
end
