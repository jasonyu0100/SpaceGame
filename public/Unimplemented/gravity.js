class GravityPoint extends Particle {

    constructor(position,reach,mass) {
        super(pos);
        this.reach = reach; //Range of particle gravity
        this.mass = mass;
    }

    getGravityMagnitude(particle) {
    	// Gets gravity magnitude which is the mass inverse 
        // squared by distance
        let distance =  Math.sqrt(particle.x**2 + particle.y**2)
    	let magnitude = this.mass / (distance ** 2);
    	if (magnitude >= this.maxMag) {
    		magnitude = this.maxMag
    	}
    	return magnitude
    }

    applyGravityForce(child,distance) {
    	// Child within range
    	// Finds the gravity force 
    	// Applies gravity force to acceleration in child
    	let gravityMag = this.getGravityMagnitude(distance)
        let direction = this.pos.copy().sub(child).getAngle();
        // Get a new force based on direction
        let force = new Vector(math.cos(direction),math.sin(direction))
        force.setMag(gravityMag);
        child.applyForce(force);
    }

    applyGravityForceToChildren(objects) {
    	for(object of objects) {
    		//Applies gravity to object in range
    		let distance = this.getDistance(object.pos);
    		if (distance <= range) this.applyGravityForce(object,distance);
    		}
    	}
    }
}
