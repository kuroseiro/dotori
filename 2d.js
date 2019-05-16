function setup() {
 var pro = createCanvas(windowWidth, windowHeight);
 pro.parent('juego');
 pro.id("pantalla-2d");
 pro.position(0,0);
 start();
 cambio.style.float = 'left';
 rectMode(CENTER);
 ellipseMode(CENTER);
 fondo = color(0, 50);
}
var cambio;
var inclusion;
var posY = 580,
    posX = 50,
    etapa = 1,
    fondo = 1,
    cont = 0;
function draw() {
  background(fondo);
  fill(95, 237, 170);
  rect(posX, posY, 40, 40);
  noStroke();
  if (posY > height-20) {

  }
  switch(etapa){
    case 1:
    //movimiento
    fondo = color(16, 26, 55, 100);
    break;
    case 2:
    //enemigo
    fondo = color(99, 11, 11, 100);
    ellipse(width-200,580,100,100);
    if(posX > width-275 && posX < width-125 && posY > 525 && posY < 675){
      etapa = 3;
    }
    break;
    case 3:
    //pelea
    run = true;
    cambio.style.visibility = 'collapse';
    cambio.style.float = 'left';
    document.getElementById('pantalla-3D').style.visibility = 'visible';
    //document.getElementById('juego').innerHTML =
    anime();
    noLoop();
    etapa = 1;
    break;
  }
  movimiento();
}

function movimiento() {
  if (keyIsDown(LEFT_ARROW)) {
     if (posX < -20) {
       cont--;
       cont === 2 ? etapa = 2 : etapa = 1;
       posX = width-20;
     }else {
       posX -= 5;
     }
   }

   if (keyIsDown(RIGHT_ARROW)) {
     if(posX > width-20){
       cont++;
       cont === 2? etapa = 2 : etapa = 1;
       posX = 20;
     }else {
       posX += 5;
     }
   }

   if (keyIsDown(UP_ARROW)) {
     if (posY > 20) {
         posY -= 5;
     }else {
       posY = 20;
       //alert(":´(");
     }
   }

   if (keyIsDown(DOWN_ARROW)) {
     if (posY < height-20) {
       posY += 5;
     }else {
       posY = height-20;
     }
   }
}
function start() {
  cambio = document.getElementById('pantalla-2d');
  //<script src="2d.js" type="text/javascript"></script>
  //inclusion = "<script src="3d.js" type="text/javascript"></script>";
}
function mousePressed() {
  loop();
  document.getElementById('pantalla-2d').style.visibility = 'visible';
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
