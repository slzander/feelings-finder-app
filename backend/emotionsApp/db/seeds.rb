# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActivityFavorite.destroy_all
Favorite.destroy_all
User.destroy_all
Activity.destroy_all

read = Activity.create(
    name: "read",
    emotion: "happy",
    description: "Go find a cozy corner and read a book."
)

run = Activity.create(
    name: "run",
    emotion: "happy",
    description: "Go for a run."
)

party = Activity.create(
    name: "party",
    emotion: "happy",
    description: "Go out with friends."
)

nap = Activity.create(
    name: "nap",
    emotion: "sad",
    description: "Climb into the fetal position."
)

talk = Activity.create(
    name: "talk",
    emotion: "sad",
    description: "Talk through life with a friend."
)

walk = Activity.create(
    name: "walk",
    emotion: "sad",
    description: "Go for a walk to get some fresh air."
)

stacey = User.create(
    name: "Stacey",
    password_digest: "12345"
)

staceyFavorites = Favorite.create(
    user: stacey
)

ActivityFavorite.create(
    activity: read,
    favorite: staceyFavorites
)

ActivityFavorite.create(
    activity: talk,
    favorite: staceyFavorites
)