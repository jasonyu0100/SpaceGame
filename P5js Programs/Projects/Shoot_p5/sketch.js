var shooter;
function setup() {
	createCanvas(500,500);
	shooter = new Shooter(width/2);
}

function draw() {
	background(0);
	shooter.update();
}

function mouseClicked() {
	shooter.shoot();
}