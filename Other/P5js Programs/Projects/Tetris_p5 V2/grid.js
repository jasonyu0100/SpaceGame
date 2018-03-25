class Grid {
	constructor(rows,cols,gridWidth,gridHeight) {
		this.rows = rows;
		this.cols = cols;
		this.grid = this.generateGrid(this.rows,this.cols);
		this.gridWidth = gridWidth;
		this.gridHeight = gridHeight;
		this.size = this.gridWidth / this.cols;
		this.scaledDownSize = this.size * 0.9;
	}

	generateGrid(rows,cols) {
		let grid = []
		for(let r = rows - 1; r >= 0; r --) {
			let row = [];
			for (let c = 0; c < cols; c ++) {
				let coord = {row:r,col:c}
				// let coord = createVector(r,c)
				row[c] = coord;
			}
			grid[r] = row;
		}
		return grid;
	}

	deriveCoord(row,col,size) {
		let coordX = (size / 2) + (col * size);
		let coordY = (height - (size / 2)) - (row * size);
		let coord = createVector(coordX,coordY);
		return coord;
	}

	display() {
		rectMode(CENTER);
		fill(0);
		for(let row of this.grid) {
			for(let coord of row) {
				let literalCoord = this.deriveCoord(coord.row,coord.col,this.size);
				rect(literalCoord.x,literalCoord.y,this.scaledDownSize,this.scaledDownSize);
			}
		}
	}

	displayCoord(coord,hueValue) {
		colorMode(HSB);
		fill(hueValue,255,255);
		rectMode(CENTER);
		let literalCoord = this.deriveCoord(coord.row,coord.col,this.size);
		rect(literalCoord.x,literalCoord.y,this.scaledDownSize,this.scaledDownSize);
		colorMode(RGB);
	}

	displayBlock(block) {
		colorMode(HSB);
		let coordinates = block.coordinates;
		for (let coord of coordinates) {
			this.displayCoord(coord,block.hueValue);
		}
		colorMode(RGB);
	}
}