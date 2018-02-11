var pong;
function setup() {
	createCanvas(500,500);
	pong = new Pong();
}

function draw() {
	background(0);
	pong.update();
}