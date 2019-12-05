
let mobilenet;
let classifier;
let video;
let label = 'Please wait while the model loads';
let happyButton;
let sadButton;
let saltyButton;
let afraidButton;
let trainButton;
let saveButton;
let options = {numLabels: 4}


function modelReady() {
    // console.log('Model is ready!!!')
}

function videoReady() {
    label = "Ready to Train"
}

function setup() {
    createCanvas(455, 375)
    video = createCapture(VIDEO)
    video.hide()
    background(0)

    const canvas = document.querySelector(".p5Canvas")
    const canvasDiv = document.querySelector("#canvasDivTrain")

    canvasDiv.append(canvas)

    mobilenet = ml5.featureExtractor('MobileNet', options, modelReady)
    classifier = mobilenet.classification(video, videoReady)

    let happyCounter = 0
    happyButton = createButton('happy: 0')
    happyButton.mousePressed(function() {
        classifier.addImage('happy')
        const happyB = document.querySelector("#buttonDiv button:nth-child(1)")
        happyCounter += 1
        happyB.innerText = `happy: ${happyCounter}`
    });

    let sadCounter = 0
    sadButton = createButton('sad: 0')
    sadButton.mousePressed(function() {
        classifier.addImage('sad')
        const sadB = document.querySelector("#buttonDiv button:nth-child(2)")
        sadCounter += 1
        sadB.innerText = `sad: ${sadCounter}`
    });

    let saltyCounter = 0
    saltyButton = createButton('salty: 0')
    saltyButton.mousePressed(function() {
        classifier.addImage('salty')
        const saltyB = document.querySelector("#buttonDiv button:nth-child(3)")
        saltyCounter += 1
        saltyB.innerText = `salty: ${saltyCounter}`
    });

    let afraidCounter = 0
    afraidButton = createButton('afraid: 0')
    afraidButton.mousePressed(function() {
        classifier.addImage('afraid')
        const afraidB = document.querySelector("#buttonDiv button:nth-child(4)")
        afraidCounter += 1
        afraidB.innerText = `afraid: ${afraidCounter}`
    });

    trainButton = createButton('train')
    trainButton.mousePressed(function() {
        classifier.train(whileTraining)
    })

    saveButton = createButton('save')
    saveButton.mousePressed(function () {
        classifier.save()
    })

    const buttons = document.querySelectorAll("button")
    const buttonDiv = document.querySelector("#buttonDiv")

    buttonArray = Array.from(buttons)

    buttonArray.map(button => {
        buttonDiv.appendChild(button)
    })
}

function draw() {
    background(0)
    image(video, 5, 5, 444, 333)
    fill(255)
    textSize(16)
    text(label, 10, height - 10)
}

function whileTraining(loss) {
    if (loss == null) {
        classifier.classify(gotResults)
    } else {
        label = 'Training...'
    }
}

function gotResults(error, result) {
    if (error) {
        label = error
    } else {
        label = result[0].label
        classifier.classify(gotResults)
    }
}