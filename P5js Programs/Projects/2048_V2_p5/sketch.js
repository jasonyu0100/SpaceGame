let h = 800;
let w = 400;
let rows = 15;
let cols = 8;
let grid;
let maxMovesPerCycle = 3;
let currentCycle = 0;

function setup() {
	frameRate(10);
	createCanvas(w,h);
	grid = new Grid(rows,cols);
}

function draw() {
	background(0);
	grid.update();
	grid.incrementTime();
	currentCycle = 0;
}

function keyPressed() {
	if (currentCycle > maxMovesPerCycle) {

	} else {
		let action = grid.move(keyCode);
		if (action == true) {
			currentCycle += 1;
		}
	}
}