var w;
var h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  w = windowWidth;
  h = windowHeight;
  
  background(0);

  generateField();
}

function draw() {
}

var dX = 40;
var dY = 40;

var noiseScale = 0.08;
var contrast = 3;

function generateField(){
  var nX = w/dX - 1;
  var nY = h/dY - 1;
  
  var noiseOffsetA = random(-1000,1000);
  var noiseOffsetB = random(-1000,1000);
  
  
  for (var x = 1; x <= nX + 1; x++){
    for (var y = 1; y <= nY + 1; y++){
      
      let theta = noise(x * noiseScale + noiseOffsetA, y * noiseScale + noiseOffsetA);
      
      theta = contrast * (theta - 0.5) + 0.5;
      
      theta = map(theta, 0, 1, 0, 2 * PI);
      
      
      stroke(255);
      drawArrow(x * dX, y * dY, 20, theta);
    }
  }
}

function drawArrow(cx, cy, len, angle){
  push();
  translate(cx - len / 2, cy - len / 2);
  rotate(angle);
  line(0,0,len, 0);
  line(len, 0, len - 4, -4);
  line(len, 0, len - 4, 4);
  pop();
}

