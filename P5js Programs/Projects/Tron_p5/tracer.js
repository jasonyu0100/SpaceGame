function Tracer(name,x,y,movement_keys,color,starting_dir) {
	//MISC
	this.name = name;
	this.color = color;
	this.history = [];
	this.status = true;
	//Physics
	this.pos = createVector(x,y);
	this.vel = createVector(0,0);
	//Direction
	this.current_dir = null;
	this.movement_keys = movement_keys;
	this.up = this.movement_keys[0];
	this.right = this.movement_keys[1];
	this.down = this.movement_keys[2];
	this.left = this.movement_keys[3];
	if (starting_dir == 1) this.vel.y += scl;
	if (starting_dir == 2) this.vel.x -= scl;
	if (starting_dir == 3) this.vel.x += scl;
	if (starting_dir == 4) this.vel.y -= scl;

	this.update = function() {
		if(this.status) {
			this.update_history();
			this.pos.add(this.vel);
			this.edges();
			this.display();
			this.check_history();
		} else {
			this.display();
		}
	}

	this.display = function() {
		fill(this.color);
		noStroke();
		for(var i = 0; i < this.history.length; i ++) {
			var coord = this.history[i];
			rect(coord.x,coord.y,scl,scl);
		}
		rect(this.pos.x,this.pos.y,scl,scl);
	}

	this.change_dir = function(code) {
		var old_vel = this.vel.copy();
		var old_code = this.current_dir;
		this.vel.mult(0);
		switch(code) {
			case this.up:
				if (this.compare_dir(code)) {
					this.vel.y -= scl;
					this.current_dir = code;
					break;
				}
			case this.right:
				if (this.compare_dir(code)) {
					this.vel.x += scl;
					this.current_dir = code;
					break;
				}
			case this.down:
				if (this.compare_dir(code)) {
					this.vel.y += scl;
					this.current_dir = code;
					break;
				}
			case this.left:
				if (this.compare_dir(code)) {
					this.vel.x -= scl;
					this.current_dir = code;
					break;
				}
			default:
				this.vel = old_vel;
				this.current_dir = old_code;
				break;
		}
	}

	this.compare_dir = function(code) {
		if (code == this.up) {
			if (this.current_dir == this.down) return false;
		} else if (code == this.down){
			if (this.current_dir == this.up) return false;
		} else if (code == this.right) {
			if (this.current_dir == this.left) return false;
		} else if (code == this.left) {
			if (this.current_dir == this.right) return false;
		}
		return true;
	}


	this.edges = function() {
		if(this.pos.y > height) this.pos.y = 0;
		if(this.pos.y < 0) this.pos.y = height;
		if(this.pos.x > width) this.pos.x = 0;
		if(this.pos.x < 0) this.pos.x = width;
	}

	this.update_history = function() {
		past_pos = this.pos.copy();
		this.history.push(past_pos);
		total_history.push(past_pos);
	}

	this.check_history = function() {
		for(var i = 0; i < total_history.length; i ++) {
			var next = total_history[i];
			if (next.x === this.pos.x && next.y === this.pos.y && mag(this.vel.x,this.vel.y) >= scl){
				this.vel.mult(0);
				this.status = false;
			}
		}
	}
}