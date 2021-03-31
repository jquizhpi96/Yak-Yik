class Comment < ApplicationRecord
  has_many :likes
  belongs_to :user, through: :posts
  # belongs_to :post
end
