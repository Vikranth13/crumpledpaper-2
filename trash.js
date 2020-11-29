class trash {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
    display2(){
      var pos2 =this.body.position;
      push();
      translate(pos2.x, pos2.y);
      rectMode(CENTER);
      fill("yellow");
    //  rect(0, 0, this.width, this.height);
    image (this.image,0,-213/2,300,413)
      pop();
    }
  };