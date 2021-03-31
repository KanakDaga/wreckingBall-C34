class Ball{
    constructor(x,y,radius){
        var options = {
            density : 1,
            frictionAir : 0.005
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push ();
        translate (pos.x, pos.y);
        rotate (this.body.angle);
        var r = Math.round(random(0,255));
        var g = Math.round(random(0,255));
        var b = Math.round(random(0,255));
        fill (r,g,b);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop ();
      }
}