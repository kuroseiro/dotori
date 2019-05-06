var ren = new THREE.WebGLRenderer();
var camara = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,0.1, 100);
var escena = new THREE.Scene();
var material = new THREE.MeshBasicMaterial({color:0x5ad912});
var geo = new THREE.BoxGeometry(1,1,1);
var cubo = new THREE.Mesh(geo, material);
ren.setSize(innerWidth, innerHeight);
document.getElementById('juego').appendChild(ren.domElement);
ren.domElement.id = 'pantalla-3d';
camara.position.set(0,0,5);
escena.add(cubo);
  var move;

function anime() {
  cubo.rotation.x += 0.01;
  cubo.rotation.y += 0.02;
  move = requestAnimationFrame(animate);
  ren.render(escena, camara);
}


var id;


//cancelAnimationFrame( id ); cancela donde halla eliminado al jefe para volver al 2d
