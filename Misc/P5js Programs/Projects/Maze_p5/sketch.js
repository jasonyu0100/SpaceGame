var scl = 50;
var rows;
var cols;
var cells = [];
var stack = [];
function setup() {
	createCanvas(1000,800);
	rows = floor(height/scl);
	cols = floor(width/scl);
	for(y=0;y<cols;y++){
		for(x=0;x<rows;x++){
			cell = new Cell(x,y);
			cells.push(cell);
		}
	}
	stack.push(cells[0]);
	current = stack.pop();
	current.visited = true;
}

function draw() {
	background(100);
	noFill();
	current.next_coord();
	for(i=0;i<cells.length;i++){
		cells[i].display();
	}
}

function Cell(x,y){
	this.x = x;
	this.y = y;
	this.visited = false;
	this.walls = {
		top:[0,0,1,0],
		right:[1,0,1,1],
		bottom:[0,1,1,1],
		left:[0,0,0,1]
	}
	this.search_values = {
		top:[0,-1],
		right:[1,0],
		bottom:[0,1],
		left:[-1,0]
	}
	this.display = function() {
		stroke(0);
		for(var key in this.walls){
			if(this.walls[key]){

				var changes = this.walls[key];
				line((this.x+changes[0])*scl,(this.y+changes[1])*scl,(this.x+changes[2])*scl,(this.y+changes[3])*scl);
			}
		}
		if(this === current) {
			fill(50,0,255,100);
			noStroke();
			rect(this.x*scl,this.y*scl,scl,scl);
		} else if(this.visited === true){
			fill(255,0,200,100);
			noStroke();
			rect(this.x*scl,this.y*scl,scl,scl);
		}
	}
	this.next_coord = function() {
		neighbours = this.find_neighbours();
		if (neighbours){
			stack.push(current);
			index = neighbours[floor(random(0,neighbours.length))];
			this.remove_walls(this,cells[index]);
			current = cells[index];
			current.visited = true;
		} else if (stack.length === 0){
			return false
		} else {
			current = stack.pop();
		}
	}
	this.grid_constraints = function(x,y){
		return x >= 0 && x < rows && y >= 0 && y < cols;
	}
	this.find_neighbours = function(){
		var neighbours = []
		for(var direction in this.search_values){
			search_vals = this.search_values[direction]
			var search_x = this.x+search_vals[0];
			var search_y = this.y+search_vals[1];
			if (this.grid_constraints(search_x,search_y)){
				index = this.get_coord(search_x,search_y);
				if (!cells[index].visited){
					neighbours.push(index);
				}
			}
		}
		if (neighbours.length === 0){
			return false
		}
		return neighbours;
	}
	this.get_coord = function(x,y){
		return y * cols + x;
	}
	this.remove_walls = function(current,next) {
		if(current.y < next.y) {
			current.walls.bottom = false;
			next.walls.top = false;
		} else if(current.y > next.y) {
			current.walls.top = false;
			next.walls.bottom = false;
		} else if(current.x < next.x) {
			current.walls.right = false;
			next.walls.left = false;
		} else if(current.x > next.x) {
			current.walls.left = false;
			next.walls.right = false;
		}

	}
}




