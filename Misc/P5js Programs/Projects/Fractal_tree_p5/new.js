var length;
var branch;
var branches;
var initial_width = 10;
var stroke_width = initial_width;

function setup() {
	createCanvas(500,500);
	background(0);
	angle_slider = createSlider(0,2*Math.PI,Math.PI/2,0.001);
	recursion_slider = createSlider(0,10,3);
	length = 100;
}

function draw() {
	background(0);
	stroke(255);
	var angle = angle_slider.value();
	var recursion_depth = recursion_slider.value()
	branches = generate_branches(angle,recursion_depth);
	for(i=0;i<branches.length;i++){
		strokeWeight(branches[i].stroke_weight);
		stroke(branches[i].color);
		branches[i].display();
	}
}

function generate_branches(angle,recursion_depth) {
	var parent_branch = new Branch(width/2,height,length,Math.PI/2,-1);
	var branches = [parent_branch]
	var current_parents = [parent_branch]
	stroke_width = initial_width;
	for(var a=0;a<recursion_depth;a++){
		new_parents = [];
		for(var b=0;b<current_parents.length;b++){
			current = current_parents[b];
			children = current.generate_children(angle,a);
			for (var i = 0;i<children.length;i++) {
				new_parents.push(children[i]);
			}
		}
		branches = branches.concat(new_parents);
		current_parents = new_parents;
	}
	return branches
}

function rotatedLinePoint(degree,x,y) {
	var y_dif = Math.sin(degree);
	var x_dif = Math.cos(degree);
	return [x_dif,y_dif];
}

function Branch(x,y,length,degree,recursion_depth) {
	this.x = x
	this.y = y
	this.length = length;
	this.degree = degree;
	this.recursion_depth = recursion_depth;
	this.stroke_weight = initial_width - recursion_depth;
	this.color = color(255-this.recursion_depth*20,0,255,100);
	var rotated_points = rotatedLinePoint(this.degree,this.x,this.y);
	this.rx = this.x+rotated_points[0]*this.length;
	this.ry = this.y-rotated_points[1]*this.length;

	this.display = function() {
		if(this.recursion_depth > 3) {
			fill(color(0,0,255,50));
			ellipse(this.rx,this.ry,floor(random(3,6)),floor(random(3,6)));
		}
		line(this.x,this.y,this.rx,this.ry);
	}

	this.generate_children = function(angle,recursion_depth) {
		var children = []
		branch1 = new Branch(this.rx,this.ry,this.length*0.67,degree+(angle),recursion_depth);
		branch2 = new Branch(this.rx,this.ry,this.length*0.8,degree-(angle),recursion_depth);
		children.push(branch1);
		children.push(branch2);
		return children;
	}
}

 