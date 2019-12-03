
let mobilenet;
let classifier;
let video;
let label = 'Train your model';
let happyButton;
let sadButton;
let angryButton;
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
  });

  sadButton = createButton('sad');
  sadButton.mousePressed(function() {
    classifier.addImage('sad');
  });

  angryButton = createButton('angry');
  angryButton.mousePressed(function() {
    classifier.addImage('angry');
  });

  afraid = createButton('afraid');
  afraid.mousePressed(function() {
    classifier.addImage('afraid');
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