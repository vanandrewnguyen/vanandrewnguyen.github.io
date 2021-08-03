/* Van-Andrew Nguyen z5367356
Page 4 of DART1201 Assessment 2 
Using my own code snippest created from Assessment 1. */
let cnv;
let canvasWidth = 500; let canvasHeight = 500;
let index = 0;
let indexMax = 6;
let mic;                        
let micLevel = 0;
let micLevelTarget;

// Worm Var
let cxx = []; let cyy = [];
let circleNum = 16;
let tarX = 0; let tarY = 0;
let tarTimer = 90; let tarTimerInt = 0;

function setup() {
  cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.mousePressed();
  cnv.parent('canvasDiv');
  mic = new p5.AudioIn();
  mic.start();
  for(let i=0;i<circleNum;i++) {
    cxx[i] = 0; cyy[i] = 0; 
  }
}

function draw() {  
  micLevelTarget = mic.getLevel();
  micLevel = lerp(micLevel, micLevelTarget, 0.05);
  
  let lerpDelay = 0.05;
  let lerpBase = 0.4;
  let mag = 0;
  let magMax = 2;

  // Start Drawing
  background(255);
  noStroke();
  var height = 20; var width = 20;
  var numH = canvasHeight/height; 
  var numW = canvasWidth/width;
  for(var i=0;i<numW;i++) {
    for(var k=0;k<numH;k++) {
      if (i % 2 ==0 && k % 2 == 0) {
        fill(250, 171-k*4, 58+i*4);
      } else {
        fill(255);
      }

      var amp1 = 4 + micLevel*1000;
      var amp2 = 4 + micLevel*1000;
      var xx = i*width + amp1*sin(i*2 -k + frameCount/16);
      var yy = k*width + amp1*cos(k*2 -i + frameCount/24);
      var xx2 = (i+2)*width + amp2*sin((i+2)*2 -(k+2) + frameCount/16);
      var yy2 = (k+2)*width + amp2*cos((k+2)*2 -(i+2) + frameCount/24);

      strokeWeight(1 + 0.5*sin(frameCount/32 + i*2 + k*2));
      stroke(250-micLevel*500, 171-k*4, 58+i*8);
      line(xx,yy,xx2,yy2);
      circle(xx,yy,4);
    }
  }

  noStroke();
  
  // Draw Worm
  cxx[circleNum] = lerp(cxx[circleNum-2],tarX,lerpBase/2);
  cyy[circleNum] = lerp(cyy[circleNum-2],tarY,lerpBase/2);
  circle(cxx[circleNum], cyy[circleNum], 6);
  for(var j=(circleNum-1);j>0;j-=1) {
      cxx[j] = lerp(cxx[j],cxx[j+1],lerpDelay*j); 
      cyy[j] = lerp(cyy[j],cyy[j+1],lerpDelay*j);
      
      fill(250-micLevel*500, 171-j*4, 58+j*8);
      line(cxx[j], cyy[j], cxx[j+1], cyy[j+1]);
      ellipse(cxx[j], cyy[j], abs(cxx[j]-cxx[j+1])*(0.25+micLevel*50), abs(cyy[j]-cyy[j+1])*(0.25+micLevel*50));
  }
  tarX = mouseX; tarY = mouseY;

  stroke(255);    
}