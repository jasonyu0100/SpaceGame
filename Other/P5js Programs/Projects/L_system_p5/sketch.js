var axiom = "F";
var rules = [];
var sentence = axiom;
var len = 100;
rules[0] = {
	a:"F",
	b:"FF+[+F-F-F]-[-F+F+F]"
}

function setup() {
	createCanvas(1000,1000);
	background(51);
	stroke(255);
	turtle();
	createP(sentence);
	button = createButton("generate");
	button.mousePressed(generate);
}
/*
function draw() {
	noCanvas();
	background(150);
}
*/
function turtle() {
	background(51);
	resetMatrix();
	translate(width/2,height);
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line(0,0,0,-len);
			translate(0,-len);
		} else if (current == "+") {
			rotate(random(Math.PI/8,Math.PI/6));
		} else if (current == "-") {
			rotate(random(-Math.PI/8,-Math.PI/6));
		} else if (current == "[") {
			push();
		} else if (current = "]") {
			pop();
		}
	}
}

function generate() {
	var new_sentence = "";
	for (var i = 0; i < sentence.length;i++) {
		var current = sentence.charAt(i);
		var found = false;
		for (var j = 0; j < rules.length;j++) {
			if (current == rules[j].a) {
				found = true;
				new_sentence += rules[j].b;
				break;
			}
		}
		if(found == false) {
			new_sentence += current;
		}
	}
	sentence = new_sentence;
	createP(sentence);
	turtle();
	len = len * 0.5;
}
