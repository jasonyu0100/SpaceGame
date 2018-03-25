function Shooter(x) {
	this.pos = createVector(x,height);
	this.particles = [];
	this.update = function() {
		this.display();
		for(var i = 0; i < this.particles.length; i ++) {
			this.particles[i].update();
		}
	}

	this.display = function() {
		fill(255);
		noStroke();
		rectMode(CENTER)
		rect(this.pos.x,this.pos.y,40,40);
		stroke(255);
		line(this.pos.x,this.pos.y,mouseX,mouseY)
	}

	this.shoot = function() {
		var mouse = createVector(mouseX,mouseY);
		mouse.sub(this.pos).div(20);
		var particle = new Particle(this.pos.x,this.pos.y,mouse);
		this.particles.push(particle);
	}
}