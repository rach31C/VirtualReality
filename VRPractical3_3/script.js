let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 3, enemy_killed = 0;
let chickens = [];
let UFO;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");

  UFO = new UFO(3, 4, 5);
  for(let i=0; i<25; i++){
    let x = rnd(-15,15);
    let y = rnd(1,8);
    let z = rnd(-15,3);
    let dx = Math.random() * 0.4 - 0.2;
    let c = new Chicken( x , y , z, dx);
    chickens.push(c);
  }

  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
    }
  })
  
  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function loop(){
  if(bullet){
    bullet.fire();
  }

  for(let c of chickens){
    c.spin();
  }
 
  window.requestAnimationFrame(loop);
}

function countdown(){

  setTimeout(countdown,1000);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}