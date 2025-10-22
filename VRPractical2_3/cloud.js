class Cloud{
    constructor(x, y, z){
        this.obj = document.createElement("a-entity");

        let part_cloud = document.createElement("a-sphere");
        part_cloud.setAttribute("color","white");
        part_cloud.setAttribute("position","-0.5 0 0");
        part_cloud.setAttribute("scale", "0.75 0.5 0.75");
        this.obj.append( part_cloud );

        let part_cloud2 = document.createElement("a-sphere");
        part_cloud2.setAttribute("color","white");
        part_cloud2.setAttribute("position","0 0.25 0");
        part_cloud2.setAttribute("scale", "0.75, 0.75, 0.75");
        this.obj.append( part_cloud2 );

        let part_cloud3 = document.createElement("a-sphere");
        part_cloud3.setAttribute("color","white");
        part_cloud3.setAttribute("position","0.5 0 0");
        part_cloud3.setAttribute("scale", "1 0.5 0.5");
        this.obj.append( part_cloud3 );

        let part_cloud4 = document.createElement("a-sphere");
        part_cloud4.setAttribute("color","white");
        part_cloud4.setAttribute("position","0.5 -0.25 0.5");
        part_cloud4.setAttribute("scale", "0.5 0.5 0.5");
        this.obj.append( part_cloud4 );

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj );
    }
}