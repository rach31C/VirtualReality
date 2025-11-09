let scene;
let mechs = [];
let mechTemplate; 
let rnd = (l, u) => Math.random() * (u - l) + l;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mechTemplate = document.getElementById("mech-1");

  for(let i=0; i< 10; i++){
    let x = rnd(-50, 50);
    let y = 0; 
    let z = rnd(-50, 50);

    let m = new mech(x, y, z);

    mechs.push(m);
  }

  loop();
})
function loop(){
  for(let m of mechs){
    m.launch();
  }

  window.requestAnimationFrame( loop );
}
