//creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//setting up
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//roof
	roof = new Roof(390,150,360,40)

	//bob objects
	bobObject1 = new bob(250,500,35);
	bobObject2 = new bob(320,500,35);
	bobObject3 = new bob(390,500,35);
	bobObject4 = new bob(460,500,35);
	bobObject5 = new bob(530,500,35);

	//ropes connects roof and bob object
	rope1 = new Rope(bobObject1.body, roof.body, -35*4,0);
	rope2 = new Rope(bobObject2.body, roof.body, -35*2,0);
	rope3 = new Rope(bobObject3.body, roof.body, -35*0,0);
	rope4 = new Rope(bobObject4.body, roof.body, -35*-2,0);
	rope5 = new Rope(bobObject5.body, roof.body, -35*-4,0);

	//running engine
	Engine.run(engine);
  
}

//drawing 
function draw() {
	//background color
	background("lightBlue");

	//rectangle mode as center
	rectMode(CENTER);
	
	Engine.update(engine);

	//displauing classes
	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

//momentem to one bob object of left side...
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000})
	}
}


