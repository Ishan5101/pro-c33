const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var backgroundImg;
var snow4,snow5;

function preload(){
  backgroundImg=loadImage("snow3.jpg");
}
function setup() {
  var canvas = createCanvas(1000,900);

  engine = Engine.create();
  world = engine.world;
 snow4 = new Snow(700,320,70,70);
 
}

function draw() {
  background( backgroundImg);
  drawSprites();
}