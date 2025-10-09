window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML

  let scene = document.querySelector("a-scene");

  //Challenge 2: Create a variable for <a-dodecahedron> and create it.

  let dodecahedron = document.createElement("a-dodecahedron");


  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color

  dodecahedron.setAttribute("position", {x: 0, y: 2, z: -3});
  dodecahedron.setAttribute("radius", 2);
  dodecahedron.setAttribute("color", "red");

  //Challenge 4: Add the <a-dodecahedron> to the scene

  scene.append(dodecahedron);

  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */
  
  for (let i = 0; i < 5; i++) {

    let randomColor= Math.floor(Math.random() * (255 - 1 + 1) ) + 1;
    let randomColor2= Math.floor(Math.random() * (255 - 1 + 1) ) + 1;
    let randomColor3= Math.floor(Math.random() * (255 - 1 + 1) ) + 1;

    let randomPosition = Math.floor(Math.random() * (5 - -5 + 1) ) + -5;
    let randomPositionY = Math.floor(Math.random() * (5 - 0 + 1) ) + 0;

    let dodecahedron2 = document.createElement("a-dodecahedron");
    dodecahedron2.setAttribute("position", {x:  randomPosition, y: randomPositionY, z: randomPosition});
    dodecahedron2.setAttribute("color", `rgb( ${ randomColor }, ${randomColor2}, ${randomColor3} )` );
    scene.append(dodecahedron2);

  }

  
})