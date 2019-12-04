
let mobilenet;
let classifier;
let video;
let label = 'Train your model';
let happyButton;
let sadButton;
let saltyButton;
let afraidButton;
let trainButton;
let saveButton;

function modelReady() {
    console.log('Model is ready!!!')
}

function videoReady() {
    console.log('Video is ready!!!')
}

function whileTraining(loss) {
    if (loss == null) {
        console.log('Training Complete')
        classifier.classify(gotResults)
    } else {
        console.log(loss)
    }
}


function gotResults(error, result) {
    if (error) {
        console.error(error)
    } else {
        label = result[0].label
        classifier.classify(gotResults)
    }
}

function setup() {
    createCanvas(320, 270)
    video = createCapture(VIDEO)
    video.hide()
    background(0)
    mobilenet = ml5.featureExtractor('MobileNet', modelReady)
    classifier = mobilenet.classification(video, videoReady)

    happyButton = createButton('happy');
        happyButton.mousePressed(function() {
        classifier.addImage('happy');
        console.log("happy")
    });

    sadButton = createButton('sad');
        sadButton.mousePressed(function() {
        classifier.addImage('sad');
        console.log("sad")
    });

    saltyButton = createButton('salty');
        saltyButton.mousePressed(function() {
        classifier.addImage('salty');
        console.log("salty")
    });

    afraidButton = createButton('afraid');
        afraidButton.mousePressed(function() {
        classifier.addImage('afraid');
        console.log("afraid")
    });

    trainButton = createButton('train');
        trainButton.mousePressed(function() {
        classifier.train(whileTraining);
    });

    saveButton = createButton('save');
        saveButton.mousePressed(function () {
        classifier.save();
    });
}

function draw() {
    background(0);
    image(video, 0, 0, 320, 240);
    fill(255);
    textSize(16);
    text(label, 10, height - 10);
}