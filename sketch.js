var pathImg,path;
var boyImage,boy;
var leftBoundary,rightBoundary;
function preload(){
  //pre-load images
  boyImage=loadAnimation("Runner-1.png","Runner-2.png");
  pathImage=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY=4;
  path.scale=1.2;

  //creating boy sprite
  boy=createSprite(180,320,30,30);
  boy.addAnimation("boy",boyImage);
  boy.scale=0.2;

  //creating left and right boundary
leftBoundary=createSprite(80,200,20,400);
leftBoundary.visible=false;

rightBoundary=createSprite(330,200,20,400);
rightBoundary.visible=false;
}

function draw() {
  background(0);

  //giving velocity to the path
path.velocityY=4;

//connecting boy with mouse touch
boy.x=World.mouseX;

//creating boundary edges
boy.collide(leftBoundary);
boy.collide(rightBoundary);

//resetting the path
if(path.y>400){
path.y=height/2;
}
drawSprites();
}

