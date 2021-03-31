# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Comment.destroy_all
Post.destroy_all
User.destroy_all



@admin = User.create!(name: 'admin', email: 'admin@email.com', password: '123456')
@jason = User.create!(name: 'Jason', email: 'admin11@email.com', password: '123456')

puts "#{User.count} users created"

@post1 = Post.create!(content: 'Lorem Ipsum lol', user: @admin )
@post2 = Post.create!(content: 'Here I am', user: @jason)

puts "#{Post.count} posts created"

@comment1 = Comment.create!(content: 'First to comment on admin', user: @jason, post: @post1)
@comment2 = Comment.create!(content: 'Admin here commenting',user: @admin, post: @post2)

puts "#{Comment.count} comments created"


