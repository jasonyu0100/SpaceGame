class Particle {
    constructor(pos) {
        this.pos = pos
        this.vel = new Vector(0,0)
        this.acc = new Vector(0,0)
    }

    applyForce(force) {
        this.acc.add(force)
    }

    collision() {

    }

    diplay() {

    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
}