const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,ground;
//var 

function preload() {
  bg = loadImage("PlaceholderImages/LevelAssets/Backgrounds/HauntedForest.png");
  //obstacle1 = loadImage("PlaceholderImages/Enemies/BoneGoombaPlaceholder")
  //obstacle2 = loadImage("PlaceholderImages/Enemies/BooPlaceholder2")
  //obstacle3 = loadImage("PlaceholderImages/Enemies/ParabonesPlaceholder3")
 heroimage=loadImage("PlaceholderImages/LuigiPlaceHolderUpdated.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight-120);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(displayWidth/2, displayHeight-120, displayWidth, 20);

 
  hero = new Hero(500,50,350);
  
 
  BoneGoomba = new Goomba(780,800,100);
  Boo = new Ghost(700,800,100)
  ParaBones = new BoneDragon(1050,800,100)

  box1 = new Box(1000, 900, 70, 70);
  box2 = new Box(1000, 900, 70, 70);
  box3 = new Box(1000, 900, 70, 70);
  box4 = new Box(1000, 900, 70, 70);
  box5 = new Box(1000, 900, 70, 70);
  box6 = new Box(1000, 900, 70, 70);
  box7 = new Box(1000, 900, 70, 70);
  box8 = new Box(900, 900, 70, 70);
  box9 = new Box(900, 900, 70, 70);
  box10 = new Box(900, 900, 70, 70);
  box11 = new Box(900, 900, 70, 70);
  box12 = new Box(900, 900, 70, 70);
  

}

function draw() {
  background(bg);
  Engine.update(engine);
  drawSprites()
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()

 

 hero.display();
 // rope.display();
  BoneGoomba.display();
  Boo.display()
  ParaBones.display()
  
}

function keyPressed(){
if( keyCode === 65){
  hero.x -= 10
}
if( keyCode === 68){
  hero.x += 10}
}


