var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,800);
    
  speed=random(55,80);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);

  car.velocityX=speed;
   
 
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<(car.width=wall.width/x)){
    car.velocityX=0
  }  
  drawSprites();
}