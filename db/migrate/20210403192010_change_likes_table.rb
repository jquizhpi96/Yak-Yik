class ChangeLikesTable < ActiveRecord::Migration[6.1]
  def change
    change_column_null :likes, :post_id, true
    change_column_null :likes, :comment_id, true
  end
end
