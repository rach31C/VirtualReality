class Rocket{
  constructor(x,y,z, dy){
    this.x = x;
    this.dx = 0.01;
    this.y = y;
    this.z = z;
    this.dy = dy;
    this.r = 0; 
    this.dr = -1;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("color","gray");
    body.setAttribute("height","5");
    body.setAttribute("radius","1.5");
    body.setAttribute("position","0 1 0");
    this.obj.append( body );

    let Rfin = document.createElement("a-cone");
    Rfin.setAttribute("color","red");
    Rfin.setAttribute("segments-radial","3");
    Rfin.setAttribute("scale","1 3 1");
    Rfin.setAttribute("position", "1.75 -1 0");
    Rfin.setAttribute("rotation","180 30 -35");
    this.obj.append( Rfin );

    let Lfin = document.createElement("a-cone");
    Lfin.setAttribute("color","red");
    Lfin.setAttribute("segments-radial","3");
    Lfin.setAttribute("scale","1 3 1");
    Lfin.setAttribute("position", "-1.75 -1 0");
    Lfin.setAttribute("rotation","180 -30 35");
    this.obj.append( Lfin );

    let Bfin = document.createElement("a-cone");
    Bfin.setAttribute("color","red");
    Bfin.setAttribute("segments-radial","3");
    Bfin.setAttribute("scale","1 2.5 1");
    Bfin.setAttribute("position", "0 -1 -1.55");
    Bfin.setAttribute("rotation","180 0 0");
    this.obj.append( Bfin );

    let Ffin = document.createElement("a-cone");
    Ffin.setAttribute("color","red");
    Ffin.setAttribute("segments-radial","3");
    Ffin.setAttribute("scale","1 2.5 1");
    Ffin.setAttribute("position", "0 -1 1.5");
    Ffin.setAttribute("rotation","180 180 0");
    this.obj.append( Ffin );

    let head = document.createElement("a-cone"); 
    head.setAttribute("color","red");
    head.setAttribute("radius-bottom","1.55");
    head.setAttribute("scale","1 3 1");
    head.setAttribute("position", "0 5 0");
    this.obj.append( head );

    let windowFrame = document.createElement("a-cylinder");
    windowFrame.setAttribute("color","black");
    windowFrame.setAttribute("height","0.5");
    windowFrame.setAttribute("radius","1.1");
    windowFrame.setAttribute("position","0 1.75 1.26");
    windowFrame.setAttribute("rotation","90 0 0");
    this.obj.append( windowFrame );

    let window = document.createElement("a-sphere");
    window.setAttribute("color","#bfeaff");
    window.setAttribute("opacity","0.5");
    window.setAttribute("radius","1");
    window.setAttribute("position","0 1.75 1.26");
    window.setAttribute("rotation","90 0 0");
    this.obj.append( window );

    let fire = document.createElement("a-cone");
    fire.setAttribute("src", "fire.png")
    fire.setAttribute("position", "0 -7 0")
    fire.setAttribute("height", "5")
    fire.setAttribute("radius-bottom", "1.55")
    fire.setAttribute("rotation", "180 0 0")
    this.obj.append(fire);

    let fire2 = document.createElement("a-sphere");
    fire2.setAttribute("src", "fire.png")
    fire2.setAttribute("position", "0 -4.5 0")
    fire2.setAttribute("radius", "1.5")
    fire2.setAttribute("height", "5")
    fire2.setAttribute("radius-bottom", "1.5")
    this.obj.append(fire2);

    // CHICKEN

    let chicken = document.createElement('a-entity');
    
    let Cbody = document.createElement('a-box');
    Cbody.setAttribute('position', '0 1 0');
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

    chicken.append(beak);

    let roost = document.createElement('a-box');
    roost.setAttribute('position', '0 2 0.5'); 
    roost.setAttribute('width', '0.25'); 
    roost.setAttribute('height', '0.45'); 
    roost.setAttribute('depth', '0.5'); 
    roost.setAttribute('color', 'red');
    chicken.append(roost);

    this.obj.append(chicken);

    chicken.setAttribute("scale","0.65 0.65 0.65");
    chicken.setAttribute("position", "0 0.8 1.22")
    chicken.setAttribute("rotation", "12 0 0")

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append( this.obj );
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}