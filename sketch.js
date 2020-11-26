var bullet, wall, speed, weight, damage, deformation, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  
  weight = random(30,52);
  
  bullet = createSprite (50, 200, 70, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "blue";

  thickness = random(22,83);
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "red";
}

function draw() {
  background("black");  

  deformation = 0.5 * weight * speed * speed/22500;

  if(wall.x - bullet.x < bullet.width/2 + wall.width/2) {
    bullet.velocityX = 0;
    if (deformation < 100) {
      bullet.shapeColor = "green"
    }
    if (deformation > 100 && deformation < 180) {
      bullet.shapeColor = "yellow"
    }
    if (deformation > 180) {
      bullet.shapeColor = "cyan"
    }
  }

  if(collide(bullet, wall)) {
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage > 10) {
      wall.shapeColor = "purple"
    }

    else if(damage < 10) {
      wall.shapeColor = "orange"
    }
  }

  drawSprites();
}