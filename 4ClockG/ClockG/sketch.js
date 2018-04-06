// var secs = 0;
// var mins = 0;
// var hours = 0;
// var secD = .08;
// var minD = .09;
// var hourD = .09;

function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
if(s===60){
  background(60);
}

  push();
  translate(mouseX - 50, mouseY);
  scale(0.5+sin(frameCount*0.1)*0.05);
  makeFace();
  pop();

  push();
  translate(mouseX + 50, mouseY);
  scale(0.5+cos(frameCount*0.05)*0.15);
  makeFace();
  pop();

var s = second();
var m = minute();
var h = hour();
//scaling and mapping time to rgb color value
var sSS = map(s,10,60,10,height);
var sMM = map(m,0,200,0,width);

push();
fill(random(255),212,sSS,30);
rectMode(CENTER);
noStroke();
ellipse(width/3,height/10,s*20,s*20);

translate(0,m);
fill(sMM, random(255),random(255),30);
rectMode(CENTER);
noStroke();
ellipse(width/2+200,m*10,width/2,s*30);
pop();

//scaling and mapping time to degrees
var sS = map(s,0,10,190,360);
var sH = map(h,0,94,0,360);

push();
 translate(width/2,m);
 noFill();
 noStroke();
 rectMode(BOTTOM);
 rect(0,0,1,1);

 rotate(-radians(sS/4+92));
 scale(width/4,height/4);
 fill(sMM,203,random(255),20);
 rect(0,0,width/2,1,20);
pop();

push();
 translate(width,m*(height/59)-m);
 noFill();
 rectMode(BOTTOM);
 noStroke();
 rectMode(BOTTOM);
 rect(0,0,1,1);
 rotate(-radians(sS/4+40));
 scale(width,height);
 fill(100,sMM,230,90);
 rect(0,0,width,30);
pop();

push();
 translate(width,m*(height/59)-m);
 noFill();
 rectMode(BOTTOM);
 noStroke();
 rectMode(BOTTOM);
 rect(0,0,1,1);
 rotate(-radians(sS/4+63));
 scale(width,height);
 fill(190,203,sMM,80);
 rect(0,0,width,30);
pop();
}

function makeFace() {
  stroke(215);
  strokeWeight(8);
  noFill();
  ellipse(10, 60, 40, 40);
  ellipse(200, 80, 900, 900);
  arc(500, 500, 500, 300, 0, PI);
}
