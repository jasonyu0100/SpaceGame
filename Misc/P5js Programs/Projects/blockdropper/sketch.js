let grid;

function setup() {
	createCanvas(500,500);
	grid = new Grid(5,5,width,height);
}

function draw() {
	background(100)
	grid.display();
}