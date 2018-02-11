var drops = [];
function setup() {
	createCanvas(1000,1000);
	for(i=0;i<100;i++){
		drops[i] = new Drop();
	}
}

function draw() {
	background(150);
	for(i=0;i<drops.length;i++){
		drops[i].move();
		drops[i].show();
	}
}

function Drop(){
	this.x = random(0,width);
	this.y = random(-500,0);
	this.z = random(3,10);

	this.show = function() {
		fill(255,0,100);
		//strokeWeight(map(x,0,z,0,2));
		line(this.x,this.y,this.x,this.y+(2*this.z));
	}
	this.move = function () {
		this.y += 10;
		if (this.y > height){
			this.y = random(-100,0);
			this.x = random(0,width);
		}
	}
}

