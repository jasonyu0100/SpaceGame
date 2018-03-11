let game;

function setup() {
	frameRate(8);
	createCanvas(600,600);
	game = new Game(16,16,width,height);
}

function draw() {
	background(50);
	game.update();
}

function keyPressed() {
	if (keyCode === 38) {
		game.rotate();
	} else if (keyCode === 37 || keyCode === 39) { // Left or Right
		game.move(keyCode)
	} else if (keyCode === 32) {
		game.drop();
	}
}