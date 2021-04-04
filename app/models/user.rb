class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  # has_many :likes

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6}
end
