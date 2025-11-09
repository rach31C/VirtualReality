let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;
let dudes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i=0; i<10; i++){
    let x = rnd(-20,20);
    let y = rnd(1,2);
    let z = rnd(-20,20);
    let d = new Dude(x,y,z);
    dudes.push(d);
  }
  
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for(let d of dudes){
    d.jump();
  }
  
  window.requestAnimationFrame( loop );
}