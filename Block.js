class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage('block.png');
      this.visibility = 255;

      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      if(this.body.speed < 5) {
        push();
        tint(255, this.visibility);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility -= 2;
        tint(255, this.visibility);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
        pop();
      }
    }
}