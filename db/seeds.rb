# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all
Like.destroy_all



@admin = User.create!(name: 'admin', email: 'admin@email.com', password: '123456')
@jason = User.create!(name: 'Jason', email: 'admin11@email.com', password: '123456')
@janedoe = User.create!(name: 'Jane Doe', email: 'admin112@email.com', password: '123456')

puts "#{User.count} users created"

@post1 = Post.create!(content: 'Lorem Ipsum lol', user: @admin )
@post2 = Post.create!(content: 'Here I am', user: @jason)
@post3 = Post.create!(content: 'Yak Yik is cool', user: @janedoe)

puts "#{Post.count} posts created"

@comment1 = Comment.create!(content: 'First to comment on admin', user: @jason, post: @post1)
@comment2 = Comment.create!(content: 'Admin here commenting',user: @admin, post: @post2)
@comment3 = Comment.create!(content: 'Jane here commenting',user: @janedoe, post: @post2)
@comment4 = Comment.create!(content: 'omg the drama',user: @janedoe, post: @post1)

puts "#{Comment.count} comments created"

@like = Like.create!(comment: @comment1, user: @admin, post: @post1)
@like = Like.create!(comment: @comment3, user: @admin, post: @post2)

puts "#{Like.count} likes created"

