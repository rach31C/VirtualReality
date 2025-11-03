let scene;
let mech;
let mechs = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
 

  for(i=0; i< 10; i++){
    let x = rnd(-50, 50);
    let y = 0; 
    let z = rnd(-50, 50);

    let  mech2 = new mech(x, y, z);

    mechs.push(mech2);
  }

  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
