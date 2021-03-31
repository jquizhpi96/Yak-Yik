class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :comments
  has_many :likes

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6}
end
