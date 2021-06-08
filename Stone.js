class Stone{
    constructor(x, y) {
        var options = {
          'density':4,
          'friction': 1.0,
          'restitution':0.5
        };
        this.body = Bodies.rectangle(x, y, 90, 90, options);
        this.width =  90;
        this.height = 90;
        World.add(world, this.body);
      };
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('white')
        fill('black')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();

      }
    }