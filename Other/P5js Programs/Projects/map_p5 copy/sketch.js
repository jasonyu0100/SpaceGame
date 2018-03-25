function setup() {
	createCanvas(500,500);
	background(255,0,255);
}

function draw() {
	generate_circle();
}

function change_background(){
	var shade_y = map(mouseY,0,width,0,255);
	var shade_x = map(mouseX,0,height,0,255);
	background(shade_x,0,shade_y);
}

function generate_circle(){
	var x = random(0,width);
	var y = random(0,height);
	var r = random(0,255);
	var g = random(0,255);
	var b = random(0,255);
	noStroke();
	fill(r,g,b,100);
	ellipse(x,y,20,20);
}