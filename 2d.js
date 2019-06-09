function setup() {
 var pro = createCanvas(1920, 1080);
 pro.parent('juego');
 pro.id("pantalla-2d");
 pro.position(0, 0);
 start();
 cambio.style.float = 'left';
 rectMode(CENTER);
 ellipseMode(CENTER);
 color_NPC = color('#4807db');
 color_Edificios = color('#5d141d');
 color_fondo = color('#101a37');
 color_personaje = color('#5fedaa');
 color_muro = color('#60b118');
 color_cofre = color('#d4af37');
 color_enemigo = color('#8123a2');
}

var color_NPC,
    color_fondo,
    color_Edificios,
    color_personaje,
    color_muro,
    color_cofre,
    color_enemigo;

var cambio,
    inclusion;

var posY = 580,
    posX = 50,
    etapa = 3,
    cielo = false,
    tierra = true,
    llave_up = false,
    llave_down = false,
    llave_right = false,
    llave_left = false;

function draw() {
  console.log("la etapa es: " + etapa);
  background(color_fondo);
  fill(color_personaje);
  rect(posX, posY, 40, 40);
  noStroke();
  switch(etapa){
    case 0://pueblo
    tierra = true;
    cielo = false;
    if (llave_right) {
      etapa = 1;
      posX = 60;
      llave_right = false;
    }
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, width, 10);
    rect(0, 0, 10, height);
    rect(0, height-10, width, height);
    rectMode(CENTER);
    fill(color_Edificios);
    rect(350, 200, 400, 200);
    rect(350, 750, 400, 200);
    rect(1550, 750, 400, 200);
    fill(color_NPC);
    triangle(700, 200, 750, 100, 800, 200);
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, width, 10);
    rect(0, height-10, width, height);
    rectMode(CENTER);
    break;
    case 1:
    tierra = true;
    cielo = false;
    if(llave_left){
      etapa = 0;
      posX = width - 60;
      llave_left = false;
    }
    if (llave_right) {
      etapa = 2;
      posX = 60;
      llave_right = false;
    }
    fill(color_NPC);
    triangle(1000, 200, 1050, 100, 1100, 200);
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, width, 10);
    rect(0, height-10, width, height);
    rectMode(CENTER);
    break;
    case 2:
    cielo = true;
    tierra = true;
    if (llave_up) {
      etapa = 3;
      posY = width - 60;
      llave_up = false;
    }
    if (llave_down) {
      etapa = 9;
      posX = 60;
      llave_down = false;
    }
    if (llave_left) {
      etapa = 1;
      posX = width - 60;
      llave_left = false;
    }
    if (llave_right) {
      etapa = 9;
      posX = 60;
      llave_right = false;
    }
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, (width/2)-150, 10);
    rect((width/2)+150, 0, width, 10);
    rect(0, height-10, (width/2)-150, height);
    rect((width/2)+150, height-10, width, height);
    rectMode(CENTER);
    break;
    case 3:
    cielo = true;
    tierra = false;
    if (llave_up) {
      etapa = 4;
      posY = height - 60;
      llave_up = false;
    }
    if (llave_down) {
      etapa = 2;
      posX = 60;
      llave_down = false;
    }
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, (width/2)-150, 10);
    rect((width/2)+150, 0, width, 10);
    rect(0, 0, 10, height);
    rect(width-10, 0, width, height);
    rect(0, height-10, (width/2)-150, height);
    rect((width/2)+150, height-10, width, height);
    rectMode(CENTER);
    break;
    case 4:
    cielo = true;
    tierra = false;
    if (llave_down) {
      etapa = 3;
      posX = 60;
      llave_down = false;
    }
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, width, 10);
    rect(0, 0, 10, height);
    rect(width-10, 0, width, height);
    rectMode(CENTER);
    fill(color_NPC);
    triangle(900, 200, 950, 100, 1000, 200);
    break;
    case 5:
    cielo = false;
    tierra = true;
    if (llave_right) {
      etapa = 6;
      posX = 60;
      llave_right = false;
    }
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, width, 10);
    rect(0, 0, 10, height);
    rect(0, height-10, width, height);
    rectMode(CENTER);
    fill(color_NPC);
    triangle(900, 200, 950, 100, 1000, 200);
    break;
    case 6:
    cielo = true;
    tierra = true;
    if (llave_up) {
      etapa = 2;
      posY = width - 60;
      llave_up = false;
    }
    if (llave_left) {
      etapa = 5;
      posX = width - 60;
      llave_left = false;
    }
    if (llave_right) {
      etapa = 7;
      posX = 60;
      llave_right = false;
    }
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, (width/2)-150, 10);
    rect((width/2)+150, 0, width, 10);
    rect(0, height-10, width, height);
    rectMode(CENTER);
    break;
    case 7:
    cielo = false;
    tierra = true;
    if (llave_left) {
      etapa = 6;
      posX = width - 60;
      llave_left = false;
    }
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, width, 10);
    rect(width-10, 0, width, height);
    rect(0, height-10, width, height);
    rectMode(CENTER);
    fill(color_cofre);
    rect(900, 600, 80, 80);
    break;
    case 8:
    cielo = true;
    tierra = false;
    if (llave_up) {
      etapa = 9;
      posY = width - 60;
      llave_up = false;
    }
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, (width/2)-150, 10);
    rect((width/2)+150, 0, width, 10);
    rect(0, height-10, width, height);
    rect(0, 0, 10, height);
    rect(width-10, 0, width, height);
    rectMode(CENTER);
    fill(color_cofre);
    rect(width/2, height/2, 80, 80);
    break;
    case 9:
    cielo = true;
    tierra = true;
    if (llave_up) {
      etapa = 10;
      posY = width - 60;
      llave_up = false;
    }
    if (llave_down) {
      etapa = 8;
      posX = 60;
      llave_down = false;
    }
    if (llave_left) {
      etapa = 2;
      posX = width - 60;
      llave_left = false;
    }
    fill(color_muro);
    rectMode(CORNER);
    rect(width-10, 0, width, height);
    rect(0, 0, (width/2)-150, 10);
    rect((width/2)+150, 0, width, 10);
    rect(0, height-10, (width/2)-150, height);
    rect((width/2)+150, height-10, width, height);
    rectMode(CENTER);
    break;
    case 10:
    cielo = true;
    tierra = false;
    if (llave_up) {
      etapa = 11;
      posY = width - 60;
      llave_up = false;
    }
    if (llave_down) {
      etapa = 9;
      posX = 60;
      llave_down = false;
    }
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, (width/2)-150, 10);
    rect((width/2)+150, 0, width, 10);
    rect(0, 0, 10, height);
    rect(width-10, 0, width, height);
    rect(0, height-10, (width/2)-150, height);
    rect((width/2)+150, height-10, width, height);
    rectMode(CENTER);
    break;
    case 11:
    //enemigo
    cielo = true;
    tierra = false;
    if (llave_down) {
      etapa = 10;
      posX = 60;
      llave_down = false;
    }
    color_fondo = color(99, 11, 11, 100);
    fill(color_muro);
    rectMode(CORNER);
    rect(0, 0, width, 10);
    rect(0, 0, 10, height);
    rect(width-10, 0, width, height);
    rectMode(CENTER);
    fill(color_enemigo);
    ellipse(width/2, 300, 100, 100);
    if(posX > (width/2) - 70 && posX < (width/2) + 70 && posY > 230 && posY < 370){
      pelea();
    }
    break;
  }
  movimiento();
}

