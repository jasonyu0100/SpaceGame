var spaceinvader;
var gravity;
function setup() {
	createCanvas(500,500);
	spaceinvader = new SpaceInvaders(width/2);
	gravity = createVector(0,0.5);
}

function draw() {
	background(0);

	if(frameCount % 200 == 0) {
		spaceinvader.generateWaves();
	}
	spaceinvader.applyForce(gravity);
	spaceinvader.update();
	spaceinvader.collision();
}

function keyPressed(){
	if(keyCode == 32) {
		spaceinvader.shoot();
	}
}