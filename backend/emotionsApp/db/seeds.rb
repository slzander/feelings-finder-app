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


party = Activity.create(
    name: "party",
    emotion: "happy",
    description: "Go out with friends."
)

eat = Activity.create(
    name: "party",
    emotion: "happy",
    description: "Enjoy a delicious meal."
)

smile = Activity.create(
    name: "smile",
    emotion: "happy",
    description: "Share your smiles with others."
)

sport = Activity.create(
    name: "sport",
    emotion: "happy",
    description: "Pick your favorite sport and go do it."
)

help_others = Activity.create(
    name: "help_others",
    emotion: "happy",
    description: "Do something kind for a stranger."
)

dance = Activity.create(
    name: "party",
    emotion: "happy",
    description: "Dance around your kitchen naked."
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

write = Activity.create(
    name: "write",
    emotion: "sad",
    description: "Write your thoughts in a journal."
)

help = Activity.create(
    name: "help",
    emotion: "sad",
    description: "Ask for help."
)

kindness = Activity.create(
    name: "kindness",
    emotion: "sad",
    description: "Be kind to yourself."
)

hug = Activity.create(
    name: "hug",
    emotion: "sad",
    description: "Get a hug from a loved one."
)




read = Activity.create(
    name: "read",
    emotion: "stressed",
    description: "Go find a cozy corner and read a book."
)

run = Activity.create(
    name: "run",
    emotion: "stressed",
    description: "Go for a run."
)

space = Activity.create(
    name: "space",
    emotion: "stressed",
    description: "Get some space from the problem."
)

bath = Activity.create(
    name: "bath",
    emotion: "stressed",
    description: "Take a bath."
)

tea = Activity.create(
    name: "tea",
    emotion: "stressed",
    description: "Make a cup of hot tea."
)

breathe = Activity.create(
    name: "breathe",
    emotion: "stressed",
    description: "Take a deep breath."
)

yoga = Activity.create(
    name: "yoga",
    emotion: "stressed",
    description: "Do yoga."
)

declutter = Activity.create(
    name: "declutter",
    emotion: "stressed",
    description: "Spend some time decluttering."
)




scream = Activity.create(
    name: "scream",
    emotion: "salty",
    description: "Scream into a pillow"
)

computer = Activity.create(
    name: "computer",
    emotion: "salty",
    description: "Throw your computer on the floor."
)

bird = Activity.create(
    name: "bird",
    emotion: "salty",
    description: "Flip the bird at everyone you see."
)



stacey = User.create(
    name: "Stacey",
    password_digest: "12345"
)

staceyFavorites = Favorite.create(
    user: stacey
)

# ActivityFavorite.create(
#     activity: read,
#     favorite: staceyFavorites
# )

# ActivityFavorite.create(
#     activity: talk,
#     favorite: staceyFavorites
# )