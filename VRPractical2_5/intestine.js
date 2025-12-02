class intestine{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z; 

        this.obj = document.createElement("a-box");
        this.obj.setAttribute("height", "25");
        this.obj.setAttribute("width", "2.5");
        this.obj.setAttribute("depth", "2");
        this.obj.setAttribute("color", "#b750e1");
        this.obj.setAttribute("material","src", "url(insides.png)");
        this.obj.setAttribute("material","repeat", "2 7");

        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
        scene.append(this.obj);
    }
}