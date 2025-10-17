
window.addEventListener("DOMContentLoaded",function() {

  scene = document.querySelector("a-scene");
  car = document.querySelector("#car");
  
    car.x = 0;
    car.dx = -0.01;
    leftCar();

  pokemonball = document.querySelector("#pokemonball");

    pokemonball.x = 0;
    pokemonball.dx = 5;
    rotatePokemonball();

  rocket = document.querySelector("#rocket");

    rocket.y = 0;
    rocket.dy = 0.02;
    flyRocket();

  dude = document.querySelector("#dude");

    dude.g = 1; 
    dude.dg = 0.005; 
    growDude();

  sun = document.querySelector("#sun");
    sun.f = 0;
    sun.df = 0.005;
    fadeSun();


})

function leftCar(){
    car.x += car.dx;

    car.setAttribute("position", {x: car.x, y: 0, z: -8});
    window.requestAnimationFrame(leftCar);
}

function rotatePokemonball(){
    pokemonball.x += pokemonball.dx;
    
    pokemonball.setAttribute("rotation", {x: pokemonball.x, y: 0, z:0});
    window.requestAnimationFrame(rotatePokemonball);
}

function flyRocket(){
    rocket.y += rocket.dy;

    rocket.setAttribute("position", {x: 0, y: rocket.y, z: -4});
    window.requestAnimationFrame(flyRocket);
}

function growDude(){
    dude.g += dude.dg;

    dude.setAttribute("scale", {x: dude.g, y: dude.g, z: dude.g});
    window.requestAnimationFrame(growDude);

}

function fadeSun(){
    sun.f += sun.df;

    sun.setAttribute("opacity", sun.f);
    window.requestAnimationFrame(fadeSun);

}