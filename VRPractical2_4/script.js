let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rocket;
let ufo; 
let chickens = [];
let rockets = [];
let UFOs = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  rocket = new Rocket( 0, 2.25, -5, 0.3);
  

  for(let i=0; i<50; i++){
    let x = rnd(-15,15);
    let y = rnd(1,10);
    let z = rnd(-15,15);
    let dx = Math.random() * 0.2 - 0.1;
    let c = new Chicken( x , y , z, dx);
    chickens.push(c);
  }

  for(let i=0; i<100; i++){
    let x = rnd(-50,50);
    let y = -7;
    let z = rnd(-50,50);
    let dy = Math.random() * (0.5 - 0.05) + 0.05;
    let r = new Rocket( x , y , z, dy);
    rockets.push(r);
  }

   
  for(let i=0; i<15; i++){
    let x = rnd(-50,50);
    let y = Math.floor(Math.random() * 21) + 30;
    let z = rnd(-50,50)
    let dy = Math.random() * 0.2 - 0.3;
    let u = new UFO( x , y , z, dy);
    UFOs.push(u);
  }

  loop();
})

function loop(){
 
  for(let c of chickens){
    c.spin();
  }

  for(let r of rockets){
    r.launch();
  }

  for(let u of UFOs){
    u.invade();
  }
  
  rocket.launch();
  window.requestAnimationFrame( loop );s
}
