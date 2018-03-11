function setup() {
	createCanvas(400,400);
}

function draw() {
	change_background();
}

function change_background(){
	var ratio = 256/400;
	var shade = mouseX * ratio;
	background(shade);
}