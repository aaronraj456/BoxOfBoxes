const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var object;


var box;
var ground;

var slider;

var box1;

var boxes=[];

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
 
 
  ground = new Ground(200,400,800,20);

  //colorMode(RGB);
  slider = createSlider(0,50,50);
  slider.position(200,100)
  slider.style(width,50);

}

function mousePressed() { 
  if (mouseY < 400) { 
    boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40))); 
  }
 }

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  //drawSprites();
  for(var i = 0;i<boxes.length;i=i+1){
    boxes[i].display();
  }
  ground.display();

  //box1.display();
}

