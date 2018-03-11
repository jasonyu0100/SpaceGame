class Grid {
	constructor(rows,cols,gridWidth,gridHeight) {
		this.rows = rows;
		this.cols = cols;
		this.grid = this.generateGrid(this.rows,this.cols);
		this.gridWidth = gridWidth;
		this.gridHeight = gridHeight;
		this.size = this.gridWidth / this.cols;
		this.scaledDownSize = this.size * 0.9;
		this.current = null;
		this.blockList = [];

		this.spawnBlock();
	}

	generateGrid(rows,cols) {
		let grid = []
		for(let r = rows - 1; r >= 0; r --) {
			let row = [];
			for (let c = 0; c < cols; c ++) {
				let coord = {row:r,col:c}
				row[c] = coord;
			}
			grid[r] = row;
		}
		return grid;
	}

	deriveCoord(row,col,size) {
		let coordX = (this.scaledSize/2) + (col * this.scaledSize);
        let coordY = (height - this.scaledSize/2) - (row * this.scaledSize);
		let coord = createVector(coordX,coordY);
		return coord;
	}

	displayBlocks() {
		for(let block of this.blockList) {
			block.display();
		}
	}

	displayGrid() {
		rectMode(CENTER);
		fill(0);
		for(let row of this.grid) {
			for(let coord of row) {
				let literalCoord = this.deriveCoord(coord.row,coord.col,this.size);
				rect(literalCoord.x,literalCoord.y,this.scaledDownSize,this.scaledDownSize);
			}
		}
	}

	display() {
		this.displayGrid();
		this.displayBlocks();
	}

	spawnBlock() {
		this.current = new Block(3,this.size,this.rows - 1,Math.floor(this.cols / 2));
		this.blockList.push(this.current);
	}
}