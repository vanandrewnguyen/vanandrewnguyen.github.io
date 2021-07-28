let canvasWidth = 600;
let canvasHeight = 600;
let spacing = 20;
let numW = canvasWidth / spacing;
let numH = canvasWidth / spacing;

let lineNum = 64;
let xx1 = []; let yy1 = [];
let xx2 = []; let yy2 = [];

let t = 0;
let mic;                        
let micLevel = 0;
let micLevelTarget;  

function setup() {
  var cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.parent('canvasDiv');
  for(let i=0;i<lineNum;i++) {
    xx1[i] = 0; yy1[i] = 0; 
    xx2[i] = 0; yy2[i] = 0; 
  }
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255);
  
  // Mic Levels
  micLevelTarget = mic.getLevel();
  micLevel = lerp(micLevel, micLevelTarget, 0.1);
  t += micLevel*10;
  
  fill(255, 77, 163);
  stroke(255, 77, 163);
  strokeWeight(1.5 + 0.5*sin(frameCount/48));
  
  var xx = canvasWidth/2;
  var yy = canvasHeight/2;
  var amp1 = 180 + 32*sin(t + frameCount / 96);
  var amp2 = 160 + 24*sin(t + frameCount / 64);
  var freq1 = 80 //+ 8*sin(t + frameCount / 128);
  var freq2 = 64 //+ 6*sin(t + frameCount / 96);
  
  xx1[0] = xx + amp1*sin(1 + frameCount/freq1); 
  yy1[0] = yy + amp1*cos(1 + frameCount/freq1);
  xx2[0] = xx + amp2*sin(1 + frameCount/freq2); 
  yy2[0] = yy + amp2*cos(1 + frameCount/freq2); 
  line(xx1[0], yy1[0], xx2[0], yy2[0]);
  
  for(let i=1;i<lineNum;i++) {
    stroke(255 - i*4 + 32*sin(frameCount/32), 77 + i*2, 163);
    
    var followRate = constrain(0.1 + micLevel*5, 0, 0.5);
    xx1[i] = lerp(xx1[i], xx1[i-1], followRate);
    yy1[i] = lerp(yy1[i], yy1[i-1], followRate);
    xx2[i] = lerp(xx2[i], xx2[i-1], followRate);
    yy2[i] = lerp(yy2[i], yy2[i-1], followRate);
    
    line(xx1[i], yy1[i], xx2[i], yy2[i]);
    line(xx1[i], yy1[i], xx1[i-1], yy1[i-1]);
    line(xx2[i], yy2[i], xx2[i-1], yy2[i-1]);
  }
  
}