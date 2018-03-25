function Block(x,y,l,w) {
	this.origin = createVector(x,y);
	this.velocity = createVector(0,0);
	this.l = l;
	this.w = w;

	this.get_angle_vect = function(angle,mult) {
		var x = Math.cos(angle) * mult;
		var y = -Math.sin(angle) * mult;
		var angle_vect = createVector(x,y);
		return angle_vect;
	}

	this.updatePoints = function() {
		var angle_vect_30 = this.get_angle_vect(degreeToRadians(30),this.l);
		var angle_vect_150 = this.get_angle_vect(degreeToRadians(150),this.w);
		this.top_origin = this.origin.copy().add(0,-thickness);
		this.right = this.origin.copy().add(angle_vect_30);
		this.left = this.origin.copy().add(angle_vect_150);
		this.corner = this.left.copy().add(angle_vect_30);
		this.top_right = this.right.copy().add(0,-thickness);
		this.top_left = this.left.copy().add(0,-thickness);
		this.top_corner = this.corner.copy().add(0,-thickness);
		this.top_points = [this.top_right,this.top_left,this.top_origin,this.top_corner];
		this.bottom_points = [this.right,this.left,this.origin,this.corner];
		this.outside = [this.top_corner,this.top_right,this.right,this.origin,this.left,this.top_left];
		this.inside = [this.top_left,this.top_origin,this.origin,this.top_origin,this.top_right];
	}

	this.display = function() {
		stroke(255);
		fill(color(150,0,255));
		beginShape();
		for(var i = 0; i < this.outside.length; i ++) {
			point = this.outside[i];
			vertex(point.x,point.y);
		}
		endShape(CLOSE);
		noFill();
		beginShape();
		for(var i = 0; i < this.inside.length; i ++) {
			point = this.inside[i];
			vertex(point.x,point.y);
		}
		endShape();
	}

	this.setMoveDir = function(degree,speed) {
		this.velocity = this.get_angle_vect(degreeToRadians(degree),speed);
	}

	this.edges = function() {
		if(this.origin.x  > width || this.origin.x  < 0 || this.origin.y < 0 || this.origin.y > height) {
			this.velocity.mult(-1);
		}
	}

	this.update = function(){
		this.origin.add(this.velocity);
		this.edges();
		this.updatePoints();
		this.display();
	}
	this.updatePoints();
}