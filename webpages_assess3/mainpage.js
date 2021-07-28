let canvasWidth = 600;
let canvasHeight = 600;

let lineNum = 24;
let xx1 = []; let yy1 = [];
let xx2 = []; let yy2 = [];
let xx3 = []; let yy3 = [];
let xx4 = []; let yy4 = [];

let t = 0;
let ratio = 0;
let ratioTar = 0;
let mic;                        
let micLevel = 0;
let micLevelTarget;  

function setup() {
  var cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.parent('canvasDiv');
  for(let i=0;i<lineNum;i++) {
    xx1[i] = 0; yy1[i] = 0; 
    xx2[i] = 0; yy2[i] = 0; 
    xx3[i] = 0; yy3[i] = 0; 
    xx4[i] = 0; yy4[i] = 0; 
  }
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);
  
  // Mic Levels
  micLevelTarget = mic.getLevel();
  micLevel = lerp(micLevel, micLevelTarget, 0.05);
  t += micLevel/4;
  
  fill(255, 77, 163);
  
  
  var xx = canvasWidth/2;
  var yy = canvasHeight/2;
  
  for(var i=0;i<lineNum;i++) {
    ratioTar = constrain(micLevel / 0.1, 0.5, 1.5);
    ratio = lerp(ratio, ratioTar, 0.001);  
    
    var xAdd1 = ratio*2*164*sin(t + i*64 + frameCount / 96);
    var xAdd2 = ratio*1.5*128*sin(t + i*64 + frameCount / 94);
    var xAdd3 = ratio*96*sin(t + i*64 + frameCount / 92);
    var xAdd4 = ratio*0.75*64*sin(t + i*64 + frameCount / 90);
    var yAdd1 = ratio*2*164*cos(t + i*32 + frameCount / 96);
    var yAdd2 = ratio*1.5*128*cos(t + i*32 + frameCount / 94);
    var yAdd3 = ratio*96*cos(t + i*32 + frameCount / 92);
    var yAdd4 = ratio*0.75*64*cos(t + i*32 + frameCount / 90);
    
    xx1[i] = xx + xAdd1 * ratio;
    yy1[i] = yy + yAdd1 * ratio;
    xx2[i] = xx + xAdd2 * ratio;
    yy2[i] = yy + yAdd2 * ratio;
    xx3[i] = xx + xAdd3 * ratio;
    yy3[i] = yy + yAdd3 * ratio;
    xx4[i] = xx + xAdd4 * ratio;
    yy4[i] = yy + yAdd4 * ratio;
    
    stroke(255, 77, 163);
    line(xx, yy, xx1[i], yy1[i]);
    stroke(215, 77, 173);
    line(xx, yy, xx2[i], yy2[i]);
    stroke(175, 77, 183);
    line(xx, yy, xx3[i], yy3[i]);
    stroke(135, 77, 193);
    line(xx, yy, xx4[i], yy4[i]);

    if (i > 0) {
      stroke(255, 77, 163);
      line(xx1[i], yy1[i], xx1[i-1], yy1[i-1]);
      stroke(215, 77, 173);
      line(xx2[i], yy2[i], xx2[i-1], yy2[i-1]);
      stroke(175, 77, 183);
      line(xx3[i], yy3[i], xx3[i-1], yy3[i-1]);
      stroke(135, 77, 193);
      line(xx4[i], yy4[i], xx4[i-1], yy4[i-1]);
    }
    
  }  
}