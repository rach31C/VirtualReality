let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  for(let i=0; i<100; i++){
    let x = rnd(-30, 30);
    let y = rnd(8,20);
    let z = rnd(-30, 30);
    let r = rnd(0,360);
    createCloud(x, y, z, r);
  }

  createHouse(0, -5)

  
    //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x, y, z, r){
  let cloud = document.createElement("a-entity");
  
  let part_cloud = document.createElement("a-sphere");
  part_cloud.setAttribute("color","white");
  part_cloud.setAttribute("position","-0.5 0 0");
  part_cloud.setAttribute("scale", "0.75 0.5 0.75");
  cloud.append( part_cloud );

  let part_cloud2 = document.createElement("a-sphere");
  part_cloud2.setAttribute("color","white");
  part_cloud2.setAttribute("position","0 0.25 0");
  part_cloud2.setAttribute("scale", "0.75, 0.75, 0.75");
  cloud.append( part_cloud2 );

  let part_cloud3 = document.createElement("a-sphere");
  part_cloud3.setAttribute("color","white");
  part_cloud3.setAttribute("position","0.5 0 0");
  part_cloud3.setAttribute("scale", "1 0.5 0.5");
  cloud.append( part_cloud3 );

  let part_cloud4 = document.createElement("a-sphere");
  part_cloud4.setAttribute("color","white");
  part_cloud4.setAttribute("position","0.5 -0.25 0.5");
  part_cloud4.setAttribute("scale", "0.5 0.5 0.5");
  cloud.append( part_cloud4 );

  cloud.setAttribute("position",{x:x, y:y, z:z});
  cloud.setAttribute("rotation",{x:0, y:r, z:0});
  cloud.setAttribute("scale",{x:1.5, y:1, z:1});
  scene.append( cloud );
}

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/

