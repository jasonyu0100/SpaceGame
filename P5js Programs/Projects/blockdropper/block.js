class Block {
	constructor(size,blockSize,row,col) {
		this.size = size;
		this.blockSize = blockSize;
		this.row = row;
		this.col = col;
	}

	getLiteralCoord(row,col) {
		let y = row * this.blockSize;
		let x = col * this.blockSize;
		return {x:x,y:y}
	}

	displayBlock(coordX,coordY) {
		rectMode(CENTER);
		fill(255);
		rect(coordX - this.blockSize/2,coordY + this.blockSize/2,this.blockSize,this.blockSize);
	}
	display() {
		for (let i = 0; i < this.blockSize; i ++) {
			let coord = this.getLiteralCoord(this.row,this.col + i);
			this.displayBlock(coord.x,coord.y);
		}
	}

}