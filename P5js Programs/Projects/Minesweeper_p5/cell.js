class Cell {
	constructor(row,col,length,origin) {
		this.row = row;
		this.col = col;
		this.length = length;
		this.pos = createVector(origin.x + row*length,origin.y + col*length)
		this.state = false;
		this.type = false;
	}

	contains(x,y) {
		return (x >= this.pos.x && x < this.pos.x + this.length) && 
					 (y >= this.pos.y && y < this.pos.y + this.length);
	}

	activateCell() {
		this.state = true;
	}

	display() {
		stroke(0);
		fill(255);
		rect(this.pos.x,this.pos.y,this.length,this.length);
		if(this.state == true) {
			ellipse(this.pos.x + this.length / 2,this.pos.y + this.length / 2
				   ,this.length * 0.7,this.length * 0.7);
		}
	}

	update() {
		this.display();
	}
}