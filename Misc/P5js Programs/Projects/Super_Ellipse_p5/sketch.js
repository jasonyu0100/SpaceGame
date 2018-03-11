var r;
var a;
var b;
var n;

function setup() {
	createCanvas(1000,1000);
	r = 100;
	// a = 100;
	// b = 100;
	// n = 2;
	a = createSlider(0,500,100,1);
	b = createSlider(0,500,100,1);
	n = createSlider(0,10,2,0.1);
}

function sgn(val){
	if(val < 0) {
		return -1;
	} else if (val > 0) {
		return 1;
	} else {
		return 0;
	}
}
function draw() {
	background(0);
	stroke(255);
	translate(width/2,height/2);
	beginShape();
	for(var angle=0;angle<Math.PI*2;angle+=0.1) {
		// var x = cos(i) * r;
		// var y = sin(i) * r;
		var x = pow(abs(cos(angle)),2/n.value())*a.value()*sgn(cos(angle));
		var y = pow(abs(sin(angle)),2/n.value())*b.value()*sgn(sin(angle));
		vertex(x,y);
	}
	endShape(CLOSE);
}


