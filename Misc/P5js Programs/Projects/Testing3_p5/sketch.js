var x = 1;
var y = 1;
var x_speed = 3;
var y_speed = 2;
var canvas
function setup() {
	createCanvas(400,400);
	frameRate(60);
}

function draw() {
	/*
	var r = round(random(0,255));
	var g = round(random(0,255));
	var b = round(random(0,255));
	background(r,g,b);
	*/
	background(200,0,0);
	moving_circle();
}

function moving_circle() {
	fill(255);
	ellipse(x,y,10,10);
	if (x > 400 || x < 0){
		x_speed *= -1;
	}
	if (y > 400 || y < 0){
		y_speed *= -1;
	}
	x += x_speed;
	y += y_speed;
}