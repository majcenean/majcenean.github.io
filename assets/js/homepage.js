/*************************************************************************
Portfolio Homepage 2021
          by Maj Jenkins
    September 1, 2021

    Overview:
    
    ---------------------------------------------------------------------
    Notes: 
     (1) 
**************************************************************************/


/*************************************************************************
// Global variables
**************************************************************************/

// Style (Fonts, colors)
// Fonts
var headerBold;
var headerMed;
var headerSemibold;
var headerThin;
var bodyBold;
var bodyBoldItalic;
var bodyItalic;
var bodyRegular;

// Colors
var colorDeepBlue = '#8EBADF'
var colorLightBlue = '#DDEBF4'
var colorGold = '#FACD7C'
var colorOrange = '#F2904F'
var colorRed = '#C34B33'
var colorGreen = '#aee06e'

var colorBlack = '#181818'
var colorDarkGray = '#474747'
var colorLightGray = '#757575'
var colorOffwhite = '#FAF4F4'

// Background Gradient
  let b1, b2, c1, c2;

// CreateGraphics
var worldCanvas;
var worldSize = 600;
var sphereSize = 200;

// Images


// Sounds


// Buttons and timers




/*************************************************************************
// Function preload
**************************************************************************/
function preload() {
  // Fonts
    headerBold = loadFont('assets/font/barlowcondensed/bold.otf');
    headerMed = loadFont('assets/font/barlowcondensed/medium.otf');
    headerSemibold = loadFont('assets/font/barlowcondensed/semibold.otf');
    headerThin = loadFont('assets/font/barlowcondensed/thin.otf');
    bodyBold = loadFont('assets/font/spacemono/bold.otf');
    bodyBoldItalic = loadFont('assets/font/spacemono/bolditalic.otf');
    bodyItalic = loadFont('assets/font/spacemono/italic.otf');
    bodyRegular = loadFont('assets/font/spacemono/regular.otf');

  // Images

  // Music and Sounds

  // Models
  // Model credit: https://www.turbosquid.com/3d-models/3d-planet-earth-model-1553478
  // var worldModel = loadModel('assets/Mundo.obj', true);
}

/*************************************************************************
// Window resize
**************************************************************************/

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);;
// }

/*************************************************************************
// Function setup
**************************************************************************/

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
	//   createCanvas(worldSize, worldSize, WEBGL);

  // Background Gradient
  // Define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(colorDeepBlue);
  c2 = color(colorLightBlue);

  // noLoop();

  // createGraphics
  // worldCanvas = createGraphics(windowWidth, windowHeight, WEBGL);
 }

/*************************************************************************
// Function draw
**************************************************************************/

function draw() {
  background(colorDeepBlue);
  fill(colorOffwhite);
  noStroke();

  // Background

  // drawGrid();

  drawSphere();

  noStroke();
  fill(colorDeepBlue);
  ellipseMode(CORNER);
  circle(0, height-(height/8), width, height/8);

  // fsMessage();
}

/*************************************************************************
// Custom functions
**************************************************************************/
function drawGrid() {
    let square = 50;
    push();
    stroke(240);
    strokeWeight(1);
    for (var i = 0; i < width; i += square) {
        line(i, 0, i, height);
    }
    for (var j = 0; j < height; j += square) {
        line(0, j, width, j);
    }
    pop();
}


// Gradient
// From : p5.org Examples
// https://p5js.org/examples/color-linear-gradient.html
function drawGradient() {
    // Foreground
  setGradient(-windowWidth, 0, windowWidth*2, windowHeight*2, c1, c2);
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function drawSphere() {
    background(colorDeepBlue);
    

    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;

    ambientLight(250, 244, 244);
    // pointLight(150, 150, 150, mouseX, mouseY, 100);
    
    let dirX = (mouseX / width - 0.5);
    let dirY = (mouseY / height - 0.5);
    directionalLight(100, 100, 100, -dirX, -dirY, -1);

    push();
    rotateZ(frameCount * 0.005);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(colorDeepBlue);
    noStroke();
    translate(height/2, width/2);
    sphere(sphereSize);
    pop();
}

// /*************************************************************************
// // Fullscreen function
// **************************************************************************/

// // Fullscreen message
// function fsMessage() {
//   // if (fs === true) {
//       push();
//       fill(255);
//       noStroke();
//       textSize(width/60);
//       textAlign(LEFT);
//       text("Press [F] for fullscreen", 0 + width/100 , height - height/100)
//       pop();
//     // }
// }

// // keyTyped for debugMode and fullscreen
// function keyTyped() {
//   if (key === 'f') {
//     let fs = fullscreen();
//     fullscreen(!fs);
//   }
//  }

