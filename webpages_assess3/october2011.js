/* Van-Andrew Nguyen z5367356
Page 1 of DART1201 Assessment 3
Using my own code snippest created from Assessment 1. */
let cnv;
let canvasWidth = 500; let canvasHeight = 500;
let index = 0;
let indexMax = 6;
let mic;                        
let micLevel = 0;
let micLevelTarget;
let freqAdd = 0;

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
        fill(255-k*8, 80+20*sin(frameCount/32), 80+i*2);
      } else {
        fill(255);
      }
      var xx = i*width + (micLevel*400+4)*sin(micLevel*10 + i*2 -k + frameCount/32);
      var yy = k*width + (micLevel*400+4)*sin(micLevel*10 + k*2 -i + frameCount/32);
      circle(xx,yy,width + 4*sin(i*k + frameCount/48));
    }
  }
  stroke(255);
  
  // Start Drawing
  //background(255);
  noStroke();
  var height = 30; var width = 30;
  var numH = canvasHeight/height; 
  var numW = canvasWidth/width;
  for(var i=0;i<numW;i++) {
    for(var k=0;k<numH;k++) {
      if (i % 2 ==0 && k % 2 == 0) {
        fill(255-k*8, 80+20*sin(frameCount/32), 80+i*2);
      } else {
        fill(255);
      }
      
      freqAdd += micLevel/100;
      var amp1 = 8 + micLevel*1000;
      var amp2 = 8 + micLevel*1000;
      var xx = i*width + amp1*sin(i*2 -k +
                                  freqAdd + frameCount/16);
      var yy = k*width + amp1*cos(k*2 -i + 
                                  freqAdd + frameCount/24);
      var xx2 = (i+2)*width + amp2*sin((i+2)*2 -(k+2) + 
                                       freqAdd + frameCount/16);
      var yy2 = (k+2)*width + amp2*cos((k+2)*2 -(i+2) + 
                                       freqAdd+ frameCount/24);
      //var xx3 = (i+4)*width + 4*sin((i+4)*2 -(k+4) + frameCount/32);
      //var yy3 = (k+4)*width + 4*sin((k+4)*2 -(i+4) + frameCount/24);

      strokeWeight(0.5 + 0.4*sin(frameCount/32) + micLevel*40);
      stroke(255-k*8, 80+20*sin(frameCount/32), 80+i*2);
      var difX = xx+abs(xx-xx2);
      var difY = yy+abs(yy-yy2);
      bezier(xx,yy,difX,difY,difX,difY,xx2,yy2);
      circle(xx,yy,3);
    }
  }
  stroke(255);    
}