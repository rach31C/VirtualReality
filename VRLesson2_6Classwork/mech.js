class Mech{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj= mech.cloneNode(True);

        scene.append(this.obj);
    }
}