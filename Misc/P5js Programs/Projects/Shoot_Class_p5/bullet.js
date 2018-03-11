class Bullet extends Particle {
	constructor(x,y,vel) {
		super(x,y,vel);
		this.collision = false;
	}

	update() {
		super.update();
		this.edges();
	}
	edges() {
		if(this.pos.x < 0 || this.pos.x > width) {
			this.vel.x *= -1;
		} else if (this.pos.y < 0) {
			this.vel.y *= -1;
		}
	}
}