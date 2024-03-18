let timer = 0;
let clickedBucket = false;
let clickedBeachBag = false;
let sharkFinX = -50;
let clickedUmbrella = false;
let arrowClicked = false;

let clickedTreasureChest = false;

let clickedFishOne = false;
let xPositionFishOne = 200

let clickedFishTwo = false;
let xPositionFishTwo = 300
let yPositionFishTwo = 280

let clickedFishThree = false;
let rotateFish = 0

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(600,400);
  myCanvas.parent("canvas-parent");
}

function draw() {

if (!arrowClicked) {
  beachScene()
}
else {
  underWaterScene()
}

}

function mouseClicked(){

// beachScene

  if (mouseX>80 && mouseX<171 && mouseY>317 && mouseY<367 && beachScene)
  clickedBucket = !clickedBucket
else if (mouseX>250 && mouseX<392 && mouseY>248 && mouseY<302 && beachScene)
clickedBeachBag = !clickedBeachBag
else if (mouseX>436 && mouseX<462 && mouseY>166 && mouseY<323 && beachScene)
clickedUmbrella = !clickedUmbrella
else if (mouseX>27 && mouseX<100 && mouseY>250 && mouseY<290 && beachScene)
dockScene();
if (mouseX>20 && mouseX<125 && mouseY>40 && mouseY<200 && beachScene) {
  arrowClicked = true
}




// underWaterScene

if (mouseX > 475 && mouseX < 590 && mouseY > 280 && mouseY < 400)
clickedTreasureChest = !clickedTreasureChest;      

if (mouseX > 100 && mouseX < 280 && mouseY > 60 && mouseY < 180)
clickedFishOne = !clickedFishOne

if (mouseX > 250 && mouseX < 360 && mouseY > 210 && mouseY < 280)
clickedFishTwo = !clickedFishTwo

if (mouseX > 420 && mouseX < 555 && mouseY > 60 && mouseY < 180)
clickedFishThree = !clickedFishThree

}


function drawbeachBackground(beachBackgroundX,beachBackgroundY){
  push();
   translate(beachBackgroundX,beachBackgroundY);
   background(225);

  //SKY
   noStroke();
   fill(120,221,250);   //Sky Color
   rect(-300,-400,width,150);

  //SUN
    //(255,167,0) to (255,0,0)
   let skyGradientR = 255
   let skyGradientG = 167
   let skyGradientB = 0
   for (let skyGradient = 250; skyGradient >= 10; skyGradient = skyGradient -10){
   fill(skyGradientR,skyGradientG,skyGradientB);
   arc(0,-220,skyGradient,skyGradient,PI,0);
   skyGradientG = skyGradientG - 167 * (10/240);
   }

   //BEACH OCEAN WATER
   let beachWaterR = 79
   let beachWaterG = 66
   let beachWaterB = 180
  for (let beachWater = -250; beachWater < -200; beachWater = beachWater + 1){
    fill(beachWaterR,beachWaterG,beachWaterB);
    noStroke();
    rect(-300,beachWater,width,5);
      //Ocean Blue (79, 66, 180) to Ocean Green (72, 191, 146)
    beachWaterR = beachWaterR - 7 * (1/50);
    beachWaterG = beachWaterG + 125 * (1/50);
    beachWaterB = beachWaterB - 34 * (1/50);
  }

  //BEACH SAND
  fill(249, 188, 76);   //Sand Color
  rect(-300,-175,width,height);
  pop();
}

function drawsandCastle(sandCastleX,sandCastleY){
  push();
translate(sandCastleX,sandCastleY);
noStroke();

//TOWER BASE
fill(214, 163, 68);   //Darker sand color
fill(203, 153, 61);
fill(175, 132, 52);
quad(-251,-60,-211,-60,-200,-10,-263,-10);
quad(-254,-70,-207,-70,-211,-60,-251,-60);

//TOWER BATTLEMENTS
rect(-254,-80,47,10);
rect(-254,-90,10);
rect(-235.5,-90,10);
rect(-217,-90,10);

//SAND CASTLE BASE
fill(233, 175, 69);   //Dark sand color
fill(203, 153, 61);
rect(-280,-40,100,35);

//BASE BATTLEMENTS
rect(-280,-50,15)
rect(-252,-50,15);
rect(-225,-50,15);
rect(-195,-50,15);

//SAND CASTLE DOOR
fill(175, 132, 52);   //Darker sand color
arc(-230,-5,20,50,PI,0);



pop();
}

