
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var p1,g1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	p1 = new paper(100,630,50);
	trash1 = new trash(600,485,20,310);
	trash3 = new trash(780,485,20,310);
	trash2 = new trash(500,340,160,20);
	invistrash2 = new trash(690,618,160,20);
	

	

	g1 = new ground(400,650,800,20);
	invisg1 = new ground(295,637,590,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  p1.display();
  trash1.display();
  
  trash3.display();
  trash2.display2();

  

  
  g1.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(p1.body,p1.body.position,{x:60,y:-100});

  
	}
}


