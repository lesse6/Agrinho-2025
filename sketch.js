var xJogador1 = 300
var xJogador2 = 220
var xJogador3 = 350
var img01
var y = 800
var speed = 0.05;
var x = 380

function setup() {
  createCanvas(800, 600);
  img01=loadImage('Do campo a (1).png')
  
  
}

function draw() {
  background(img01);
  
  let deltaX = speed * deltaTime
  y -= deltaX
  x += deltaX
  
  textSize(50)
  text("🎈",20,xJogador1)
  xJogador1 -= random (2)
  if (xJogador1<-100){
  xJogador1=300
  }
  textSize(30)
  text("🎈",100,xJogador2)
  xJogador2 -= random (2)
  if (xJogador2<0){
  xJogador2=220
  }
  textSize(80)
  text("🎈",250,xJogador3)
  xJogador3 -= random (2)
  if (xJogador3<0){
  xJogador3=310
  }
  
  if (y < 380)  {
    y = 800;
  }
  text("🚗",y, 500, 20);
  
  textSize(20)
  if (x > 800)  {
    x = 380;
  }
  text("✈️",x, 50, 20);
  
  
  
}