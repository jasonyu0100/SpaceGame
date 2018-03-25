class Invader {
	constructor(x,y,vel) {
		this.pos = createVector(x,y);
		this.vel = (vel) ? vel : createVector(0,0);
		this.acc = createVector(0,0);
		this.radius = 30;
		this.collision = false;
	}
	display(){
		fill(255);
		ellipse(this.pos.x,this.pos.y,this.radius,this.radius);
	}
	update(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.display();
		this.acc.mult(0);
	}
	checkCollision(vector){
		if(dist(vector.x,vector.y,this.pos.x,this.pos.y) <= this.radius) {
			return true;
		} else {
			return false;
		}
	}
}

class Invaders {
	constructor() {
		this.invaders = [];
		this.right = null;
		this.left = null;
		this.height = 30;
		this.vel = createVector(random(1,5),0.5);
		this.count = 5;
		this.seperation = 50;
		this.generateInvaders();
	}

	generateInvaders() {
		for (var i = 0; i < this.count; i ++) {
			var newInvader = new Invader(0 + i * this.seperation,this.height,this.vel);
			this.invaders.push(newInvader);
		}
		this.right = this.invaders[this.count-1];
		this.left = this.invaders[0];
	}

	display() {
		for (var i = 0; i < this.invaders.length; i ++) {
			var current = this.invaders[i];
			current.update();
		}
	}

	changeInvaderVelocity() {
		for (var i = 0; i < this.invaders.length; i ++) {
			var current = this.invaders[i];
			current.vel = this.vel;
		}
	}

	edges() {
		if (this.right.pos.x > width || this.left.pos.x < 0) {
			this.vel.x *= -1;
			this.changeInvaderVelocity();
		}
	}

	update() {
		this.display();
		this.edges();
	}

	updateValues() {
		this.right = this.invaders[this.invaders.length-1];
		this.left = this.invaders[0];
	}
}