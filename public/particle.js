class Particle {
    constructor(position,reach,mass) {
        this.position = position
        this.velocity = new Vector(0,0)
        this.acceleration = new Vector(0,0)
        this.friction = 0
        this.mass = mass
        this.reach = reach
    }

    get speed() {
        return (this.velocity.x ** 2 +  this.velocity.y ** 2) ** 0.5
    }

    applyForce(vector) {
        this.acceleration.add(vector);
    }

    applyFriction() {
        let normal = this.velocity.copy().mult(-1)
        normal.setMag(this.friction)
        this.applyForce(normal)
    }

    getGravityMagnitude(particle) {
    	// Gets gravity magnitude which is the mass inverse 
        let squareDistance =  particle.x**2 + particle.y**2
    	let force = (this.mass * particle.mass) / (squareDistance);
    	return magnitude
    }
}