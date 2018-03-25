let points = [];
let amount = 1000;
let brain;
let c = 0.1;
let count = 0;

function setup() {
	frameRate(10);
	createCanvas(1000,1000);
	stroke(255);
	brain = new Perceptron();
	for(var i = 0; i < amount; i ++) {
		let x = random(width);
		let y = random(height);
		let answer = (y < formula(x)) ? -1 : 1;
		points[i] = new Coordinate(x,y,answer);
		
	}
}

function draw() {
	background(0);
	stroke(255);
	line(0,0,width,height);
	stroke(color(255,0,0));
	displayWeightLine(brain.weights);
	stroke(255);
	for(var i = 0; i < amount; i ++) {
		let point = points[i];
		if (brain.feedForward(point.inputs) == point.answer) {
			fill(color(0,255,0));
		} else {
			fill(color(255,0,0));
		}
		point.display();
		//brain.train(point.inputs,point.answer);
	}
	let point = points[count];
	brain.train(point.inputs,point.answer);
	count ++;
	if (count >= amount) {
		count = 0;
	}
}

function formula(x) {
	return x;
}

function displayWeightLine(weights) {
	let formula = weights[0] / weights[1];
	beginShape()
	for(var x = 0; x < width; x += 5) {
		let y = formula * x *-1;
		vertex(x,y);
	}
	endShape()
}



class Coordinate {
	constructor(x,y,answer) {
		this.pos = createVector(x,y);
		this.answer = answer;
		this.inputs = [x,y];
	}

	display() {
		ellipse(this.pos.x,this.pos.y,10,10);
	}
}


class Perceptron {
	constructor() {
		this.weights = [];
		for (let i = 0; i < 2; i ++ ) {
			this.weights[i] = random(-1,1);
		}
	}

	feedForward(inputs) {
		let sum = 0
		for(let i = 0; i < this.weights.length; i ++) {
			sum +=  this.weights[i] * inputs[i];
		}
		return this.sign(sum)
	}

	sign(x) {
		return ((x < 0) ? -1 : 1);
	}

	train(inputs,desired) {
		let guess = this.feedForward(inputs);
		let error = desired - guess;
		console.log(inputs);
		for(let i = 0; i < this.weights.length; i++) {
			let change = error * inputs[i] * c;
			console.log(change);
			this.weights[i] += change;
		}
	}

}