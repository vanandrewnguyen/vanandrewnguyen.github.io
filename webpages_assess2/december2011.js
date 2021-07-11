/* Van-Andrew Nguyen z5367356
Page 2 of DART1201 Assessment 2 
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
      if (i % 2 ==0 && k % 2 == 0) {
        fill(69+k*2+micLevel*600, 220-micLevel*1500, 61+i*4+micLevel*1200);
        var xx = i*width + 6*sin(micLevel*12 + i*2 -k + frameCount/32);
        var yy = k*width + 6*sin(micLevel*12 + k*2 -i + frameCount/32);
        circle(xx,yy,width + 4*sin(i*k + frameCount/48));
        fill(255)
        circle(xx,yy,width-(4+micLevel*500) + 4*sin(i*k+90 + frameCount/32));
      } else {
        fill(255);
        var xx = i*width + 6*sin(micLevel*12 + i*2 -k + frameCount/32);
        var yy = k*width + 6*sin(micLevel*12 + k*2 -i + frameCount/32);
        circle(xx,yy,width + 4*sin(i*k + frameCount/48));
      }

    }
  }
  stroke(255);
}