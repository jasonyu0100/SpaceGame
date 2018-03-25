var population;
var popCount = 30;
var popMut = 0.01;
var lifeSpan = 300;
var radius = 30;

function setup() {
	createCanvas(500,500);
	var spawnX = width/2;
	var spawnY = height/2;
	var targetX = width/2;
	var targetY = 0;
	algorithm = new Algorithm(
		popCount,popMut,
		lifeSpan,radius,
		spawnX,spawnY,
		targetX,targetY,
		);
}

function draw() {
	background(0);
	algorithm.update();
}