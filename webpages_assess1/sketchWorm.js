/* Van-Andrew Nguyen z5367356
This code is using arrays to cycle through each respective point in order to emulate a worm-like movement pattern.
The mock 3D effect is made through calculating distance between points.
Left alone, the worm-like pattern will randomly find points. Otherwise, mouse movement will cause it to follow the mouse. */


let cWidth = 500; let cHeight = 500;
//Worm variables
let xx = []; let yy = [];
let circleNum = 24;
//Variables for random target
let tarX = 0; let tarY = 0;
let tarTimer = 90; let tarTimerInt = 0;

function setup() {
  var cnv = createCanvas(cWidth, cHeight);
  cnv.parent('canvasDiv')
  //Set empty array
  for(let i=0;i<circleNum;i++) {
    xx[i] = 0; yy[i] = 0; 
  }
}

function draw() {
  let lerpDelay = 0.05;
  let lerpBase = 0.4;
  let mag = 0;
  let magMax = 2;
  
  background(255);
  noStroke();  
  
  //Background circles
  for(var k=0;k<cWidth;k+=40) {
    for(var j=0;j<cHeight;j+=40) {
      fill(255-j/2, 80, 80);
      circle(k+(2*sin(k-j+frameCount/32)),j+(2*cos(j-k+frameCount/32)),8+4*sin(k+j+frameCount/48));
    }
  }
  
  //Draw
  xx[circleNum] = lerp(xx[circleNum-2],tarX,lerpBase/5);
  yy[circleNum] = lerp(yy[circleNum-2],tarY,lerpBase/5);
  circle(xx[circleNum], yy[circleNum], 6);
  //Loop through points; make points follow each other
  for(var i=(circleNum-1);i>0;i-=1) {
      xx[i] = lerp(xx[i],xx[i+1],lerpDelay*i) 
      yy[i] = lerp(yy[i],yy[i+1],lerpDelay*i) 
      fill(153+i*12, 0, 51-i*8);
      ellipse(xx[i], yy[i],abs(xx[i]-xx[i+1]), abs(yy[i]-yy[i+1]));
  }
  
  //Mouse magnitue Check
  if (mag < 0) { mag = 0;}
  if (mag > magMax) { mag = magMax; }
  let mouseSpd;
  mouseSpd = sqrt(movedX^2 + movedY^2);
  
  //If mouse isn't moving or offscreen, pick a random point
  if (mouseSpd == 0) {
    //New Target
    tarTimerInt++;
    if (tarTimerInt > tarTimer) {
      tarTimerInt = 0; tarTimer = random(45,90);
      tarX = random(64,cWidth-64); tarY = random(64,cHeight-64);
    } 
  } else {
    tarX = mouseX; tarY = mouseY;
  }
  
}