function drawbucketShovel(bucketX,bucketY){
push();
translate(bucketX,bucketY);
noStroke();

//BUCKET
fill(255,0,0);   //Red
rect(-213,-80,46,40)
arc(-190,-40,46,10,0,PI);

//BUCKET RIM
fill(20,160,250);   //Blue
rect(-216,-80,52,7,2)

//BUCKET HANDLE
stroke(13, 105, 162);
strokeWeight(5);
noFill();
curve(-170,-100,-186,-77,-166,-56,-140,-86);

//SHOVEL
strokeWeight(1);
noStroke();
fill(240, 217, 7);   //Yellow
rect(-153,-70,5,25);
arc(-150,-30,22,40,PI,0);
fill(211, 190, 6);
fill(240, 217, 7);
fill(211, 190, 6);
arc(-150,-30,15,30,PI,0);

pop();
}

function drawbeachBag(beachBagX,beachBagY){
push();
translate(beachBagX,beachBagY);
strokeWeight(1.5);

//BAG
fill(100);
stroke(48, 43, 32);   //DARK BROWN
ellipse(0,-50,100,10);
fill(136, 122, 91);   //LIGHT BROWN
quad(-50,-50,50,-50,40,0,-40,0);

//BAG HANDLE
noFill();
strokeWeight(4);
stroke(48, 43, 32);   //DARK BROWN
beginShape();
curveVertex(-30,-50);
curveVertex(-30,-48.5);

curveVertex(-15,-30);
curveVertex(-10,-25);
curveVertex(10,-25);
curveVertex(15,-30);

curveVertex(30,-48.5);
curveVertex(30,-50);
endShape();

pop();
}

function drawbeachTowel(beachTowelX,beachTowelY){
push();
translate(beachTowelX,beachTowelY);
//BEACH TOWEL
noStroke();
fill(255);
rect(-35,-120,70,120);

//BEACH TOWEL STRIPES
fill(137,207,240);
rect(-35,-120,14,120);

rect(-7,-120,14,120);

rect(21,-120,14,120);

pop();
}

function drawbeachCloud(beachCloudX,beachCloudY,beachCloudS){
  push();
  translate(beachCloudX,beachCloudY)
  scale(beachCloudS)
  noStroke();
  ellipse(0,-50,55);
  ellipse(40,-55,50);
  ellipse(70,-65,50);
  ellipse(40,-80,50);
  ellipse(0,-90,50);
  ellipse(-35,-80,50);
  ellipse(-40,-55,50);
  ellipse(-65,-70,40);
  pop();
}

function drawsharkFin(sharkFinX,sharkFinY){
  push();
  translate(sharkFinX,sharkFinY);
  //FIN
  fill(150,183,192);
  triangle(0,-20,15,0,0,0);
  strokeWeight(1);
  stroke(0);
  line(-3,0,15,0);
  pop();
}

function drawbeachUmbrellaOpen(beachUmbrellaX,beachUmbrellaY){
push();
translate(beachUmbrellaX,beachUmbrellaY);
fill(255);   //WHITE
rect(-3,-150,6,120);
fill(255,0,0);   //RED
arc(0,-140,150,80,PI,0);
fill(255);
arc(0,-140,75,80,PI,3*PI/2);
arc(0,-140,75,80,3*PI/2,0);
pop();
}

function drawbeachUmbrellaClosed(beachUmbrellaClosedX,beachUmbrellaClosedY){
  push();
  translate(beachUmbrellaClosedX,beachUmbrellaClosedY);
  fill(255);   //WHITE
  rect(-3,-150,6,120);
  fill(255,0,0);   //RED
  triangle(0,-180,10,-75,-10,-85);
  fill(255);   //WHITE
  triangle(0,-180,4,-78,-4,-82);
  pop();
}

