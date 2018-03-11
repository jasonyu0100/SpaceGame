class Grid {
	constructor(rows,cols) {
		this.rows = rows;
		this.cols = cols;
		this.size = width / this.cols;
		this.gridMap = this.generateGridMap(this.rows,this.cols,this.size,height);
	}

	generateGridMap(rows,cols,size,height) {
		let gridMap = {}
		for(let r = 0; r < rows; r ++) {
			let row = {}
			for(let c = 0; c < cols; c ++) {
				let xCoord = (size / 2) + c * size;
				let yCoord = (height - size / 2) - (r * size)
				let currentCoord = createVector(xCoord,yCoord)
				row[c] = currentCoord;
			}
			gridMap[r] = row;
		}

		return gridMap
	}

	display() {
		rectMode(CENTER);
		fill(0);
		let newSize = this.size * 0.9;
		for(let r = 0; r < this.rows; r ++) {
			for(let c = 0; c < this.cols; c++) {
				let coord = this.gridMap[r][c]
				rect(coord.x,coord.y,newSize,newSize);
			}
		}
	}

	update() {
		this.display();
	}
}