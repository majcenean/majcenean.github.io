/*************************************************************************
Portfolio
          by Maj Jenkins
    2022

    Overview:
    
    ---------------------------------------------------------------------
    Notes: 
     (1) 
**************************************************************************/


/*************************************************************************
// Global variables
**************************************************************************/
// Arrays
var pieceImgArray = [];
var pieceTxtArray = [];
var pieceLinkArray = [];
var colorArray = [];

// Image Placement and Dimensions
var imgX;
var imgY;
var imgW = 1000;
var imgH = 667;

// Shift everything to the left by imgOffset pixels...
var imgOffset = 145;

// Test for italic
var testForItalic = false;

// test for which image to show
var currentImageIndex = 9;

// Cursor
var funCursor;

// /*************************************************************************
// // Window resize
// **************************************************************************/
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

/*************************************************************************
// Function preload
**************************************************************************/
function preload() {
// Fonts
    archivoBlack = loadFont('assets/font/Archivo-Black.otf');
    archivoLight = loadFont('assets/font/Archivo-Light.otf');
    archivoLightItalic = loadFont('assets/font/Archivo-LightItalic.otf');
    archivoMedium = loadFont('assets/font/Archivo-Medium.otf');
    archivoMediumItalic = loadFont('assets/font/Archivo-MediumItalic.otf');

// Pieces
    pieceImgArray[0] = loadImage('assets/home/passport_thumb.png');
    pieceImgArray[1] = loadImage('assets/home/goodluck_thumb.jpg');
    pieceImgArray[2] = loadImage('assets/home/psychopomp_thumb.gif');
    pieceImgArray[3] = loadImage('assets/home/bhoc_thumb.png');
    pieceImgArray[4] = loadImage('assets/home/copy_thumb.png');
    pieceImgArray[5] = loadImage('assets/home/streetlamp_thumb.gif');
    pieceImgArray[6] = loadImage('assets/home/stygga_thumb.gif');
    pieceImgArray[7] = loadImage('assets/home/24hr_thumb.png');
    pieceImgArray[8] = loadImage('assets/home/posters_thumb.png');
    pieceImgArray[9] = loadImage('assets/home/about/maj2017.jpg');
    pieceImgArray[10] = loadImage('assets/home/about/maj2017.jpg');

    pieceTxtArray[0] = 'passport of angels';
    pieceTxtArray[1] = 'good luck';
    pieceTxtArray[2] = 'psychopomp';
    pieceTxtArray[3] = 'bernal heights cinema';
    pieceTxtArray[4] = 'copycat empire';
    pieceTxtArray[5] = 'streetlamp';
    pieceTxtArray[6] = 'stygga';
    pieceTxtArray[7] = '24HR';
    pieceTxtArray[8] = 'dead type';
    pieceTxtArray[9] = 'bio';
    pieceTxtArray[10] = 'cv / resume';

    pieceLinkArray[0] = "projects/passport/passport.html";
    pieceLinkArray[1] = "projects/goodluck/goodluck.html";
    pieceLinkArray[2] = "projects/psychopomp/psychopomp.html";
    pieceLinkArray[3] = "projects/bhoc/bhoc.html";
    pieceLinkArray[4] = "projects/copy/copy.html";
    pieceLinkArray[5] = "projects/streetlamp/streetlamp.html";
    pieceLinkArray[6] = "projects/stygga/stygga.html";
    pieceLinkArray[7] = "projects/24hr/24hr.html";
    pieceLinkArray[8] = "projects/deadtype/deadtype.html";
    pieceLinkArray[9] = "about.html";
    pieceLinkArray[10] = "cv.html";

// Colors
    colorArray[0] = '#e0e0e0';
    colorArray[1] = '#204144';
    colorArray[2] = '#000000';
}

/*************************************************************************
// Function setup
**************************************************************************/
function setup() {
    createCanvas(1366, 768);
    // createCanvas(windowWidth, windowHeight);

// Mode
    imageMode(CENTER);
    rectMode(CORNER);
    ellipseMode(CENTER);

// Text Settings
    textFont(archivoMedium);
    textAlign(LEFT);
    textSize(30);
    fill(colorArray[2]);

    imgX = width/2;
    imgY = height/2;
}

/*************************************************************************
// Function draw
**************************************************************************/
function draw() {
    background(colorArray[0]);

    drawTitle();
    // currentImageIndex is already set up in setup, if you specify which image in the draw function it will constantly overwrite the currentImageIndex specified by drawList
    drawImage();


    // For loop (obsolete because of italic text and specific text treatments)
      for (let i = 0; i <= pieceTxtArray.length; i++) {
            drawList(i);
      }

    // Draw each project in the array
    // drawList(0);
    // drawList(1);
    // drawList(2);
    // drawList(3);
    // drawList(4);
    // drawList(5);
    // drawList(6);
    // drawList(7);
    // drawList(8);
    // drawList(9);
    // drawList(10);

}