function drawArrow(ArrowX,ArrowY){
  push();
  translate(ArrowX,ArrowY);
  fill(255,0,0);
  noStroke();
  rect(-30,-30,50,20);
  triangle(-50,-20,-30,-40,-30,0)
  pop();
}

function beachScene(){
 
//BEACH BACKGROUND
drawbeachBackground(300,400);

//BUCKET AND SHOVEL
drawbucketShovel(300,400);

//CLICKED BUCKET TO MAKE SAND CASTLE
if (clickedBucket == true){
drawsandCastle(300,400);
}

//BEACH BAG
drawbeachBag(340,300);

//CLICK BEACH BAG TO DRAW BEACH TOWEL
if (clickedBeachBag == true){
drawbeachTowel(240,360);
}

//CLOUDS
drawbeachCloud(200,50);
drawbeachCloud(50,110,.75);
drawbeachCloud(400,90,.8);
drawbeachCloud(590,150)

if (sharkFinX < 700){
  sharkFinX = sharkFinX + 1
}

if (sharkFinX == 699){
  sharkFinX = -50
}

//SHARK FIN
drawsharkFin(sharkFinX,170);

//BEACH UMBRELLA CLOSED
if (clickedUmbrella == false){
drawbeachUmbrellaClosed(450,350);
}

//BEACH UMBRELLA OPEN
if (clickedUmbrella == true){
drawbeachUmbrellaOpen(450,350);
}

//ARROW TO DOCKS SCENE
drawArrow(80,290);


}

// --- underWaterScene code ---

function drawBlueBackground (x, y) {
 
  push()
  translate(x, y)
  
  let r = 173
  let g = 216
  let b = 230
  
  for(y=0; y<=height; y+=1) {
  fill(r, g, b)
  noStroke()
  rect(0, y, width, 1)
  
  r = r - 173 / (height/1)
  g = g - 216 / (height/1)
  b = b + 9 / (height/1)
  } 
 
  pop()   
    
}

function drawBubbles (x, y, scaleBubbles) {
  
  push()
  
  translate(x, y)
  scale(scaleBubbles)
  
  fill(255, 255, 255, 50)
  noStroke()
  ellipse(0, 0, 30)
  
  pop()
  
}

function drawClosedTreasureChest (x, y) {
  
  push()
  translate(x, y)
  
  fill(92, 64, 51)
  strokeWeight(10)
  stroke(255,215,0)
  rect(100, 320, 100, 70)
  
  fill(92, 64, 51)
  strokeWeight(10)
  stroke(255,215,0) 
  arc(150, 320, 100, 70, PI, 2*PI)
  
  fill(255,215,0)
  rect(145, 315, 10, 20)
  
  pop()
  
}

function drawOpenTreasureChest (x, y) {
  
  push()
  translate(x, y)
  
  fill(92, 64, 51)
  strokeWeight(10)
  stroke(255,215,0)
  rect(100, 325, 100, 70)
  
  fill(92, 64, 51)
  strokeWeight(10)
  stroke(255,215,0) 
  arc(150, 280, 100, 70, 2*PI, PI)
  
  fill(255,215,0)
  rect(145, 315, 10, 20)
  
  fill(255, 255, 0)
  strokeWeight(3)
  stroke(255, 215, 0)
  ellipse(50, 390, 15)
  
  fill(255, 255, 0)
  strokeWeight(3)
  stroke(255, 215, 0)
  ellipse(60, 390, 15) 
  
  fill(255, 255, 0)
  strokeWeight(3)
  stroke(255, 215, 0)
  ellipse(80, 390, 15)
  
  fill(255, 255, 0)
  strokeWeight(3)
  stroke(255, 215, 0)
  ellipse(100, 390, 15)
  
  fill(255, 255, 0)
  strokeWeight(3)
  stroke(255, 215, 0)
  ellipse(140, 390, 15)
  
  fill(255, 255, 0)
  strokeWeight(3)
  stroke(255, 215, 0)
  ellipse(150, 390, 15)
  
  fill(255, 255, 0)
  strokeWeight(3)
  stroke(255, 215, 0)
  ellipse(170, 390, 15)
  
  fill(255, 255, 0)
  strokeWeight(3)
  stroke(255, 215, 0)
  ellipse(200, 390, 15)
  
  pop()
  
}

