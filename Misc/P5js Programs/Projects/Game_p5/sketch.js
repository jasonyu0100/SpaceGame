var arrow;
var x = 250;
var y = 250;

function setup() {
	createCanvas(600,600);
	arrow = new Arrow(x,y);
}

function draw() {
	background(0);
	arrow.update();
}