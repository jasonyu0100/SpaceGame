var origin;
var starting_block;
var length;
var breadth;
var thickness;
var count = 2;
var stack;

function setup() {
	createCanvas(600,600);
	origin = createVector(width/2,height - 100);
	length = 150;
	breadth = 150;
	thickness = 20;
	starting_block = new Block(origin,length,breadth,thickness);
	stack = new Stack(starting_block);
}

function draw() {
	background(color(200,50,100));
	for(var i = 0; i < count; i++){
		stack.blocks[i].display();
		if(stack.current === stack.blocks[i]) {
			stack.blocks[i].diagonal_move(count%2);
		}
	}
}

function toDegree(val) {
	return val/180*Math.PI;
}

function getDistance(x1,y1,x2,y2) {
	return Math.sqrt(pow((x1-x2),2) +pow((y1-y2),2));
}

function mousePressed() {
	for(var i = count-1;i >= 0; i--) {
		if (stack.current === stack.blocks[i]) {
			stack.spawn();
		}
	}
	count += 1;
	if (count > 5) {
		stack.scroll();
	}
}





