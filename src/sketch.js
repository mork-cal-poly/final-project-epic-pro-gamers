let timer = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(600,400);
  myCanvas.parent("canvas-parent");
  noLoop();
}

function draw() {

drawbeachBackground(300,400);

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
  fill(231,196,150);   //Sand Color
  rect(-300,-175,width,height);
  pop();
}