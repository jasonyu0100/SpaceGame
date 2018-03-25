var slider;
var n1 = 1;
var n2 = 1;
var n3 = 1;
var m = 1;
var a = 1;
var b = 1;

var osc = 0;
function setup() {
	frameRate(20);
	createCanvas(500,500);
	slider = createSlider(0, 10, 5, 1);
}


function supershape(theta) {
	var part1 = (1 / a) * cos(theta * m / 4);
	part1 = abs(part1);
	part1 = pow(part1,n2);

	var part2 = (1 / b) * sin(theta * m / 4);
	part2 = abs(part2);
	part2 = pow(part2,n3);

	var part3 = pow((part1+part2),1/n1);
	if(part3 === 0) {
		return 0;
	}
	return 1/part3;
}
function draw() {
	m = map(sin(osc), -1, 1, 0, 10);
  	osc += 0.02;
	background(0);
	stroke(255);
	translate(width/2,height/2);
	beginShape();

	var radius = 100;
	var total = 30;
	var increment = Math.PI*2 / total;

	for(var angle=0;angle<Math.PI*2;angle+=increment) {
		var r = supershape(angle);
		var x = radius * r * cos(angle);
		var y = radius * r * sin(angle);
		vertex(x,y);
	}
	endShape(CLOSE);
}


