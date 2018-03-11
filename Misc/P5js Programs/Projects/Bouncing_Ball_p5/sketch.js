var ball;

function setup() {
	createCanvas(500,500);
	ball = new Ball();
}

function draw() {
	background(200);
	ball.move();
	ball.bounce();
	ball.display();
}

function Ball() {
	this.position = createVector(width/2,height/2);
	this.velocity = createVector(1,5);
	this.display = function() {
		ellipse(this.position.x,this.position.y,10,10);
	}

	this.move = function() {
		this.position.add(this.velocity);
	}

	this.bounce = function() {
		if(this.position.x > width || this.position.x < 0) {
			this.velocity.x *= -1;
		} 
		if (this.position.y > height || this.position.y < 0) {
			this.velocity.y *= -1;
		}
	}
}

