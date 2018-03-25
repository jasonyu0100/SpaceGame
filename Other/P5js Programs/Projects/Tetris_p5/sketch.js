let game;
let rows = 6;
let cols = 6;

function setup() {
	createCanvas(600,600);
	game = new Game(rows,cols);
}

function draw() {
	background(100);
	game.update();
}