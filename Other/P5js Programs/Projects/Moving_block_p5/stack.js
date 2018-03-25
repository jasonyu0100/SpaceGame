function Stack(sx,sy) {
	this.current = new Block(sx,sy,l,w);
	this.previous = this.current;
	this.blocks = [this.current];
	this.moveDir = true;
	this.update = function() {
		this.current.update();
		for(var i = 0; i < this.blocks.length; i ++) {
			var current = this.blocks[i];
			current.display();
		}
	}

	this.addBlock = function() {
		this.current.velocity.mult(0);
		var data = this.calcOffSet();
		this.previous = this.current;
		this.current = new Block(this.current.top_origin.x,this.current.top_origin.y,this.current.l,this.current.w);
		console.log(this.current,this.previous);
		this.setCurrentMoveDir();
		this.blocks.push(this.current);
		this.scroll();
	}

	this.setCurrentMoveDir = function() {
		var speed = random(7,10);
		if(this.moveDir) {
			var degree = 30
		} else {
			var degree = 150;
		}
		this.current.setMoveDir(degree,speed);
		this.moveDir = !this.moveDir;
	}

	this.calcOffSet = function() {
		var previous = this.previous.top_origin;
		var current = this.current.origin;
		var x_dif = previous.x - current.x;
		var y_dif = previous.y - current.y;
	}

	this.scroll = function() {
		if(this.blocks.length > 10) {
			for(var i = 0; i < this.blocks.length; i ++) {
				var current = this.blocks[i];
				current.origin.y += scroll;
				current.updatePoints();
			}
		}
	}
}