function drawFish (x, y, scaleFish, rotateFish) {
  
  push();
  translate(x, y);
  scale(scaleFish)
  rotate(rotateFish)
  
// Back Fin
  
  fill(240, 227, 0)
  noStroke()
  triangle(-175, -150, -100, -100, -175, -50)
  
// Stripe on Back Fin
  
  fill(0, 89, 240)
  rect(-175, -105, 70, 10)
 
// Bottom Right Fin
  
  fill(240, 138, 67)
  triangle(0, -70, 100, -70, 0, 0)
  
// Bottom Left Fin
  
  fill(240, 198, 0)
  triangle(-115, -100, 0, -40, -65, -7)
  
// Top Right Fin
  
  fill(240, 158, 45)
  triangle(70, -165, 110, -110, 0, -110)
  
// Top Middle Fin
  
  fill(240, 198, 0)
  triangle(0, -200, 110, -110, -30, -110)
  
// Top Left Fin
  
  fill(240, 138, 67)
  triangle(-100, -205, 80, -110, -95, -100)
  
// Body
  
  fill(156, 212, 240)
  ellipse(0, -100, 240, 120)
  
// Eye
  
  fill(255)
  ellipse(70, -110, 44)
  fill(0)
  ellipse(70, -110, 20)
  
// Body Fin
  
  fill(0, 89, 240)
  noStroke()
  arc(0, -100, 40, 40, 5*QUARTER_PI, PI - QUARTER_PI, PIE);

   pop();
  
}

function printBubbles () {
  
  // --- LOOPS FOR BUBBLES ---
  
  randomSeed(101)
  
    // Upper left corner
  
  for (let i=0; i < 5; i ++) {
      drawBubbles(random(0, width/2), random(0,height/2), random(0.8, 1))
   }

// Upper right corner
  
   for (let i=0; i < 5; i++)  {
      drawBubbles(random(width/2, width), random(0,height/2), random(0.8, 1))
   }

// Lower left corner
  
   for (let i=0; i < 5; i ++) {
    drawBubbles(random(0,width/2),random(height/2,height), random(0.8, 1))
   }

  
// Lower right corner
  
  for (let i=0; i < 10; i ++) {
    drawBubbles(random(width/2, width), random(height/2, height), random(0.8, 1)) 
 }
  
}

function changeStateTreasureChest () {
  
  // --- IF STATEMENT FOR TREASURE CHEST ---
  
  if (clickedTreasureChest){
    drawOpenTreasureChest (380, 0)
  }
  else
  {
    drawClosedTreasureChest (380, 5)
  }
  
}

function printFish () {
  
  // --- FISH ---
  
  drawFish (xPositionFishOne, 180, 0.5, 0)
  
  if (clickedFishOne) {
    xPositionFishOne = xPositionFishOne + 1
  }
  
  drawFish (xPositionFishTwo, yPositionFishTwo, 0.3, 0)
  
  if (clickedFishTwo) {
    xPositionFishTwo = xPositionFishTwo + 1
    yPositionFishTwo = yPositionFishTwo - 1
  }
  
  drawFish (500, 175, 0.4, rotateFish)
  
  if (clickedFishThree) {
    rotateFish = rotateFish + 0.2
  }
  
}

function drawArrowUnderWater(ArrowUnderWaterX,ArrowUnderWaterY){
  push();
  translate(ArrowUnderWaterX,ArrowUnderWaterY);
  fill(255,0,0);
  noStroke();
  rect(50, 300,50,20);
  triangle(50,340,50,280,30,310)
  pop();
}

function underWaterScene (){
  
  drawBlueBackground (0, 0)
  
  printBubbles()
  
  changeStateTreasureChest ()
  
  printFish()

  drawArrowUnderWater (0, 0)
  
}
