/* Van-Andrew Nguyen z5367356
Page 2 of DART1201 Assessment 2 
Using my own code snippest created from Assessment 1. */

let cnv;
let canvasWidth = 500; let canvasHeight = 500;

let petalNum      = 8;
let petalWidth    = 20;
let rad           = 0;
let baseRad       = 16;
let baseAngle     = 0;
let angleRot      = 1/256;
let radThreshold  = 64;

let locked = false;
let halfShape = false;

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
  frameRate(30);
  
  micLevelTarget = mic.getLevel();
  micLevel = lerp(micLevel, micLevelTarget, 0.05);
  
  // Start Drawing Background
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
  
  // Begin draw flower
  // Play with base values
  baseAngle += angleRot + micLevel/4;
  var amp = 4 + micLevel*100;
  rad = baseRad + (micLevel*2000) + (amp*sin(frameCount / 32));
  if (rad > radThreshold) {
    if (locked == false) {
      petalNum++;
      petalWidth += 2;
      baseRad += 4;
      locked = true;
    }
  } else {
    locked = false;
  }
  
  var xx = canvasWidth/2;
  var yy = canvasHeight/2;
  
  // Draw Flower
  fill(252 + 32*sin(frameCount/24), 97 + micLevel*200, 179 - micLevel*500);
  stroke(97, 13, 38);
  strokeWeight(1 + 0.5*sin(frameCount/32))
  flowerVariationOne(xx, yy, rad, petalNum, petalWidth);
}

// Set up variations of flowers
function flowerVariationOne(x, y, rad, petalNum, petalWidth){
  let angle = TWO_PI / petalNum;
  // Begin drawing loop
  push();
  translate(x, y);
  rotate(-PI / 2);
  // Create Inner Shape Fill
  push();
  for (let i = 0; i < TWO_PI; i += angle) {
    // Create points with endpoints determined by 360 / angle
    // Using structs
    let p1 = { x: 0, y: 0}; 
    let p2 = { x: rad/2, y: -petalWidth}; 
    let p3 = { x: rad, y: 0};
    let p4 = { x: rad/2, y: petalWidth}; 
    push();
    noStroke();
    rotate(i+baseAngle);
    beginShape();
      vertex(p1.x, p1.y);
      bezierVertex(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
      if (halfShape == true) {
        bezierVertex(p3.x, p3.y, p4.x, p4.y, p1.x, p1.y);
      }
      vertex(p1.x, p1.y);
    endShape();  
    pop();
  }
  pop();
  // Create Outer Outlines
  push();
    for (let k = 0; k < TWO_PI; k += angle) {
      // Loop through with structs to give end coords
      let p1 = { x: 0, y: 0}; 
      let p2 = { x: rad/2, y: -petalWidth}; 
      let p3 = { x: rad, y: 0};
      let p4 = { x: rad/2, y: petalWidth}; 
      push();        
      noFill();
      rotate(k+baseAngle);
      beginShape();
        vertex(p1.x, p1.y);
        bezierVertex(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        bezierVertex(p3.x, p3.y, p4.x, p4.y, p1.x, p1.y);
        vertex(p1.x, p1.y);
      endShape();  
      pop();
    }
  pop();
  pop();
}