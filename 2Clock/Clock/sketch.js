var secs = 0;
var mins = 0;
var hours = 0;
var secD = .08;
var minD = .09;
var hourD = .09;

function setup() {
 createCanvas(windowWidth/2, windowHeight);
}

function draw() {
if(s===60){
  background(60);
}

var s = second();
var m = minute();
var h = hour();
//scaling and mapping time to rgb color value
var sSS = map(s,0,59,0,width);
var sMM = map(m,0,59,0,width);

push();
fill(sSS);
rectMode(CENTER);
noStroke();
rect(width/2,height/2,s*width,height);

translate(0,m);
fill(sMM/4);
rectMode(CENTER);
noStroke();
rect(width/2,m*(height/59)-m,width,m*2);
pop();

push();
mins+= minD;
translate(0,m*2.1);
textSize(m*2);
textAlign(CENTER,BOTTOM);
fill(255);
textFont('Georgia');
text(nf(m,2),width/2,m*(height/59)-m);
pop();

//scaling and mapping time to degrees
var sS = map(s,0,60,0,360);
var sH = map(h,0,24,0,360);

push();
 translate(width,m*(height/59)-m);
 noFill();
 noStroke();
 rectMode(BOTTOM);
 rect(0,0,1,1);

 rotate(-radians(sS/4+92));
 scale(width,height);
 fill(sMM/4);
 rect(0,0,width,1);
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
 fill(200,sMM,230,30);
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
 fill(197,210,sMM,30);
 rect(0,0,width,30);
pop();

push();
noFill();
noStroke();
rectMode(BOTTOM);
rect(0,0,1,1);
translate(width,m*(height/59)-m);
rotate(-radians(sS/4+90));
hours+= hourD;
push();
textSize(m*(height/59)-m);
textAlign(CENTER,BOTTOM);
fill(sSS);
translate(0,m/15);
translate(width,-radians(sS/4+90))
rotate(PI);
textFont('Georgia');
text(nf(h,2),width/2,h/2);
pop();

push();
noFill();
noStroke();
rectMode(BOTTOM);
rect(0,0,1,1);
translate(0,0);
rotate(-radians(sS/4+90));
hours+= hourD;
push();
textSize(height-m*(height/59)-m);
textAlign(CENTER,BOTTOM);
fill(sSS/.95);
translate(0,m/15);
translate(width,-radians(sS/4+90))
rotate(PI);
textFont('Georgia');
text(nf(h,2),width/2,h/2);
pop();
}
