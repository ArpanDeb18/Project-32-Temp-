const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img, backgroundImg;
var score=0;
var bg = "light.jpg";
var defaultImg;

function preload(){
  //getBackgroundImage();
  polygon_img=loadImage("hex.png");
  defaultImg = loadImage("city.jpg");
}
function setup() {
  createCanvas(1400,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(0, 700, 5000, 50);
  stand1 = new Stand(550, 600, 400, 10);
  stand2 = new Stand(1050, 350, 250, 10);
 
  box1 = new Box(430,568, 40, 55);
  box2 = new Box(470,568, 40, 55);
  box3 = new Box(510,568, 40, 55);
  box4 = new Box(550,568, 40, 55);
  box5 = new Box(590,568, 40, 55);
  box6 = new Box(630,568, 40, 55);
  box7 = new Box(670,568, 40, 55);
  
  box8 = new Box(470,513, 40, 55);
  box9 = new Box(510,513, 40, 55);
  box10 = new Box(550,513, 40, 55);
  box11 = new Box(590,513, 40, 55);
  box12 = new Box(630,513, 40, 55);

  box13 = new Box(510,458, 40, 55);
  box14 = new Box(550,458, 40, 55);
  box15 = new Box(590,458, 40, 55);

  box16 = new Box(550,403, 40, 55);

 
  block1 = new Box(970, 318, 40, 55);
  block2 = new Box(1010, 318, 40, 55);
  block3 = new Box(1050, 318, 40, 55);
  block4 = new Box(1090, 318, 40, 55);
  block5 = new Box(1130, 318, 40, 55);

  block6 = new Box(1010, 263, 40, 55);
  block7 = new Box(1050, 263, 40, 55);
  block8 = new Box(1090, 263, 40, 55);

  block9 = new Box(1050, 208, 40, 55);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:350});

}
function draw() {

  //if(backgroundImg)
    //background(backgroundImg);
    background(defaultImg);
 
  textSize(20);
  fill("black");
  //strokeWeight(30);
  text("SCORE : "+ score, width - 300, 50);
  
  
  fill("brown");
  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("turquoise");
  box13.display();
  box14.display();
  box15.display();
  fill("grey");
  box16.display();

  fill("skyblue");
 block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("turquoise");
  block6.display();
  block7.display();
  block8.display();
  fill("pink")
  block9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,50,50);

  slingShot.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
      //Matter.Body.setPosition(polygon.body, {x: 100 , y: 350});
  }
}
/*async function getBackgroundImage(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();

   console.log(response);

   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11, 13);
   //console.log(hour);

   if (hour >= 06 && hour <= 18) {
     bg = "day.png";
   } else {
     bg = "night.jpg";
   }

   backgroundImg = loadImage(bg);
   console.log(backgroundImg);
}*/