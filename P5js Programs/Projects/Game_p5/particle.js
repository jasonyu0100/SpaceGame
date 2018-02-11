class Particle {
    constructor() {
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
    }

    display() {
        ellipse(this.pos.x,this.pos.x,20,20);
    }

    update() {
        this.display();
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
}