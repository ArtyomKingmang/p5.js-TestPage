let bgColor;
let textSizeValue;
let headerSize;
let littleTextSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(26, 26, 26); 
  headerSize = min(width, height) / 20; 
  textSizeValue = min(width, height) / 30; 
  littleTextSize = min(width, height) / 35;
}

function draw() {
  background(bgColor);
  fill(255);
  textAlign(CENTER, CENTER);
  
  textSize(headerSize);
  text("You shouldn't write compilers", width/2, 100);
  
  fill(140, 142, 186);
  textSize(textSizeValue);
  text("This is my first page. I hate the frontend, but I love processing. That is why this page on p5.js exists", width / 2, 200);

  textSize(littleTextSize);
  fill(189, 134, 146);
  text("This page consists of a list of reasons why you shouldn't make compilers:", 450, 300);

  textSize(headerSize);
  fill(255);
  text("YOU HAVE NO REASON NOT TO WRITE COMPILERS, \n SO QUICKLY SAT DOWN AND WRITE YOUR IMPLEMENTATION OF ERLANG!", width/2, 500);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textSizeValue = min(width, height) / 30;
  littleTextSize = min(width, height) / 35;
  headerSize = min(width, height) / 20; 
}
