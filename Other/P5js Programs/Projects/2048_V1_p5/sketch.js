let grid;
let currentBlock;
function setup() {
	frameRate(1);
	createCanvas(400,600);
	grid = new Grid(width,height,6,6);
}

function draw() {
	background(0);
	grid.display();
	grid.incrementTime();
}

function keyPressed() {
	return grid.move(KEYCODE);
}

