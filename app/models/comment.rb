class Comment < ApplicationRecord
  has_many :likes
  belongs_to :post
  belongs_to :user 
  
end
