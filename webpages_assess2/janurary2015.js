/* Van-Andrew Nguyen z5367356
Page 6 of DART1201 Assessment 2 
Using my own code snippest created from Assessment 1. */
let cnv;
let canvasWidth = 500; let canvasHeight = 500;
let index = 0;
let indexMax = 6;
let mic;                        
let micLevel = 0;
let micLevelTarget;

function setup() {
  cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.mousePressed();
  cnv.parent('canvasDiv');
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {  
  micLevelTarget = mic.getLevel();
  micLevel = lerp(micLevel, micLevelTarget, 0.05);
  
  // Start Drawing
  background(255);
  noStroke();
  var height = 20; var width = 20;
  var numH = canvasHeight/height; 
  var numW = canvasWidth/width;
  for(var i=0;i<numW;i++) {
    for(var k=0;k<numH;k++) {
      var xDis = abs(mouseX-i*width);
      var yDis = abs(mouseY-k*height);
      var finalDis = sqrt(xDis*xDis + yDis*yDis);
      var pc = finalDis / (100 + micLevel*4000);
      pc = constrain(pc, 0, 1);

      var xx = i*width + 4*sin(i*2 -k + frameCount/24);
      var yy = k*width + 4*sin(k*2 -i + frameCount/24);
      var xx2 = (i+1)*width + 4*sin((i+1)*2 -k + frameCount/24);
      var yy2 = (k+1)*width + 4*sin((k+1)*2 -i + frameCount/32); 
      var ww = abs(xx2-xx) * pc;
      var hh = abs(yy2-yy) * pc;
      var shakeX = random(-2,2)*(1-pc);
      var shakeY = random(-2,2)*(1-pc);

      if (i % 2 == 0 && k % 2 == 0) {
        fill(157+i*4*pc, 109+k*2*pc, 229);
      } else {
        fill(255);
      }
      ellipse(xx+shakeX,yy+shakeY,ww*1.5,hh*1.5);
    }
  }
  stroke(255); 
}