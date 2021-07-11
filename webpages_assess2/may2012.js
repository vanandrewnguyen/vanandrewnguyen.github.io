/* Van-Andrew Nguyen z5367356
Page 3 of DART1201 Assessment 2 
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
      if (i % 2 == 0 && k % 1 == 0) {
        fill(39+i*4 + micLevel*2500, 200, 200+k - micLevel*500);
      } else {
        fill(255);
      }
      var freq1 = 24-micLevel*200;
      var freq2 = 32-micLevel*200;
      freq1 = constrain(freq1, 12, 24);
      freq2 = constrain(freq2, 12, 32);
      var xx = i*width + 4*sin(micLevel*200+ i*4 -k + frameCount/freq1);
      var yy = k*width + 4*sin(micLevel*200+ k*2 -i + frameCount/freq2);
      ellipse(xx,yy,width*2,height*2.5);
    }
  }
  stroke(255);  
}