class Particle {
	constructor(x,y,vel) {
		this.pos = createVector(x,y)
		this.vel = (vel) ? vel : createVector(0,0);
		this.acc = createVector(0,0);
	}
	display(){
		fill(255);
		ellipse(this.pos.x,this.pos.y,20,20);
	}
	update(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		this.display();
	}

	applyForce(vector) {
		this.acc.add(vector);
	}

}