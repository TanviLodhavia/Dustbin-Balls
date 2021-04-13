const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var paperBall;
var ground;
var base,left,right;
var img;
var launcher;

function preload(){
	img = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	
	paperBall = new Paper (200,330,70);
	ground = new Ground (600,370,1200,20);
	
	left = new Dustbin (905,310,13,100);
	right = new Dustbin (1095,310,13,100);
	base = new Dustbin (1000,350,200,20);
	launcher = new Launcher(paperBall.body, {x:150, y:330})
	sprite = createSprite(1000,245,20,20);
	sprite.addImage(img);
	sprite.scale = 0.8;
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(100);
  paperBall.display();
  ground.display();
  base.display();
  left.display();
  right.display();
  launcher.display();
  
  drawSprites(); 
  //paperBall.velocityY = paperBall.velocityY + 0.8
}
function keyPressed() { if (keyCode === UP_ARROW) { 
	//Matter.Body.setStatic(paperBall,false); 
	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:215,y:-250}); } }
