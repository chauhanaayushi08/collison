var mr
var fr
function setup() {
  createCanvas(800,400);
 fr= createSprite(400, 200, 50, 50); 
 fr.shapeColor="blue"
 mr= createSprite (200,300,40,60);
 mr.shapeColor="green"
}

function draw() {
  background(0); 
  mr.x=mouseX 
  mr.y=mouseY
  if(mr.x-fr.x<mr.width/2+fr.width/2&& fr.x-mr.x<fr.width/2+mr.width/2&&mr.y-fr.y<mr.height/2+fr.height/2&&fr.y-mr.y<mr.height/2+fr.height/2) {
    mr.shapeColor="orange"
    fr.shapeColor="orange"
  }
else{
  mr.shapeColor="green"
  fr.shapeColor="blue"
}
  drawSprites();
}