function createHouse(x, z){
  let house = document.createElement("a-entity");
  
  let Fwall = document.createElement("a-entity");
  let Rwall = document.createElement("a-entity");
  let Lwall = document.createElement("a-entity");
  let Bwall = document.createElement("a-entity");
  let porch = document.createElement("a-entity");
  let roof = document.createElement("a-entity");

  let block1 = document.createElement("a-box");
  block1.setAttribute("width", "2");
  block1.setAttribute("height", "3");
  block1.setAttribute("depth", "0.1");
  block1.setAttribute("position", "-2 1.5 0");
  Fwall.append( block1 );

  let block2 = document.createElement("a-box");
  block2.setAttribute("width", "2");
  block2.setAttribute("height", "3");
  block2.setAttribute("depth", "0.1");
  block2.setAttribute("position", "2 1.5 0");
  Fwall.append( block2 );

  let block3 = document.createElement("a-box");
  block3.setAttribute("width", "2");
  block3.setAttribute("height", "1");
  block3.setAttribute("depth", "0.1");
  block3.setAttribute("position", "0 2.5 0");
  Fwall.append( block3 );

  let block4 = document.createElement("a-box");
  block4.setAttribute("width", "1");
  block4.setAttribute("height", "2");
  block4.setAttribute("depth", "0.1");
  block4.setAttribute("position", "-0.5 1 0");
  block4.setAttribute("color", "brown");
  Fwall.append( block4 ); // door
  
  let block5 = document.createElement("a-box");
  block5.setAttribute("width", "1");
  block5.setAttribute("height", "2");
  block5.setAttribute("depth", "0.1");
  block5.setAttribute("position", "0.5 1 0");
  block5.setAttribute("color", "brown");
  Fwall.append( block5 ); //door

  Fwall.setAttribute("position","0 0 0");

  let block6 = document.createElement("a-box");
  block6.setAttribute("width", "2");
  block6.setAttribute("height", "3");
  block6.setAttribute("depth", "0.1");
  block6.setAttribute("position", "-2 1.5 0");
  Rwall.append( block6 );

  let block7 = document.createElement("a-box");
  block7.setAttribute("width", "2");
  block7.setAttribute("height", "3");
  block7.setAttribute("depth", "0.1");
  block7.setAttribute("position", "2 1.5 0");
  Rwall.append( block7 );

  let block8 = document.createElement("a-box");
  block8.setAttribute("width", "2");
  block8.setAttribute("height", "1");
  block8.setAttribute("depth", "0.1");
  block8.setAttribute("position", "0 0.5 0");
  Rwall.append( block8 );

  let block9 = document.createElement("a-box");
  block9.setAttribute("width", "2");
  block9.setAttribute("height", "1");
  block9.setAttribute("depth", "0.1");
  block9.setAttribute("position", "0 2.5 0");
  Rwall.append( block9 );

  let block10 = document.createElement("a-box");
  block10.setAttribute("width", "2");
  block10.setAttribute("height", "1");
  block10.setAttribute("depth", "0.1");
  block10.setAttribute("position", "0 1.5 0");
  block10.setAttribute("color", "#85b1ff");
  block10.setAttribute("opacity", "0.2");
  Rwall.append( block10 ); //window

  Rwall.setAttribute("position","3 0 -3");
  Rwall.setAttribute("rotation","0 90 0");

  let block11 = document.createElement("a-box");
  block11.setAttribute("width", "2");
  block11.setAttribute("height", "3");
  block11.setAttribute("depth", "0.1");
  block11.setAttribute("position", "-2 1.5 0");
  Lwall.append( block11 );

  let block12 = document.createElement("a-box");
  block12.setAttribute("width", "2");
  block12.setAttribute("height", "3");
  block12.setAttribute("depth", "0.1");
  block12.setAttribute("position", "2 1.5 0");
  Lwall.append( block12 );

  let block13 = document.createElement("a-box");
  block13.setAttribute("width", "2");
  block13.setAttribute("height", "1");
  block13.setAttribute("depth", "0.1");
  block13.setAttribute("position", "0 0.5 0");
  Lwall.append( block13 );

  let block14 = document.createElement("a-box");
  block14.setAttribute("width", "2");
  block14.setAttribute("height", "1");
  block14.setAttribute("depth", "0.1");
  block14.setAttribute("position", "0 2.5 0");
  Lwall.append( block14 );

  let block15 = document.createElement("a-box");
  block15.setAttribute("width", "2");
  block15.setAttribute("height", "1");
  block15.setAttribute("depth", "0.1");
  block15.setAttribute("position", "0 1.5 0");
  block15.setAttribute("color", "#85b1ff");
  block15.setAttribute("opacity", "0.2");
  Lwall.append( block15 ); //window

  Lwall.setAttribute("position","-3 0 -3");
  Lwall.setAttribute("rotation","0 90 0");

  let block16 = document.createElement("a-box");
  block16.setAttribute("width", "2");
  block16.setAttribute("height", "3");
  block16.setAttribute("depth", "0.1");
  block16.setAttribute("position", "-2 1.5 0");
  Bwall.append( block16 );

  let block17 = document.createElement("a-box");
  block17.setAttribute("width", "2");
  block17.setAttribute("height", "3");
  block17.setAttribute("depth", "0.1");
  block17.setAttribute("position", "2 1.5 0");
  Bwall.append( block17 );

  let block18 = document.createElement("a-box");
  block18.setAttribute("width", "2");
  block18.setAttribute("height", "1");
  block18.setAttribute("depth", "0.1");
  block18.setAttribute("position", "0 0.5 0");
  Bwall.append( block18 );

  let block19 = document.createElement("a-box");
  block19.setAttribute("width", "2");
  block19.setAttribute("height", "1");
  block19.setAttribute("depth", "0.1");
  block19.setAttribute("position", "0 2.5 0");
  Bwall.append( block19 );

  let block20 = document.createElement("a-box");
  block20.setAttribute("width", "2");
  block20.setAttribute("height", "1");
  block20.setAttribute("depth", "0.1");
  block20.setAttribute("position", "0 1.5 0");
  block20.setAttribute("color", "#85b1ff");
  block20.setAttribute("opacity", "0.2");
  Bwall.append( block20 ); //window

  Bwall.setAttribute("position","0 0 -6");

  let floor = document.createElement("a-box");
  floor.setAttribute("width", "6");
  floor.setAttribute("height", "0.1");
  floor.setAttribute("depth", "6");
  floor.setAttribute("position","0 0 -3");

  let roof1 = document.createElement("a-box");
  roof1.setAttribute("width", "6");
  roof1.setAttribute("height", "0.1");
  roof1.setAttribute("depth", "3.75");
  roof.append(roof1);

  

  house.append(Fwall);
  house.append(Rwall);
  house.append(Lwall);
  house.append(Bwall);
  house.append(floor);
  house.append(roof);
  house.append(porch);

  house.setAttribute("position",{x:x, y:0, z:z});
  scene.append( house );
}



function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 1.75 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let pines2 = document.createElement("a-cone");
  pines2.setAttribute("color","green");
  pines2.setAttribute("position","0 2.5 0");
  pines2.setAttribute("height","2");
  pines2.setAttribute("radius-bottom","0.85");
  tree.append( pines2 );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("height","2");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



