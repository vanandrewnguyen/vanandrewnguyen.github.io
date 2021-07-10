/* Van-Andrew Nguyen z5367356
This code is made to experiment with looping patterns with some form of mouse interaction.
You can move the mouse around the selection area. If the mouse is pressed, the orbs will shake with magnitude relative to their distance to the mouse. Otherwise, the orbs will return to normal formation. */

//Setup Global Var
let canvasWidth = 500;
let canvasHeight = 500;
let index = 0;
let xx = []; let yy = [];
let baseX = []; let baseY = [];
let magnitudeMultiplier = 0;
let magnitudeMultiplierTarget = 0;

//Setup arrays for coord points of the orbs
function setup() {  
  var height = 20;
  var width = 20;
  var numH = canvasHeight / height;
  var numW = canvasWidth / width;
  
  var cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.parent('canvasDiv');
  
  for (var i = 0; i < numW; i++) {
    for (var k = 0; k < numH; k++) {
      xx[i] = []; yy[k] = [];
      baseX[i] = []; baseY[k] = [];
    }
  }
}

function draw() {
  background(255);
  noStroke();
  var height = 20;
  var width = 20;
  var numH = canvasHeight / height;
  var numW = canvasWidth / width;
  
  for (var i = 1; i < numW; i++) { //Used to be i=0
    for (var k = 1; k < numH; k++) {
      if (i % 2 == 0 && k % 2 == 0) {
        fill(255 - k * 8, 80, 80 + i * 2);
      } else {
        fill(255);
      }
      
      //Temp variables to use for calculations later
      var _x = i * width + 4 * sin(i * 2 - k + frameCount / 32) - numW/2;
      var _y = k * width + 4 * sin(k * 2 - i + frameCount / 32) - numH/2;
      //-numH/2 to centre on screen
      baseX[i][k] = _x; baseY[i][k] = _y;
      //Get distance and direction
      var distanceFromMouse = dist(baseX[i][k],baseY[i][k],mouseX,mouseY);
      var angleFromMouse = tan(abs(mouseY-baseY[i][k]),abs(mouseX-baseX[i][k]));

      //Calculate shake depending on distance
      var shakeX = 0; 
      var shakeY = 0;
      var dis = 128;
      if (distanceFromMouse < dis) {
        shakeX = (dis-distanceFromMouse) * magnitudeMultiplier; 
        shakeY = (dis-distanceFromMouse) * magnitudeMultiplier;
      } else {
        shakeX = 0; shakeY = 0;
      }
      var xTar = baseX[i][k] + random(-shakeX/3,shakeX/3) + 32;
      var yTar = baseY[i][k] + random(-shakeY/3,shakeY/3) + 32;
      xx[i][k] = lerp(baseX[i][k],xTar,0.1); 
      yy[i][k] = lerp(baseY[i][k],yTar,0.1); 
      
      //Draw output
      circle(xx[i][k], yy[i][k], width);
    }
  }
  stroke(255);
  
  //Lerp the mag and mag Target
  magnitudeMultiplier = lerp(magnitudeMultiplier,magnitudeMultiplierTarget,0.05);
}

//Press / Release mouse to set the magnitude target
function mousePressed() {
  magnitudeMultiplierTarget = 1;
}

function mouseReleased() {
  magnitudeMultiplierTarget = 0;
}