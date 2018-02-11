function Block(origin,length,breadth,thickness) {
	this.move_val = random(5,8);
	this.origin = origin;
	this.length = length;
	this.breadth = breadth;
	this.thickness = thickness;
	this.direction = true;

	this.set_vertices = function() {
		var origin_x = this.origin.x;
		var origin_y = this.origin.y;
		var r_length = (Math.cos(toDegree(30)) * this.breadth)
		var l_length = (Math.cos(toDegree(30)) * this.length)
		var rx = origin_x + r_length;
		var lx = origin_x - l_length;
		var h = this.breadth * Math.sin(toDegree(30));
		var y = origin_y - h;
		var tx = origin_x + r_length - l_length;
		var ty = origin_y - (2 * h);

		this.right_vertex = createVector(rx,y);
		this.left_vertex = createVector(lx,y);
		this.corner_vertex = createVector(tx,ty);
		this.origin = this.origin;

		this.top_right_vertex = createVector(rx,y-this.thickness);
		this.top_left_vertex = createVector(lx,y-this.thickness);
		this.top_corner_vertex = createVector(tx,ty-this.thickness);
		this.top_origin = createVector(origin_x,origin_y-this.thickness)

		this.perimeter = [this.top_corner_vertex,this.top_right_vertex,this.right_vertex,this.origin,this.left_vertex,this.top_left_vertex]

		this.inside = [this.top_right_vertex,this.top_origin,this.origin,this.top_origin,this.top_left_vertex]
	}
	this.set_vertices();

	this.display = function() {
		stroke(255);
		fill(color(100,0,255));
		beginShape();
		for(var i = 0; i < this.perimeter.length; i++) {
			var point = this.perimeter[i];
			vertex(point.x,point.y);
		}
		endShape(CLOSE);

		noFill();
		beginShape();
		for(var i = 0; i < this.inside.length; i++) {
			var point = this.inside[i];
			vertex(point.x,point.y);
		}
		endShape();

	}

	this.diagonal_move = function(dir) {
		var origin_x = this.origin.x;
		var origin_y = this.origin.y;
		var change_x = Math.sin(toDegree(60)) * this.move_val;
		var change_y = Math.cos(toDegree(60)) * this.move_val;
		if (dir) {
			change_x *= -1;
		}
		if (origin_x > width || origin_x < 0 || origin_y > height || origin_y < 0){
			this.direction = !this.direction;
		}
		if (!this.direction) {
			change_x *= -1;
			change_y *= -1;
		}
		this.origin = createVector(this.origin.x+change_x,this.origin.y+change_y);
		this.set_vertices();
	}
}