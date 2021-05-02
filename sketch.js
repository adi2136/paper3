
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world
var left,right,x;
var dustbin;
function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
	aper = new Paper(130,450,40,40)
	ground = new Ground(400,680,800,20)
	dustbin=new Dustbin(600,620,100,100)
    g=new Ground(645,630,10,80)
	l=new Ground(557,630,10,80)
	r=new Rope(aper.body,{x:130, y:450});
    Engine.run(engine); 
}
function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
 r.display();
  aper.display();
  ground.display();
  dustbin.display();
  
  
}
function mouseDragged(){
	Matter.Body.setPosition(aper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    r.fly();
}
