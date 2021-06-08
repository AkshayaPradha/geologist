const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

var rubber;
var stone;
var iron;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;
var sand6;
var sand7;
var sand8;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
 
    iron = new Iron(600,590);

   // dark blue
    rubber = new Rubber(900,590,70);

    stone = new Stone(250,590);

    sand1 = new Sand(500,590,10);
    sand2 = new Sand(510,590,10);
    sand3 = new Sand(520,590,10);
    sand4 = new Sand(530,590,10);
    sand5 = new Sand(540,590,10);
    sand6 = new Sand(550,590,10);
    sand7 = new Sand(560,590,10);
    sand8 = new Sand(570,590,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
 
}