var fixedRect, movingRect;
var g1, g2, g3, g4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(600, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  g1 = createSprite(200,200,60,60);
  g1.shapeColor = "green";
  g1.debug = true;

  g2 = createSprite(400,200,60,60);
  g2.shapeColor = "green";
  g2.debug = true;

  g3 = createSprite(600,200,60,60);
  g3.shapeColor = "green";
  g3.debug = true;

  g4 = createSprite(800,200,60,60);
  g4.shapeColor = "green";
  g4.debug = true;

  movingRect.velocityY = -5;
  
  
  g3.velocityY = 5;

  
  
}

function draw() {
  background(0,0,0);  

  fixedRect.x = World.mouseX;
  fixedRect.y = World.mouseY;

  bounceOff(movingRect, g3);
  isTouching(fixedRect, g2);
  drawSprites();
}

