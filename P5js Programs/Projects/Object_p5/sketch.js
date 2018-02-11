var circle = {
	width:20,
	height:20,
	x:0,
	y:50,
	x_speed:3,
	y_speed:3
}

function setup() {
	createCanvas(400,400);
}

function draw() {
	background(255,0,0);

	display_circle();
}
function display_circle() {
	fill(255);
	ellipse(
		circle.x,
		circle.y,
		circle.width,
		circle.height
		);
	if (circle.x > 400 || circle.x < 0) {
		circle.x_speed *= -1;
	}
	if (circle.y > 400 || circle.y < 0) {
		circle.y_speed *= -1;
	}
	circle.x += circle.x_speed;
	circle.y += circle.y_speed;
}