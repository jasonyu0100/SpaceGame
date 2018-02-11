var length;
var branch;
var branches = [];
var recursion_depth;

function setup() {
	createCanvas(500,500);
	background(0);
	length = 100;
	recursion_depth = 10;
	parent_branch = new Branch(width/2,height,length,Math.PI/2);
	branches.push(parent_branch);
	var current_parents = [parent_branch];
	for(a=0;a<recursion_depth;a++){
		new_parents = [];
		for(b=0;b<current_parents.length;b++){
			current = current_parents[b];
			children = current.generate_children();
			new_parents = new_parents.concat(children);
		}
		branches = branches.concat(new_parents);
		current_parents = new_parents;
	}

}

function draw() {
	stroke(255);
	for(i=0;i<branches.length;i++){
		branches[i].display();
	}
}

function rotatedLinePoint(degree,x,y) {
	var y_dif = Math.sin(degree);
	var x_dif = Math.cos(degree);
	return [x_dif,y_dif];
}

function Branch(x,y,length,degree) {
	this.x = x
	this.y = y
	this.length = length;
	this.degree = degree;
	var rotated_points = rotatedLinePoint(this.degree,this.x,this.y);
	this.rx = this.x+rotated_points[0]*this.length;
	this.ry = this.y-rotated_points[1]*this.length;

	this.display = function() {
		var thing = line(this.x,this.y,this.rx,this.ry);
	}

	this.generate_children = function() {
		var children = []
		branch1 = new Branch(this.rx,this.ry,this.length*0.75,degree+(Math.PI/6));
		branch2 = new Branch(this.rx,this.ry,this.length*0.75,degree-(Math.PI/6));
		children.push(branch1);
		children.push(branch2);
		return children;
	}
}

 