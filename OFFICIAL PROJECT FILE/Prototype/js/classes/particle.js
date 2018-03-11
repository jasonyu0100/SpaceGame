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

    display() {

    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    getDistance(vector) {
        // Returns the absolute distance between current pos and given pos
        return Math.sqrt((vector.x - this.pos.x)**2 + (vector.y - this.pos.y)**2)
    }
}