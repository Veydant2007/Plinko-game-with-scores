var Engine = Matter.Engine,
   World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  var turn
  var particle
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  ngine = Engine.create();
  world = engine.World;
  ground = new Ground(width/2,height,width,20);
turn = 0

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  text(score+" score",700,100)
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (plinkos.position.y>= 600){
     if (plinkos.position.x<300 ){
     score = score+500
     }
     if (plinkos.position.x >=301 && plinkos.position.x<= 601 ){
      score = score+100
      }
      if (plinkos.position.x >=602 ){
        score = score+200
        }
     
   }

   if (turn = 5){
     text("Game Over",400,400)
   }
}

function mousePressed(){
  if (gameState == "end"){
    count++

  particle = new particle(mousex,10,10,10)
  }
}
