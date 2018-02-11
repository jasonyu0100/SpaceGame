var blob;
var staticBlobs = [];
var maximumX = 500;
var maximumY = 500;

function setup() {
	createCanvas(500,500);
	blob = new Blob(width/2,height/2,50);
	for (var i = 0; i < 40; i ++) {
		staticBlobs.push(new Blob());
	}
}

function draw() {
	translate(width/2 - blob.pos.x, height/2 - blob.pos.y);
	background(0);
	for (var i = 0; i < staticBlobs.length; i ++) {
		staticBlobs[i].display();
	}
	blob.update();
}

function Blob(x,y,r) {
	if(!(x && y && r)) {
		this.pos = createVector(random(width),random(height));
		this.r = random(5,20);
	} else {
		this.pos = createVector(x,y);
		this.r = r;
	}

	this.display = function() {
		noStroke();
		fill(255);
		ellipse(this.pos.x,this.pos.y,this.r,this.r)
	}
	this.update = function() {
		var vel = createVector(mouseX-width/2, mouseY-height/2);
		vel.setMag(3);
		this.pos.add(vel);
		// this.constraint();
		this.display();
	}

	this.constraint = function() {
		if(this.pos.x > maximumX) this.pos.x = maximumX;
		if(this.pos.x < -maximumX) this.pos.x = -maximumX;
		if(this.pos.y > maximumY) this.pos.y = maximumY;
		if(this.pos.y < -maximumY) this.pos.y = -maximumY;
	}
}