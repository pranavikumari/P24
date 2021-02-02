
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);
	
	hammer= new Hammer(100,100);

	stone = new Stone(500,320,70,70);

	rubber= new Rubber(400,320,60,60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  hammer.display();
  stone.display();
  ground.display();
  rubber.display();
  
  drawSprites();
 
}



