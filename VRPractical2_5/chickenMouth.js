class ChickenMouth{
    constructor(x, y, z, dx, ry){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = dx;
   
        this.obj = document.createElement('a-box');
        this.obj.setAttribute('width', '12');
        this.obj.setAttribute('height', '2');
        this.obj.setAttribute('depth', '10');
        this.obj.setAttribute('color', 'red');

        this.obj.setAttribute('position', {x: this.x, y: this.y, z: this.z});


        scene.append(this.obj);
    }

    up(){

    }

    down(){
        
    }

   
}