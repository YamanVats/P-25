
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	paperObj=new paper(200,450,100,100);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  paperObj.display();
  dustbinObj.display();
}
function keyPressed(){
	if (keyCode===UP_ARROW){
        var pos=paperObj.body.position
	    Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145})	
	}
}
