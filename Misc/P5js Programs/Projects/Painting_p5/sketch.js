var x = 0;
var y = 0;
function setup() {
	createCanvas(400,400);
	background(255,0,255);
	noStroke();
}

function draw() {
	//background(255,0,255);
}

function mousePressed() {
	fill(255);
	ellipse(mouseX,mouseY,20,20);
}

function moving_rect() {
	fill(255,0,0);
	rect(x,y,20,40);
	x += 5;
	y += 5;
}