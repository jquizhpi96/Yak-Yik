class Post < ApplicationRecord
  has_many :comments,  through: :user
  # belongs_to :user
end
