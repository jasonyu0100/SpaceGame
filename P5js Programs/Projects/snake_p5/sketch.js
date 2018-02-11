var s;
var scl = 20;

function setup() {
	createCanvas(500,500);
	s = new Snake();
	frameRate(15);
	pickLocation();
}

function pickLocation(){
	x = floor(random(0,width/scl))*scl;
	y = floor(random(0,height/scl))*scl;
	food = createVector(x,y);
}

function draw() {
	background(51);
	s.update();
	s.show();

	if (s.eat(food)){
		pickLocation();
	}

	fill(255,0,100);
	rect(food.x,food.y,scl,scl)
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		s.dir(0,-1);
	}
	if (keyCode === DOWN_ARROW){
		s.dir(0,1);
	}
	if (keyCode === RIGHT_ARROW){
		s.dir(1,0);
	}
	if (keyCode === LEFT_ARROW){
		s.dir(-1,0);
	}
}
