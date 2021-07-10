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

function setup() {
  var cnv = createCanvas(cWidth, cHeight);
  cnv.parent('canvasDiv')
  frameRate(30);
}

function draw() {
  background(255);
  noStroke();
  
  // Generative circle backgrounds
  for (var k = 0; k < cWidth; k += 64) {
    for (var j = 0; j < cHeight; j += 64) {
      fill(198-(j/2), 245+k, 231-(k+j)/4);
      var cx = k+(16*sin(k-j+frameCount/24));
      var cy = j+(16*cos(j-k+frameCount/24));
      var cr = 6+2*sin(k+j+frameCount/12);
      circle(cx,cy,cr);
    }
  }
  
  // Create Tree
  stroke(40, 109, 35);
  strokeWeight(1);
  
  // Create initial drawing pattern
  push();
  let angle = (mouseX / cWidth) * 90;
  angle = constrain(angle, 0, 90);
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



