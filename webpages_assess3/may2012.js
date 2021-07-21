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

let petalNum      = 12;
let petalWidth    = 20;
let rad           = 0;
let baseRad       = 16;
let baseAngle     = 0;
let angleRot      = 1/256;
let radThreshold  = 56;

let locked = false;
let halfShape = false;

let initialCircleRep = 1;
let initialflowerEdge = 0;

function setup() {
  cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.mousePressed();
  cnv.parent('canvasDiv');
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {  
  micLevelTarget = mic.getLevel();
  micLevel = lerp(micLevel, micLevelTarget, 0.02);
  frameRate(30);

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
        fill(39+i*6 + micLevel*2500, 200, 200+k - micLevel*500);
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
    initialCircleRep += 2;
    initialflowerEdge++;
  }
} else {
  locked = false;
}

var xx = canvasWidth/2;
var yy = canvasHeight/2;

// Draw Flower
fill(252, 97 + micLevel*200, 179 - micLevel*500);
stroke(97, 13, 38);
flowerVariationOne(xx, yy, rad, 
                   petalNum, petalWidth, 1, initialCircleRep, initialflowerEdge);

}

// Set up variations of flowers
function flowerVariationOne(x, y, rad, petalNum, 
                            petalWidth, flowers, circleRep, flowerEdge) {
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
    
    // ADD ONS
    var flowerRad = 8 + 2*sin(frameCount / 32) + micLevel*100;
    // Flowers at the tips
    if (flowers == 1) {
      circle(p3.x, p3.y, flowerRad);
    }
    // Flowers on the edges
    if (flowerEdge > 0) {
      for (var w=0;w<flowerEdge;w++) {
        var xDis = abs(p1.x - p3.x);
        var xInc = xDis / flowerEdge;
        var xx =  xInc * w;
        var yDis = abs(p1.y - p3.y);
        var yInc = yDis / flowerEdge;
        var yy =  yInc * w;
        var incRad = rad/12;
        //text(str((micLevel)),20,20); // cool words!!
        incRad = constrain(incRad, 0, 24)
        circle(xx, yy, incRad);
      }
    }
    // Circle reps
    if (circleRep > 0)  {
      for (var q=0;q<circleRep;q++) {
        rotate(q*4*sin(frameCount/6000));
        fill(252 - q*32, 97 + micLevel*200 + q*2, 179 - micLevel*500);
        var circleRepDis = rad*q + (rad/4)*sin(frameCount/48); 
        var halfwayP = { x: circleRepDis, y: circleRepDis }
        var xx = halfwayP.x + 64*sin(frameCount/32);
        var yy = halfwayP.y + 64*sin(frameCount/32);
        circle(xx, yy, flowerRad);
      }
    }
    
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
      // Flowers at the tips
      if (flowers == 1) {
        var flowerRad = 8 + 2*sin(frameCount / 32) + micLevel*100;
        circle(p3.x, p3.y, flowerRad);
      }
      pop();
    }
  pop();
  pop();
}