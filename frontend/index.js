let mobilenet;
let classifier;
let video;
let label = 'loading model';

document.addEventListener("DOMContentLoaded", () => {
    const activityList = document.querySelector("#activityList")
    const favoriteList = document.querySelector("#favoriteList")
    const howImFeelingButton = document.querySelector("#showMeActivities")

    howImFeelingButton.innerText = "Show me activities"

    howImFeelingButton.addEventListener("click", () => {
        let emotion = label
        emotion = "happy" 
        // remove this!!!!
        showActivities(emotion)
    })

    function showActivities(emotionInput){
        fetch("http://localhost:3000/activities/")
            .then(response => response.json())
            .then(activities => activities.map(activity => {
                if (activity.emotion == emotionInput)
                    showCards(activity)
            }))
    }

    function showCards(activity){
        fetchFavoritesList()
            .then(favoritesIds => {
                if (!favoritesIds.includes(activity.id)){
                    createActivityCard(activity)
                }
            })
    }

    function fetchFavoritesList(){
        return fetch("http://localhost:3000/favorites")
            .then(response => response.json())
            .then(favorites => favorites.map(favorite => {
                return favorite.favorite_id
            }))
    }

    function createActivityCard(activity){
        const li = document.createElement("li")
        const activityDescription = document.createElement("p")
        const addButton = document.createElement("button")

        activityDescription.innerText = activity.description
        addButton.innerText = "+"

        li.append(activityDescription, addButton)
        activityList.appendChild(li)

        addButton.addEventListener("click", (event) => {
            fetch("http://localhost:3000/activity_favorites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                   activity_id: activity.id,
                   favorite_id: 1
                })
            }).then(showFavorites())
        })
    }

    function showFavorites(){
        fetch("http://localhost:3000/activity_favorites")
            .then(response => response.json())
            .then(activity_favorites => activity_favorites.map(activity_favorite => {
                createFavoriteCard(activity_favorite)
            }))
    }

    function createFavoriteCard(activity_favorite){
        console.log(activity_favorite)
        const li = document.createElement("li")
        const favoriteDescription = document.createElement("p")
        const deleteButton = document.createElement("button")
        const cardDiv = document.createElement("div")

        favoriteDescription.innerText = activity_favorite.activity.description
        deleteButton.innerText = "X"

        cardDiv.append(li, favoriteDescription, deleteButton)
        favoriteList.appendChild(cardDiv)

        deleteButton.addEventListener("click", function(event){
            // event.target.parentNode.remove()
            favoriteList.remove()
            fetch(`http://localhost:3000/activity_favorites/${activity_favorite.id}`)
        })
    }

})


function modelReady() {
  console.log('Model is ready!!!')
  classifier.load('model.json', customModelReady)
}

function customModelReady() {
  console.log('Custom Model is ready!!!')
  label = 'model ready'
  classifier.classify(gotResults)
}

function videoReady() {
  console.log('Video is ready!!!')
}

function setup() {
    createCanvas(320, 270)
    video = createCapture(VIDEO)
    video.hide()
    background(0)

    const canvas = document.querySelector("#defaultCanvas0")
    const canvasDiv = document.querySelector("#canvasDiv")

    canvasDiv.append(canvas)

    mobilenet = ml5.featureExtractor('MobileNet', modelReady)
    classifier = mobilenet.classification(video, videoReady)
}

function draw() {
  background(0)
  image(video, 0, 0, 320, 240)
  fill(255)
  textSize(16)
  text(label, 10, height - 10)
}

function gotResults(error, result) {
  if (error) {
    console.error(error)
  } else {
    label = result[0].label
    classifier.classify(gotResults)
  }
}