/*************************************************************************
// Functions
**************************************************************************/
// Draw feature image
function drawImage() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are 1000 x 667
  image(pieceImgArray[currentImageIndex], imgX - imgOffset, imgY, imgW, imgH);
}

// Draw name at top
function drawTitle() {
  push();
  textFont(archivoBlack);
  textSize(32);
  text('maj jenkins', imgX - imgW/2 - imgOffset, imgY  - imgH/2 - 20);
  pop();
}

// Draw links to pieces
// function drawListLoop() {
// // for loop
//   let txtOffsetX = 20;
//   let textOffsetYStart = txtOffsetX;
//   let txtOffsetY = 60;

//   for (let i = 0; i <= pieceTxtArray.length; i++) {
//         text(pieceTxtArray[i], imgX+imgW/2 + txtOffsetX - imgOffset, imgY-imgH/2 + textOffsetYStart + (i * txtOffsetY));
//   }
// }

function drawList(i) {
// Offsets for the whole list
let txtOffsetX = 20;
let textOffsetYStart = txtOffsetX;
let txtOffsetY = 60;

// Offsets for mouse position
let txtOffsetLeft = 130;
let txtOffsetRight = 230;
let txtOffsetVertical = txtOffsetY/2;

// Mouse position variables
let mouseXGreater = imgX+imgW/2 -txtOffsetLeft;
let mouseXLesser = imgX+imgW/2 +txtOffsetRight;
let mouseYGreater = imgY-imgH/2;
let mouseYLesser = imgY-imgH/2 +txtOffsetVertical;

// Test for mouse position
if (
  // if mouseX is greater than or equal to
    mouseX >= mouseXGreater
  // if mouseX is less than or equal to
    && mouseX <= mouseXLesser
  // if mouseY is greater than or equal to
    &&  mouseY >= mouseYGreater  +(i * txtOffsetY)
  // // if mouseY is less than or equal to
    && mouseY <= mouseYLesser  +(i * txtOffsetY)) 
  { 
    // Draws corresponding thumbnail
    currentImageIndex = i;
    drawImage();
    testForItalic = true;
    cursor(HAND);
  } 
else {
    testForItalic = false;
    cursor(ARROW);
  }

// // Navigating Line
// // line(x1, y1, x2, y2);
// line(imgX+imgW/2, imgY+imgH/2, imgX+imgW/2, imgY-imgH/2);

// // Navigating Circles
// circle(imgX+imgW/2+txtOffsetRight, imgY-imgH/2, 10);
// circle(imgX+imgW/2-txtOffsetLeft, imgY-imgH/2, 10);
// circle(imgX+imgW/2+txtOffsetRight, imgY-imgH/2 +txtOffsetVertical, 10);
// circle(imgX+imgW/2-txtOffsetLeft, imgY-imgH/2 +txtOffsetVertical, 10);


// Text needs to be drawn AFTER mouse position in order to recieve testForItalic
// Item Text
if (testForItalic === false) {
  push();
  // textFont(archivoMedium);
  text(pieceTxtArray[i], imgX+imgW/2 + txtOffsetX - imgOffset, imgY-imgH/2 + textOffsetYStart + (i * txtOffsetY));
  pop();
} 
else if (testForItalic === true) {
  push();
  // fill('200');
  // textFont(archivoMediumItalic);
  stroke(80);
  text(pieceTxtArray[i], imgX+imgW/2 + txtOffsetX - imgOffset, imgY-imgH/2 + textOffsetYStart + (i * txtOffsetY));
  pop();
}

} // end of drawList


/*************************************************************************
// Interactions
**************************************************************************/
function keyPressed() {
    // Fullscreen toggle
    if (key === 'f') {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}

function mouseReleased() {
// Same variables as drawList
// Offsets for the whole list
let txtOffsetX = 20;
let textOffsetYStart = txtOffsetX;
let txtOffsetY = 60;

// Offsets for mouse position
let txtOffsetLeft = 130;
let txtOffsetRight = 230;
let txtOffsetVertical = txtOffsetY/2;

// Mouse position variables
let mouseXGreater = imgX+imgW/2 -txtOffsetLeft;
let mouseXLesser = imgX+imgW/2 +txtOffsetRight;
let mouseYGreater = imgY-imgH/2;
let mouseYLesser = imgY-imgH/2 +txtOffsetVertical;

if (
  // if mouseX is greater than or equal to
    mouseX >= mouseXGreater
  // if mouseX is less than or equal to
    && mouseX <= mouseXLesser
  // if mouseY is greater than or equal to
    &&  mouseY >= mouseYGreater  +(currentImageIndex * txtOffsetY)
  // // if mouseY is less than or equal to
    && mouseY <= mouseYLesser  +(currentImageIndex * txtOffsetY)) 
  { 
  // opens link
  window.location.href = (pieceLinkArray[currentImageIndex]);
  }
}
