//setup varibles
var playerCar,playerCarImage;
var raceCarF1,raceCarF1Image;
var racecarLB,racecarLBImage;
var road,roadImage;
var van,vanImage;
var carBMW,carBMWImage;
var coin,coinImage;
var coin2,coin3;
var score;
function preload(){
//load images
playerCarImage = loadImage("playerCar.png");
raceCarF1Image = loadImage("raceCarF1.png");
raceCarLBImage = loadImage("raceCarLB.png");
roadImage = loadImage("path.png");
vanImage = loadImage("van.png");
carBMWImage = loadImage("BMW.png");
coinImage = loadImage("coin.png");
}


function setup() {
  background("red");
  //setup sprite and canvas
  createCanvas(400,500);
  road = createSprite(200,250);
  road.addImage(roadImage);
  road.velocityY = 10;
  road.scale = 1.4;
  playerCar = createSprite(200,350);
  playerCar.scale = 0.22;
  playerCar.addImage(playerCarImage);
  raceCarF1 = createSprite(250,300);
  raceCarF1.addImage(raceCarF1Image);
  raceCarF1.scale = 0.17;
  raceCarF1.velocityY = -7;
raceCarLB = createSprite(350,400);
  raceCarLB.addImage(raceCarLBImage);
  raceCarLB.scale = 0.07;
  raceCarLB.velocityY = -5;
  van = createSprite(80,400);
  van.addImage(vanImage);
  van.scale = 0.07;
  van.velocityY = -2;
  carBMW = createSprite(600,100);
  carBMW.addImage(carBMWImage);
  carBMW.scale = 0.27;
  carBMW.velocityY = -4;
  coin = createSprite(150,random(40,250))
  coin.addImage(coinImage);
  coin.scale = 0.2;
  coin2 = createSprite(150,random(30,300))
  coin2.addImage(coinImage);
  coin2.scale = 0.2;
  coin3 = createSprite(150,random(20,350))
  coin3.addImage(coinImage);
  coin3.scale = 0.2;
  edges = createEdgeSprites();
  score = 0;
  
}

function draw() {
  
  //if loops and calling functions
if(road.y > 600){
  road.y = height/2;
}


playerCarMove();
otherCarMovment()
randomCoins();



  drawSprites();
  gameOver();
  textSize(30)
  text("Score: "+score,150,50);
}






//player movment
function playerCarMove(){
  if(keyDown("left")){
    playerCar.x = playerCar.x -6;
  }else if(keyDown("right")){
    playerCar.x = playerCar.x +6;
  }

  if(keyDown("up")){
    playerCar.y = playerCar.y -3;
  }

  if(playerCar.y < 0 ){
    playerCar.y = 500;
  }
if(playerCar.x > 380){
  playerCar.x = 20;
}
if(playerCar.x < 20){
  playerCar.x = 380;
}
}


//car movement
function otherCarMovment(){
  f1CarMovment();

  if(van.y < 0 ){
     van.y = 500;
  }

  if(carBMW.y < 0 ){
    carBMW.y = 500;
  }

  if(raceCarLB.y < 0 ){
    raceCarLB.y = 500;
  }

}




//F1 car movement
function f1CarMovment(){
  if(raceCarF1.y < 0 ){
    raceCarF1.y = 500;
    raceCarF1.x = random(170,250);
  }
  
}

//random coin postion
function randomCoins(){
  if(playerCar.isTouching(coin)){
    coin.y = random(40,250);
   score = score+1;
  }else if(playerCar.isTouching(coin2)){
    coin2.y = random(30,300);
    coin2.x = 290;
    score = score+1;
  }else if(playerCar.isTouching(coin3)){
    coin3.y = random(20,350);
    coin3.x = 30;
    score = score+1;
  }
}







function gameOver(){
  //When the or operater was used for multiple sprites it was not working
  //if(playerCar.isTouching(van)||playerCar.isTouching(racecarLB)),was not working
  if(playerCar.isTouching(van)){
    background(0);
    fill("red");
    text("Game Over",200,200) 
  }
}