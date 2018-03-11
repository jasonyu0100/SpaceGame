class Shooter {
	constructor(x) {
		this.pos = createVector(x,height);
		this.bullets = [];
		this.ammo = 16;
		this.reloading = false;
		this.reloadTimer = 0;
	}

	display() {
		rectMode(CENTER);
		noStroke();
		fill(color(255,0,0));
		rect(this.pos.x,this.pos.y,40,40);
		stroke(100);
		strokeWeight(5);
		line(this.pos.x,this.pos.y,mouseX,mouseY);
	}

	update() {
		this.display();
		if (this.reloading) {
			this.reloadTimer --;
		}
		for (var i = this.bullets.length-1; i >= 0; i --) {
			this.bullets[i].update();
		}
	}

	shoot() {
		if (this.ammo > 0) {
			this.ammo -= 1;
			var dir = createVector(mouseX,mouseY).sub(this.pos);
			dir.div(10);
			var bullet = new Bullet(this.pos.x,this.pos.y,dir);
			this.bullets.push(bullet);
		} else {
			this.reload();
		}
	}

	reload() {
		if (!this.reloading) {
			this.reloadTimer = 120;
		}
		this.reloading = true;
		if (this.reloadTimer <= 0) {
			this.reloading = false;
			this.ammo = 16;
		}
	}

	applyForce(vector) {
		for (var i = 0; i < this.bullets.length; i ++) {
			this.bullets[i].applyForce(vector);
		}
	}
}