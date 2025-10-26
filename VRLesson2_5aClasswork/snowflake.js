class Snowflake{
  constructor(x,y,z){
    // Challenge 1: Create animation variables  x and dx for the Snowflake to fly.  Set them to appropriate values.
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.01;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  //Challenge 2: Create a function fly() which increases x by dx and updates the Snowflake object to that x position

  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position", {x: this.x, y: this.y, z:this.z});
  }
}