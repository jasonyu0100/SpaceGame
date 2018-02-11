var thickness = 15;
var scroll = thickness;
var l = 120;
var w = 120;
var stack;

function setup() {
	createCanvas(400,600);
	var sx = width/2;
	var sy = height - height/5;
	stack = new Stack(sx,sy);
}

function draw() {
	background(color(50,0,100));
	stack.update();
}

function degreeToRadians(degree) {
	return degree*Math.PI/180;
}

function mousePressed() {
	stack.addBlock();
}