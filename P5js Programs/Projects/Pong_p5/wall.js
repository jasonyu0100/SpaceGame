class Wall {
	constructor(x1,y1,x2,y2) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.thickness = 20
	}

	display() {
		stroke(100);
		strokeWeight(this.thickness);
		line(this.x1,this.y1,this.x2,this.y2);
		strokeWeight(1);
	}

	update() {
		this.display();
	}
}