class Chicken{
    constructor(x, y, z, dx, ry){
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = 0;
        this.dr = 1;
        this.dx = dx;
   
        this.obj = document.createElement('a-entity');
        this.obj.classList.add('chicken');
        this.obj.setAttribute('rotation', '0 0 0');

       
        let body = document.createElement('a-box');
        body.setAttribute('position', '0 1 0');
        this.obj.append(body);

        
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

        this.obj.append(legs);


        let wings = document.createElement('a-box');
        wings.setAttribute('position', '0 1.25 0');
        wings.setAttribute('width', '2.25'); 
        wings.setAttribute('height', '0.15'); 
        wings.setAttribute('depth', '0.65');
        this.obj.append(wings);

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

        this.obj.append(helmet);

        // head + eyes
        let head = document.createElement('a-box');
        head.setAttribute('position', '0 1.75 0.5'); 
        head.setAttribute('width', '0.65'); 
        head.setAttribute('height', '0.65'); 
        head.setAttribute('depth', '0.65');
        this.obj.append(head);

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

        this.obj.append(eyes);


        let beak = document.createElement('a-box');
        beak.setAttribute('position', '0 1.6 0.8'); 
        beak.setAttribute('width', '0.35'); 
        beak.setAttribute('height', '0.15'); 
        beak.setAttribute('depth', '0.25'); 
        beak.setAttribute('color', 'orange');

        this.obj.append(beak);

        let roost = document.createElement('a-box');
        roost.setAttribute('position', '0 2 0.5'); 
        roost.setAttribute('width', '0.25'); 
        roost.setAttribute('height', '0.45'); 
        roost.setAttribute('depth', '0.5'); 
        roost.setAttribute('color', 'red');
        this.obj.append(roost);


        this.obj.setAttribute('scale', '0.75 0.75 0.75');
        this.obj.setAttribute('position', {x: this.x, y: this.y, z: this.z});


        scene.append(this.obj);
    }

    spin(){
        this.r += this.dr;
        this.obj.setAttribute("rotation", {x:this.r, y: this.r, z: this.r});
        this.x += this.dx;
        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});

    }
}
