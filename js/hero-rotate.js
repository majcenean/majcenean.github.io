let img;

function preload() {
  img = loadImage('img/characters.svg');
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
}

function draw() {
  background(220);

  push();
  translate(width/2,height/2);
  rotate(millis()*.001)  //rotate
  image(img,0,0, 100, 100)  //draw the image
  pop(); 
}