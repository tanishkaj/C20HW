var car, wall;
var speed, weight;
var height = 400;
var deformation;

function setup() {
  createCanvas(1600,height);

  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1000,200,60,height/2);
}

function draw() {

  background("white");  

  car.velocityX = speed;
  wall.shapeColor = color(80,80,80);

  if (car.isTouching(wall)) {
    car.velocityX = 0;
    deform();
  }

  drawSprites();
}

function deform(){
  deformation = (0.5*weight*speed*speed)/22500;
  
  if (deformation < 100) {
    car.shapeColor = color("green"); 
  }
  
  if (100 < deformation < 180) {
    car.shapeColor = color("yellow");
  }

  if (deformation > 180) {
    car.shapeColor = color("red");
  }

}

