/* Van-Andrew Nguyen z5367356
Page 5 of DART1201 Assessment 2 
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
      var x1B = i*width;
      var y1B = k*height;
      var x2B = (i+1)*width;
      var y2B = (k+1)*height;
      var stutter1 = 8 + 4*micLevel*100;
      var stutter2 = 12 + 4*micLevel*50;
      var stag = 4*i*micLevel*10;
      var amp = 32 - micLevel*50;
      amp = constrain(amp, 16, 32);

      var x1 = x1B + stutter1*sin(i+stag+frameCount/amp);
      var y1 = y1B + stutter1*sin(i+stag+frameCount/amp);
      var x2 = x2B + stutter2*sin(i+k+frameCount/amp);
      var y2 = y1B + stutter2*sin(i+k+frameCount/amp);
      var x3 = x2B + stutter1*sin(k+stag+frameCount/amp);
      var y3 = y2B + stutter1*sin(k+stag+frameCount/amp);
      var x4 = x1B + stutter2*sin(i-k+frameCount/amp)
      var y4 = y2B + stutter2*sin(i-k+frameCount/amp);

      if (i % 3 == 0 && k % 3 == 0) {
        fill(255-k*8, 80, 80+i*2);
        strokeWeight(1 + 0.5*sin(frameCount/32 + i*2 + k*2));
        stroke(250-micLevel*500, 171-k*4, 58+i*8);
        line(x1,y1,x2,y2);
        line(x3,y3,x1,y1);
        line(x3,y3,x4,y4);

      } else {
        fill(255);
      }
    }
  }
  stroke(255);  
}