var fixedObject, movingObject;

function setup() {
  createCanvas(800,400);
  fixedObject = createSprite(400, 200, 50, 50);
  movingObject = createSprite(400,200,50,100);
  fixedObject.shapeColor = "red";
  movingObject.shapeColor = "green";
 
}

function draw() {
  background(255,255,255);
  
  if(movingObject.x - fixedObject.x < fixedObject.width/2 + movingObject.width/2
    && fixedObject.x - movingObject.x < fixedObject.width/2 + movingObject.width/2
    && fixedObject.y - movingObject.y < fixedObject.height/2 + movingObject.height/2
    && movingObject.y - fixedObject.y < fixedObject.height/2 + movingObject.height/2){
    fixedObject.shapeColor = "blue";
    movingObject.shapeColor = "blue";
  }
  else{
    fixedObject.shapeColor = "red";
    movingObject.shapeColor = "green";
  }
  
  movingObject.y = World.mouseY;
  movingObject.x = World.mouseX;
  
  drawSprites();
}