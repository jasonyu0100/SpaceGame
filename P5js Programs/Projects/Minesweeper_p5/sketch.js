let game;
let rows = 10;
let cols = 10;

function setup() {
	createCanvas(500,500);
	game = new Game(rows,cols);
}

function draw() {
	background(255);
	game.update();
}

function mousePressed() {
	game.click(mouseX,mouseY);
}