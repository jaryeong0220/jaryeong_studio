let img = [];
let currentFrame = 0;

function preload(){
  for(let i = 0; i < 44; i++){
    img[i] = loadImage("performance/" + nf(i, 2) + ".png");
  }
}

function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(0.4);
imageMode(CENTER);
}

function draw() {
  background(0);
  image(img[currentFrame], windowWidth/2, windowHeight/2, 1043, 738);
  if(currentFrame == img.length - 1){
    currentFrame = 0;
  }
  currentFrame++;
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}