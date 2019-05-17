function menu_1() {
  var script2d = document.createElement("script");
  var attsrc = document.createAttribute("src");
  var attcharset = document.createAttribute("charset");
  attsrc.value = "2d.js";
  attcharset.value = "utf-8";
  script2d.setAttributeNode(attsrc);
  script2d.setAttributeNode(attcharset);
  document.getElementById('juego').appendChild(script2d);
  var script3d = document.createElement("script");
  attsrc = document.createAttribute("src");
  attcharset = document.createAttribute("charset");
  attsrc.value = "3d.js";
  attcharset.value = "utf-8";
  script3d.setAttributeNode(attsrc);
  script3d.setAttributeNode(attcharset);
  document.getElementById('juego').appendChild(script3d);
}
function menu_2() {
alert(12);
}
function menu_3() {
alert("no hay opciones");
}
function menu_4() {
alert(14);
}
