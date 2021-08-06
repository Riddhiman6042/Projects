var sea,seaImg,edges;
var ship,shipAni;

function preload(){
  seaImg = loadImage("sea.png");
  shipAni = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1900,950);

// create the background
  sea = createSprite(550,475,900,950);
  sea.addAnimation("background",seaImg);

// create the ship
  ship = createSprite(250,500);
  ship.addAnimation("Playable_character",shipAni);
  ship.scale = 0.5;
}

function draw() {
  background("white");

  sea.velocityX = -5;

// make the world infinite  
  if(sea.x < 0)
   {
     sea.x = sea.width / 2;
   }

  drawSprites();
}