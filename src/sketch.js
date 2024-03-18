let crabX = -100;
let sunCol1 = 255;
let sunCol2 = 191;
let sunCol3 = 74;


function setup() {
    // For ordering nodes in the DOM
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent("canvas-parent");
  background(220, 240, 250);
}

function draw() {
  push();
  // background
  translate(200, 400);
  drawBackground();
  drawPier();
  drawCrab();
  drawClouds();
  drawSun();
  drawBucket()
  pop();
}

function drawBackground() {
  // background
  push();
  noStroke();
  //sand
  fill(245, 213, 161);
  triangle(-300, -150, -300, 0, 250, 0);
  //ocean
  fill(0, 105, 148);
  triangle(-300, -150, 400, -150, 400, 25);
  pop();
}

function drawSun() {
  push();
  //sun
  fill(sunCol1, sunCol2, sunCol3);
  noStroke();
  translate(325, -325);
  circle(0, 0, 80);
  pop();
}

function drawPier() {
  push();
  //pier pillars
  fill(88, 57, 39);
  noStroke();
  rect(-185, -174, 8, 50);
  rect(-155, -175, 8, 50);
  rect(-125, -176, 8, 50);
  rect(-95, -177, 8, 50);
  rect(-65, -178, 8, 50);
  rect(-35, -179, 8, 50);
  rect(5, -180, 8, 50);
  rect(35, -181, 8, 50);
  rect(65, -182, 8, 50);
  rect(95, -183, 8, 50);
  rect(125, -184, 8, 50);
  rect(155, -185, 8, 50);
  //top of pier
  strokeWeight(8);
  stroke(88, 57, 39);
  line(-200, -175, 185, -185);
  pop();
}

function drawCrab() {
  fill(255, 0, 0);
  noStroke();
  ellipse(crabX, -65, 25, 15);
  stroke(0.75);
  stroke(255, 0, 0);
  line(crabX - 18, -72, crabX - 8, -70);
  line(crabX - 18, -72, crabX - 25, -65);
  line(crabX - 18, -64, crabX - 8, -62);
  line(crabX - 18, -64, crabX - 25, -58);
  line(crabX + 18, -72, crabX + 8, -70);
  line(crabX + 18, -72, crabX + 25, -65);
  line(crabX + 18, -64, crabX + 8, -62);
  line(crabX + 18, -64, crabX + 25, -58);
}

function drawClouds() {
  fill(255);
  noStroke();
  arc(-100, -300, 150, 100, PI, 0);
  arc(-175, -300, 60, 60, PI, 0);
  arc(-30, -300, 60, 60, PI, 0);
  arc(150, -300, 150, 100, PI, 0);
  arc(75, -300, 60, 60, PI, 0);
  arc(225, -300, 60, 60, PI, 0);
}

function drawBucket() {
  push();
  fill(0,200,0); 
  noStroke();
  rect(-25, -50, 30, 25);
  fill(245, 213, 161)
  stroke(0,200,0)
  arc(-10,-50,25,30,PI,0 )
}

function mouseClicked() {

  let crabDistance = dist(mouseX, mouseY, crabX + 200, 400 - 65);

  if (crabDistance < 12.5) { 
    crabX += 15;
  }

  let sunDistance = dist(mouseX, mouseY, 200 + 325, 400 - 325);
  if (sunDistance < 40) {
    if (sunCol1 == 255) {
      sunCol1 = 128;
      sunCol2 = 128;
      sunCol3 = 128;
    } else {
      sunCol1 = 255;
      sunCol2 = 191;
      sunCol3 = 74;
    }

  }
}



