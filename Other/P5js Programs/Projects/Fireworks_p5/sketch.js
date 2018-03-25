var fireworks;
var gravity;
var wind;
function setup() {
	createCanvas(400,400);
	fireworks = [];
	gravity = createVector(0,0.1);
	wind = createVector(0.01,0);
	colorMode(HSB);
}

function draw() {
	background(0);
	if(random() < 0.03) {
		fireworks.push(new Firework(random(width),height))
	}
	for (var i = fireworks.length-1; i >= 0; i --) {
		fireworks[i].update();
		if(fireworks[i].done) {
			fireworks.splice(i,1);
		}
	}
}

function Particle(x,y,vel) {
	this.pos = createVector(x,y);
	this.vel = vel ? vel : createVector(0,random(-7,-9));
	this.acc = createVector(0,0);
	this.color = color(round(random(0,255)),255,255)

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.update = function() {
		this.applyForce(gravity);
		if(mouseIsPressed) {
			this.applyForce(wind);
		}
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.display();
		this.acc.mult(0);
	}

	this.display = function(){
		stroke(this.color);
		point(this.pos.x,this.pos.y);
	}
}

function Firework(x,y) {
	this.firework = new Particle(x,y);
	this.explosion = [];
	this.update = function() {
		if(this.firework) {
			strokeWeight(3);
			this.firework.update();
			this.check_vertex();
		} else {
			this.explode();
		}
	}
	this.explode = function() {
		for(var i = this.explosion.length-1; i >= 0; i --) {
				strokeWeight(2);
				this.explosion[i].update();
				if(this.explosion[i].pos.y > height) {
					this.explosion.splice(i,1);
				}
			if(this.explosion.length === 0) this.done = true;
		}
	}
	this.check_vertex = function() {
		if(this.firework.vel.y >= 0) {
			this.explode();
			this.particle_count = random(10,100);
			for (var i = 0; i < this.particle_count; i ++) {
				var random_vector = p5.Vector.random2D().mult(random(0.5,1));
				this.explosion.push(new Particle(this.firework.pos.x,this.firework.pos.y,random_vector));
			}
			this.firework = false;
		}
	}
}