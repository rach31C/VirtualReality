class House{
    constructor(x,z){
        this.obj = document.createElement("a-entity");

        let base = document.createElement("a-box");
        base.setAttribute("color", "#e6d8d1");
        base.setAttribute("height", "3");
        base.setAttribute("width", "3");
        base.setAttribute("depth", "3");
        base.setAttribute("side", "double");
        this.obj.append(base);

        let roof = document.createElement("a-cone");
        roof.setAttribute("color", "black");
        roof.setAttribute("segments-radial", "4");
        roof.setAttribute("height", "1.5");
        roof.setAttribute("radius-bottom", "2.5");
        roof.setAttribute("position", "0 2.25 0");
        roof.setAttribute("rotation", "0 45 0");
        this.obj.append(roof);

        this.obj.setAttribute("position",{x:x, y:1, z:z});
        scene.append( this.obj );
    }

}