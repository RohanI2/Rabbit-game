var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
//creating background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

leaf.addImage(leafImg);

//creating apples
function createApples(){
  apple=createSprite(Random(50,350),50,25,25);
  apple.velocityY=3
}
function createLeaves(){
  leaf=createSprite(Random(50,350),50,25,25);
  leaf.velocityY=6;
}
}



function draw() {
  background(0);
  if (frameCount&80===0){
    apples=createSprite(Random(50,350),50,25,25);
    apples.velocityY=3
  }
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=World.mouseX
var select_sprites=Math.round(random(1,2))
if (frameCOunt%80==0){
  if (select_sprites==1){
    createApples();
  }
  else{
    createLeaves();
  }
}
  drawSprites();
}