var bullet,speed,weight,wall,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100, 200, 70, 10);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,152);
  thickness=random(22,83);
  bullet.velocityX= speed;
  }

function draw() {
  background(0,0,0);
  textSize (20);
  fill("white");
  stroke ("black");
  text("bullet weight="+weight,600,100);
  text("bullet speed="+speed,200,100);
  
  if(isColliding(bullet,wall)) {
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
   
    if(damage>10){
      bullet.shapeColor=color(255,0,0);
      background(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor=color(0,255,0);
      background(0,255,0);
    }
    strokeWeight(3);
    text("bullet weight="+weight,600,100);
    text("bullet speed="+speed,200,100);
    text("damage="+damage,1250,350);
    text("wall thickness="+thickness,600,350);
  }
  
  drawSprites();
}
function isColliding(vbullet,vwall){

bulletRightEdge=vbullet.x+vbullet.width;
wallLeftEdge=vwall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}