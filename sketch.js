//namespace

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var ground, ball
var button
var Rotator,Rotator2, Roataor3, Rotator4
var angle = 45
function setup() {
    createCanvas(400, 400);
    // creating artifial engine
    engine = Engine.create()
    world = engine.world

    //  console.log(world)
    //Matter.Bodies.rectangle(x, y, width, height, [options])
    var ground_options = {
        isStatic: true
    }
    ground = Bodies.rectangle(200, 380, 400, 20, ground_options)
    World.add(world, ground)

    var ball_options = {
        restitution: 0.5,
        frictionAir: 0.01

    }
    ball = Bodies.circle(200, 200, 20, ball_options)
    World.add(world, ball)
    //Matter.Bodies.circle(x, y, radius, [options], [maxSides])
    button = createImg("up.png")
    button.position(20, 50)
    button.size(50, 50)
    button.mouseClicked(Vforce)

   Rotator = new Ground (50,370,50,30)
   Rotator2 = new Ground (150,370,50,30)
   Rotator3 = new Ground (250,370,50,30)
   Rotator4 = new Ground (350,370,50,30)
   ellipseMode(RADIUS);
   rectMode(CENTER);
}

function draw() {
    background(0)
    //updating engine
    Engine.update(engine)
    rectMode(CENTER)

    rect(ground.position.x, ground.position.y, 400, 10)
    Rotator.display();
    Rotator2.display();
    Rotator3.display();
    Rotator4.display();
    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 20, 20)
    Engine.update(engine)
}
function Vforce() {
    //Matter.Body.applyForce(body, position, force)
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y:-0.05 })
}
