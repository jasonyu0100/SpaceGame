var population;
var lifeSpan = 150;
var popCount = 500;
var radius = 20;
var gravity;


function setup() {
	createCanvas(600,600);
	var spawn = createVector(0,height);
	var target = createVector(width,0);
	//gravity = createVector(0,0.04);
	population = new Population(popCount,lifeSpan,spawn,target,radius);
}

function draw() {
	background(0);
	//population.applyForce(gravity);
	population.update();
}