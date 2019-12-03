let mobileNet;
let classifier;
let video;
let label = 'train me!';
let happyButton;
let sadButton;
let trainButton;
let saveButton;


document.addEventListener("DOMContentLoaded", () => {
    // const newEmotionButton = document.querySelector("newEmotion")

    // newEmotionButton.addEventListener("click", function(event){

    // })
})

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobileNet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobileNet.classification(video, videoReady);

  happyButton = createButton('happy');
  happyButton.mousePressed(function() {
    classifier.addImage('happy');
  });

  sadButton = createButton('sad');
  sadButton.mousePressed(function() {
    classifier.addImage('sad');
  });

  trainButton = createButton('train');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });

  saveButton = createButton('save');
  saveButton.mousePressed(function() {
    classifier.save();
  });
}

function modelReady() {
    console.log('Model is ready!!!');
    classifier.load('model.json', customModelReady)
}

function customModelReady() {
    console.log('Custom model is ready!!!');
}

function videoReady() {
    console.log('Video is ready!!!');
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result[0].label;
    classifier.classify(gotResults);
  }
}

function whileTraining(loss) {
    if (loss == null) {
        console.log('Training Complete');
        classifier.classify(gotResults);
    } else {
        console.log(loss);
    }
}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}

