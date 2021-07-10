/* Van-Andrew Nguyen z5367356
This code is made to experiment with using loops to draw patterns. 
Further testing was made with calculating the distance between points to create generative line art. */

//Setup global var
let canvasWidth = 500; let canvasHeight = 500;
let height = 20; let width = 20;
let numH = canvasHeight/height; let numW = canvasWidth/width;
let xx = []; let yy = [];

//Setup
function setup() {
  //Create canvas
  var cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.parent('canvasDiv');
  //Init arrays for coord
  for(var i=0;i<numW;i++) {
    for(var k=0;k<numH;k++) {
      xx[i] = 0; 
      yy[i] = 0;
    }
  }
}

//Draw patterns
function draw() {
  background(255);
  
  let maxDistance = 40;
  
  //Loop through array to draw circles
  for(var i=0;i<numW;i++) {
    for(var k=0;k<numH;k++) {
      var coordColourR = 255-k*6;
      var coordColourG = 80;
      var coordColourB = 80+i*6;
      
      /*Set array coord using loop counters + trig values
      Values are staggered using loop counter.*/
      xx[i] = i*width + 4*sin(i*2 -k + frameCount/32);
      yy[k] = k*width + 4*sin(k*2 -i + frameCount/32);
         
      //Check modulus for drawing/colour operator
      if (i % 2 ==0 && k % 2 == 0) {
        //Vary colour using loop counters
        fill(coordColourR,coordColourG,coordColourB);
      } else {
        fill(255);
      }

      //Circle Drawing Pass
      noStroke();
      circle(xx[i],yy[k],width);
    }
  }
  
  /* Loop through array to draw lines n rectangles
  Want to avoid drawing over the white circles 
  Using i2 / k2 instead of i / k because that's out of scope */
  for(var i2=0;i2<numW;i2++) {
    for(var k2=0;k2<numH;k2++) {
      var coordColourR2 = 255-k2*6;
      var coordColourG2 = 80;
      var coordColourB2 = 80+i2*6;
      
      /* Set array coord using loop counters + trig values
      Values are staggered using loop counter. */
      xx[i2] = i2*width + 4*sin(i2*2 -k2 + frameCount/32);
      xx[i2+2] = (i2+2)*width + 4*sin((i2+2)*2 -k2 + frameCount/32);
      let xx_i2d =  i2*width + 4*sin((i2+2)*2 -k2 + frameCount/32);
      yy[k2] = k2*width + 4*sin(k2*2 -i2 + frameCount/32);
      yy[k2+2] = (k2+2)*width + 4*sin((k2+2)*2 -i2 + frameCount/32);
      let yy_k2r =  k2*width + 4*sin(k2*2 -(i2+2) + frameCount/32);
      
      var maxDis = 34;
      var thickness = 20;
      if (i2 % 2 ==0 && k2 % 2 == 0) {
        //Grab distance from 2 points, then calc stroke weight, then draw
        var rDis = dist(xx[i2],yy[k2],xx[i2+2],yy_k2r);
        if (rDis < maxDis) {
          stroke(coordColourR2,coordColourG2,coordColourB2);
          strokeWeight((thickness - thickness*rDis/maxDis)*thickness);
          line(xx[i2],yy[k2],xx[i2+2],yy_k2r);
        }
        var dDis = dist(xx[i2],yy[k2],xx_i2d,yy[k2+2]);
        if (dDis < maxDis) {
          stroke(coordColourR2,coordColourG2,coordColourB2);
          strokeWeight((thickness - thickness*dDis/maxDis)*thickness);
          line(xx[i2],yy[k2],xx_i2d,yy[k2+2]);
        }
      }
    }
  }
  
  stroke(255);
}