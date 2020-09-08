class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'friction':1.8
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      strokeWeight(2);
      stroke("blue");
      fill("white");
      rect(pos.x,pos.y,this.width,this.height);
      //image(this.image,880,230,this.width,this.height);
    }
  };
  