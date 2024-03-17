let timer = 0;
let clickedBucket = false;
let clickedBeachBag = false;
let sharkFinX = -50;
let clickedUmbrella = false;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(600,400);
  myCanvas.parent("canvas-parent");
}

function draw() {

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
drawbeachTowel(250,360);
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




}

function mouseClicked(){
  if (mouseX>80 && mouseX<171 && mouseY>317 && mouseY<367)
  clickedBucket = !clickedBucket
else if (mouseX>250 && mouseX<392 && mouseY>248 && mouseY<302)
clickedBeachBag = !clickedBeachBag
else if (mouseX>436 && mouseX<462 && mouseY>166 && mouseY<323)
clickedUmbrella = !clickedUmbrella
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
strokeWeight(1);
//BAG
fill(30,120,50)
quad(-50,-50,50,-50,40,0,-40,0);

//BAG HANDLE
strokeWeight(4);
stroke(0);
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

