class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.r = Math.round(random(0,255));
      this.g = Math.round(random(0,255));
      this.b = Math.round(random(0,255));
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.r, this.g, this.b);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };