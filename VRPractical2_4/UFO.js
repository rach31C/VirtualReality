class UFO{
  constructor(x,y,z,dy){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = dy;
    this.r = 0; 
    this.dr = 1;

    this.obj = document.createElement("a-entity");

    let ufoBOT = document.createElement("a-sphere");
    ufoBOT.setAttribute("color", "#1d2023");
    ufoBOT.setAttribute("side", "double")
    ufoBOT.setAttribute("scale", "4 0.5 3.5");
    this.obj.append(ufoBOT);

    let ufoBOT2 = document.createElement("a-sphere");
    ufoBOT2.setAttribute("color", "red");
    ufoBOT2.setAttribute("side", "double")
    ufoBOT2.setAttribute("scale", "3. 0.5 2.5");
    ufoBOT2.setAttribute("position", "0 -0.1 0");
    ufoBOT2.setAttribute("color", "#007f11");
    this.obj.append(ufoBOT2);

    let ufoMID = document.createElement("a-sphere")
    ufoMID.setAttribute("color", "#2b3233");
    ufoMID.setAttribute("side", "double")
    ufoMID.setAttribute("scale", "3 0.75 2.5");
    ufoMID.setAttribute("position", "0 0.25 0")
    this.obj.append(ufoMID)

    let ufoTOP = document.createElement("a-sphere")
    ufoTOP.setAttribute("color", "#259446");
    ufoTOP.setAttribute("opacity","0.5");
    ufoTOP.setAttribute("radius","2");
    ufoTOP.setAttribute("position","0 0.7 0");
    ufoTOP.setAttribute("theta-length", "90")
    this.obj.append(ufoTOP)

    let ufoLASER = document.createElement("a-cone")
    ufoLASER.setAttribute("color", "#0a7218")    
    ufoLASER.setAttribute("radius-bottom", "3")
    ufoLASER.setAttribute("height", "8")
    ufoLASER.setAttribute("position", "0 -1.5 0")
    ufoLASER.setAttribute("opacity", "0.5")
    this.obj.append(ufoLASER)


    //CHICKEN INVASAION

     let chicken = document.createElement('a-entity');
    
    let Cbody = document.createElement('a-box');
    Cbody.setAttribute('position', '0 1 0');
    Cbody.setAttribute("color", "#15cf55")
    chicken.append(Cbody);

    
    let legs = document.createElement('a-entity');
    legs.setAttribute('position', '0 0.25 0');

    let legA = document.createElement('a-box');
    legA.setAttribute('position', '-0.25 0 0');
    legA.setAttribute('width', '0.25'); 
    legA.setAttribute('height', '0.7');
    legA.setAttribute('depth', '0.25'); 
    legA.setAttribute('color', 'orange');

    legs.append(legA);

    let toeA = document.createElement('a-box');
    toeA.setAttribute('position', '-0.25 -0.25 0.15');
    toeA.setAttribute('rotation', '90 0 0');
    toeA.setAttribute('width', '0.25'); 
    toeA.setAttribute('height', '0.35'); 
    toeA.setAttribute('depth', '0.25'); 
    toeA.setAttribute('color', 'orange');

    legs.append(toeA);

    let legB = document.createElement('a-box');
    legB.setAttribute('position', '0.25 0 0');
    legB.setAttribute('width', '0.25'); 
    legB.setAttribute('height', '0.7');
    legB.setAttribute('depth', '0.25'); 
    legB.setAttribute('color', 'orange');

    legs.append(legB); 

    let toeB = document.createElement('a-box');
    toeB.setAttribute('position', '0.25 -0.25 0.15');
    toeB.setAttribute('rotation', '90 0 0');
    toeB.setAttribute('width', '0.25'); 
    toeB.setAttribute('height', '0.35'); 
    toeB.setAttribute('depth', '0.25'); 
    toeB.setAttribute('color', 'orange');

    legs.append(toeB);

    chicken.append(legs);

    let wings = document.createElement('a-box');
    wings.setAttribute('position', '0 1.25 0');
    wings.setAttribute('width', '1.25'); 
    wings.setAttribute('height', '0.5'); 
    wings.setAttribute('depth', '0.65');
    wings.setAttribute("color", "#15cf55")
    chicken.append(wings);

    // helmet (sphere + cylinder)
    let helmet = document.createElement('a-entity');

    let helmetSphere = document.createElement('a-sphere');
    helmetSphere.setAttribute('position', '0 1.8 0.5'); 
    helmetSphere.setAttribute('radius', '0.65'); 
    helmetSphere.setAttribute('opacity', '0.45');
    helmet.append(helmetSphere); 

    let helmentRing = document.createElement('a-cylinder');
    helmentRing.setAttribute('position', '0 1.6 0.35'); 
    helmentRing.setAttribute('radius', '0.67'); 
    helmentRing.setAttribute('rotation', '45 0 0'); 
    helmentRing.setAttribute('height', '0.15'); 
    helmentRing.setAttribute('color', '#383838');
    helmet.append(helmentRing);

    chicken.append(helmet);

    // head + eyes
    let Chead = document.createElement('a-box');
    Chead.setAttribute('position', '0 1.75 0.5'); 
    Chead.setAttribute('width', '0.65'); 
    Chead.setAttribute('height', '0.65'); 
    Chead.setAttribute('depth', '0.65');
    Chead.setAttribute("color", "#15cf55")
    chicken.append(Chead);

    let eyes = document.createElement('a-entity');
    let pupilL = document.createElement('a-box');
    pupilL.setAttribute('position', '-0.27 1.8 0.8'); 
    pupilL.setAttribute('width', '0.15'); 
    pupilL.setAttribute('height', '0.15'); 
    pupilL.setAttribute('depth', '0.15'); 
    pupilL.setAttribute('color', 'black');
    eyes.append(pupilL); 

    let pupilR = pupilL.cloneNode(true);
    pupilR.setAttribute('position', '0.27 1.8 0.8');
    pupilR.setAttribute('width', '0.15'); 
    pupilR.setAttribute('height', '0.15'); 
    pupilR.setAttribute('depth', '0.15'); 
    pupilR.setAttribute('color', 'black');
    eyes.append(pupilR);

    chicken.append(eyes);

    let beak = document.createElement('a-box');
    beak.setAttribute('position', '0 1.6 0.8'); 
    beak.setAttribute('width', '0.35'); 
    beak.setAttribute('height', '0.15'); 
    beak.setAttribute('depth', '0.25'); 
    beak.setAttribute('color', 'orange');
    beak.setAttribute("color", "#cf1530")

    chicken.append(beak);

    let roost = document.createElement('a-box');
    roost.setAttribute('position', '0 2 0.5'); 
    roost.setAttribute('width', '0.25'); 
    roost.setAttribute('height', '0.45'); 
    roost.setAttribute('depth', '0.5'); 
    roost.setAttribute('color', 'black');
    chicken.append(roost);

    this.obj.append(chicken);

    chicken.setAttribute("scale","1 1 1");
    chicken.setAttribute("position", "0 0 0")

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append( this.obj );
  }

  invade(){
    this.y += this.dy;
    this.r += this.dr;
    this.obj.setAttribute("rotation", {x: 0, y: this.r, z: 0})
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});

    if (this.y <= 5){
      this.dy = 0; 
      this.y = 5; 
    }
  }
}