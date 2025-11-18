class ChickenMouth{
    constructor(x, y, z, dy){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = dy;
   
        this.obj = document.createElement('a-box');
        this.obj.setAttribute('width', '12');
        this.obj.setAttribute('height', '2');
        this.obj.setAttribute('depth', '10');
        this.obj.setAttribute('color', 'red');

        this.obj.setAttribute('position', {x: this.x, y: this.y, z: this.z});


        scene.append(this.obj);
    }

    down(){
        this.y += this.dy
        if(this.y > 3|| this.y < -1.25){
            this.dy = -this.dy;
        }
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    }

   
}