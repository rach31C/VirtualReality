class mech{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy=0.1;

        this.obj = mechTemplate.cloneNode(true);
        this.obj.setAttribute("position", `${x} ${y} ${z}`);

        scene.appendChild(this.obj);
    }
    launch(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}