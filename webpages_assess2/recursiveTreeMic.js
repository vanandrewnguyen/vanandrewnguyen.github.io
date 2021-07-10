/* "Recursive Tree Sketch" by Van-Andrew Nguyen
Recursion code sourced from: https://p5js.org/examples/simulate-recursive-tree.html
Creates a recursive tree which emulates a 'swaying' motion. Tree growth is dependant on mouse position.
*/

// Declare Common Variables
let cWidth              = 500;
let cHeight             = 500;
let theta               = 0;
let trunkHeight         = 180;  // Height of initial line
let initialBranchLength = trunkHeight*0.66;
let branchDamp          = 0.66; // Ratio of further branches
let minimumHeight       = 3;    // Minimum branch length for drawing 
let mic;                        // Microphone variable and level
let micLevel            = 0;
let micLevelTarget;

function setup() {
  var cnv = createCanvas(cWidth, cHeight);
  cnv.parent('canvasDiv');
  frameRate(30);
  mic = new p5.AudioIn();
  mic.start();
  getAudioContext().resume();
  cnv.mousePressed(userStartAudio);
}

function draw() {
  background(255);
  noStroke();
  micLevelTarget = mic.getLevel();
  micLevel = lerp(micLevel, micLevelTarget, 0.01);
  
  // Generative circle backgrounds
  for (var k = 0; k < cWidth; k += 64) {
    for (var j = 0; j < cHeight; j += 64) {
      fill(198-(j/2), 245+k, 231-(k+j)/4);
      var amp = 8 + 1*micLevel*100;
      var freq = 1*micLevel*100;
      var cx = k+(amp*sin(k-j+frameCount/24-freq));
      var cy = j+(amp*cos(j-k+frameCount/24-freq));
      var cr = 6+(amp/8)*sin(k+j+frameCount/12-freq);
      circle(cx,cy,cr);
    }
  }
  
  // Create Tree
  stroke(40, 109, 35);
  strokeWeight(1);
  
  // Create initial drawing pattern
  push();
  let angle = micLevel*3000;
  let trunkHeight = 120 + micLevel*4000;
  let initialBranchLength = trunkHeight*(0.66/2) + micLevel*3000;
  
  angle = constrain(angle, 0, 90);
  trunkHeight = constrain(trunkHeight, 120, 180)
  initialBranchLength = constrain(initialBranchLength, 
                                  trunkHeight*(0.66/2), 
                                  trunkHeight*0.66);
  theta = radians(angle);
  
  // Move drawing point to bottom center
  translate(cWidth/2,cHeight);
  // Draw Trunk
  noFill();
  var endPoint = -trunkHeight + 8 * sin(frameCount / 32);
  var controlPoint = (trunkHeight / 8) * cos(theta + frameCount / 32);
  bezier(0, 0, controlPoint, -trunkHeight / 3, controlPoint, -2 * trunkHeight / 3, 0, endPoint);
  translate(0, endPoint);
  // Branch
  createBranch(initialBranchLength, branchDamp);
  pop();
}

// Create a new branch, which calls itself repeatedly
function createBranch(height, prevRatio) {
  height *= branchDamp;
  // Create a colour based on branch length
  var colourRatio = height / initialBranchLength;
  stroke(40 + (1-colourRatio)*5, 109 + (1-colourRatio)*10, 35 + (1-colourRatio)*20); 
  
  // Draw branches above a certain length
  if (height > minimumHeight) {
    // Draw Right Hand Side
    push();
    rotate(theta);
    
    // Endpoint is staggered according to angle and branch ratio
    // Endpoint also is given a bouncing motion using sin waves
    var endPoint = -height + (theta * 32 * (height / trunkHeight)) * sin(height + frameCount / 32);
    
    // Control point exists at the halfway point
    var controlPoint = (height / 4) * cos(height + theta + frameCount / 32);
    bezier(0, 0, controlPoint, -height / 3, controlPoint, -2 * height / 3, 0, endPoint);
    
    // Move up the branch and create a new branch in a loop
    translate(0, endPoint);
    createBranch(height, branchDamp + 0.025 * sin(height + frameCount / (4 + height)));
    pop();
    
    // Draw Left Hand Side (Identical to above, save for -theta)
    push();
    rotate(-theta);
    var endPoint = -height + (theta * 32 * (height / trunkHeight)) * sin(height + frameCount / 32);
    var controlPoint = (height / 4) * cos(height + theta + frameCount / 32);
    bezier(0, 0, controlPoint, -height / 3, controlPoint, -2 * height / 3, 0, endPoint);
    translate(0, endPoint);
    createBranch(height, branchDamp + 0.025 * sin(height + frameCount / (4 + height)));
    pop();
  }
}



