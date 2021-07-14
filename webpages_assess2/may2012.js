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

// Worm Code
let xx = []; let yy = [];
let circleNum = 24;
let tarX = 0; let tarY = 0;
let tarTimer = 90; let tarTimerInt = 0;

function setup() {
  cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.mousePressed();
  cnv.parent('canvasDiv');
  mic = new p5.AudioIn();
  mic.start();
  for(var i=0;i<circleNum;i++) {
    xx[i] = 0;
    yy[i] = 0; 
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
      if (i % 2 == 0 && k % 1 == 0) {
        fill(39+i*4 + micLevel*2500, 200, 200+k - micLevel*500);
      } else {
        fill(255);
      }
      var freq1 = 24-micLevel*200;
      var freq2 = 32-micLevel*200;
      freq1 = constrain(freq1, 12, 24);
      freq2 = constrain(freq2, 12, 32);
      var cxx = i*width + 4*sin(micLevel*200+ i*4 -k + frameCount/freq1);
      var cyy = k*width + 4*sin(micLevel*200+ k*2 -i + frameCount/freq2);
      ellipse(cxx,cyy,width*2,height*2.5);
    }
  }
  stroke(255);  
  
  // Draw Worm
  xx[circleNum] = lerp(xx[circleNum-2],tarX,lerpBase/5);
  yy[circleNum] = lerp(yy[circleNum-2],tarY,lerpBase/5);
  circle(xx[circleNum], yy[circleNum], 6);
  for(var i=(circleNum-1);i>0;i-=1) {
      xx[i] = lerp(xx[i],xx[i+1],lerpDelay*i);
      yy[i] = lerp(yy[i],yy[i+1],lerpDelay*i);
      //circle(xx[i], yy[i], 5 - i*0.25);
      
      fill(153+i*12 - micLevel*1000, 0, 51-i*8 + micLevel*500);
      var wAmp = micLevel*250 + 4*sin(frameCount / 32);
      var wWidth = abs(xx[i]-xx[i+1]) + wAmp;
      var wHeight = abs(yy[i]-yy[i+1]) + wAmp;
      
      ellipse(xx[i], yy[i], wWidth, wHeight);
  }
  
  //Mag Check
  if (mag < 0) { mag = 0;}
  if (mag > magMax) { mag = magMax; }
  let mouseSpd;
  mouseSpd = sqrt(movedX^2 + movedY^2);
  //text(str(mouseSpd),50,50);
  
  if (mouseSpd == 0) {
    //New Target
    tarTimerInt++;
    if (tarTimerInt > tarTimer) {
      tarTimerInt = 0; tarTimer = random(45,90);
      tarX = random(64,canvasWidth-64); tarY = random(64,canvasHeight-64);
    } 
  } else {
    tarX = mouseX; tarY = mouseY;
  }
}