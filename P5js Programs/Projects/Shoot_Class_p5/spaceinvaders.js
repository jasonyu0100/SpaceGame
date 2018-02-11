class SpaceInvaders {
	constructor(shooterPos) {
		this.shooter = new Shooter(width/2);
		this.allInvaders = [];
	}

	update() {
		this.shooter.update();
		for(var i = 0; i < this.allInvaders.length; i ++) {
			this.allInvaders[i].update();
		}
	}

	collision() {
		for(var i = 0; i < this.shooter.bullets.length; i ++) {
			var bullet = this.shooter.bullets[i];
			for(var j = 0; j < this.allInvaders.length;j++) {
				var currentWave = this.allInvaders[j];
				for (var k = 0; k < currentWave.invaders.length; k ++) {
					var invader = currentWave.invaders[k];
					this.checkCollision(invader,bullet);
				}
			}
		}
		this.deleteCollided();
	}

	generateWaves() {
		var tempWave = new Invaders();
		this.allInvaders.push(tempWave);
	}

	checkCollision(invader,bullet) {
		if (dist(invader.pos.x,invader.pos.y,bullet.pos.x,bullet.pos.y) <= invader.radius) {
			bullet.collision = true;
			invader.collision = true;
		}
	}

	deleteCollided() {
		for (var i = this.shooter.bullets.length-1; i >= 0; i --) {
			var bullet = this.shooter.bullets[i];
			if (bullet.collision) {
				this.shooter.bullets.splice(i,1);
			}
		}

		for (var i = this.allInvaders.length-1; i >= 0; i --) {
			var currentWave = this.allInvaders[i];
			for (var j = currentWave.invaders.length - 1; j >= 0; j --) {
				var invader = currentWave.invaders[j];
				if (invader.collision) {
					currentWave.invaders.splice(j,1);
				}
			}
			currentWave.updateValues();
			if (currentWave.invaders.length == 0) {
				this.allInvaders.splice(i,1);
			}
		}
	}

	shoot() {
		this.shooter.shoot();
	}

	applyForce(vector) {
		this.shooter.applyForce(vector);
	}
}