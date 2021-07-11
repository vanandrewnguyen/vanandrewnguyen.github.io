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
  var height = 12; var width = 12;
  var numH = canvasHeight/height; 
  var numW = canvasWidth/width;

  for(var i=0;i<numW;i++) {
    for(var k=0;k<numH;k++) {
      if (i % 2 ==0 && k % 2 == 0) {
        fill(49,211+i*8,66+k*4);
      } else {
        fill(255);
      }
      var xx = i*width + 4*sin(i*2 -k*4 + frameCount/24);
      var yy = k*width + 4*sin(k*2 -i*12 + frameCount/32);
      var xx2 = (i+1)*width + 4*sin((i+1)*2 -(k+1)*4 + frameCount/24);
      var yy2 = (k+1)*width + 4*sin((k+1)*2 -(i+1)*12 + frameCount/32);
      var ww = abs(xx2-xx) * micLevel*50;
      var hh = abs(yy2-yy) * micLevel*50;
      if (i % 2 ==0 && k % 2 == 0) {
        //circle(xx,yy,width);
        triangle(xx,yy,xx2+8,yy2+8,xx+(ww+4)*2,yy+(hh+4)*2)
      } else {
        ellipse(xx,yy,ww,hh);
      }
    }
  }
  stroke(255); 
}