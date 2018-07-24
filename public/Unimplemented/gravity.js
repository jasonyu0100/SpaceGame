class GravityPoint extends Particle {

    constructor(position,reach,mass) {
        super(pos);
        this.reach = reach; //Range of particle gravity
        this.mass = mass;
    }

    getGravityMagnitude(particle) {
    	// Gets gravity magnitude which is the mass inverse 
        let squareDistance =  particle.x**2 + particle.y**2
    	let force = (this.mass * particle.mass) / (squareDistance);
    	return magnitude
    }
}