function pelea() {
  run = true;
  cambio.style.visibility = 'collapse';
  cambio.style.float = 'left';
  alert("Clikea el boton derecho del mause para volver a la pantalla 2d");
  document.getElementById('pantalla-3D').style.visibility = 'visible';
  anime();
  noLoop();
  etapa = 1;
}
function movimiento() {
  if (keyIsDown(LEFT_ARROW)) {
    if (tierra) {
      if (posX < 20) {
        llave_left = true;
      }else {
        posX -= 5;
      }
    }else{
      if (posX < 20) {
        posX = 20;
      } else {
        posX -= 5;
      }
    }
   }

   if (keyIsDown(RIGHT_ARROW)) {
     if (tierra) {
       if (posX > width-20) {
         llave_right = true;
       }else {
         posX += 5;
       }
     }else{
       if (posX > width-20) {
         posX = width-20;
       } else {
         posX += 5;
       }
     }
   }

   if (keyIsDown(UP_ARROW)) {
     if (cielo) {
       if (posY < 20) {
         llave_up = true;
       }else {
         posY -= 5;
       }
     } else {
       if (posY < 20) {
         posY = 20;
       }else {
         posY -= 5;
       }
     }
   }

   if (keyIsDown(DOWN_ARROW)) {
     if (cielo) {
       if (posY > height-20) {
         llave_down = true;
       }else {
         posY += 5;
       }
     } else {
       if (posY > height-20) {
         posY = height-20;
       }else {
         posY += 5;
       }
     }
   }
}
function start() {
  cambio = document.getElementById('pantalla-2d');
}
function mousePressed() {
  loop();
  document.getElementById('pantalla-2d').style.visibility = 'visible';
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
