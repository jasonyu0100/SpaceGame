function Particle(x,y,direction) {
	this.pos = createVector(x,y);
	if (direction) {
		this.vel = direction;
	} else {
		this.vel = createVector(0,0);
	}
	this.acc = createVector(0,0);

	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.display();
		this.acc.mult(0);
	}

	this.display = function() {
		fill(255);
		noStroke();
		ellipse(this.pos.x,this.pos.y,10,10);
	}
}