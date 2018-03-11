class Target {
    constructor(targetX,targetY,radius) {
        this.pos = createVector(targetX,targetY);
        this.radius = radius;
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
    }

    display() {
        ellipse(this.pos.x,this.pos.y,this.radius * 2);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.edges();
        this.display();
        this.acc.mult(0);
    }

    edges() {
        if (this.pos.x >= width || this.pos.x <= 0) {
            this.vel.x *= -1;
        }
    }
}