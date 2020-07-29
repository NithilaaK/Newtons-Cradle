class Bob {
    constructor(x, y, r) {
        var options = {
            isStatic : false,
            restitution: 1,
            friction: 0, 
            density: 1
        }
        
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x, this.y, (this.r) / 2, options);
        
        World.add(world, this.body);
        }
        
        display() {
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            fill(252, 15, 192);
            ellipseMode(CENTER);
            ellipse(0, 0, this.r, this.r);
            pop();
        }
    };
