class Game {
	constructor(rows,cols,gridWidth,gridHeight) {
		this.rows = rows;
		this.cols = cols;
		this.maximumRowHeight = this.rows + 2;
		this.filledCoords = new Coordinates();
		this.grid = new Grid(rows,cols,gridWidth,gridHeight);
		this.current = this.spawnBlock();

	}

	spawnBlock() {
		let origin = {row:this.rows - 1,col:floor((this.cols - 1) / 2)};
		let block = new Block(origin);
		if (block.checkIllegal(this.filledCoords.coordinates,block.coordinates) === true) {
			console.log('Game Over');
			return null;
		}
		return block;
	}

	currentFall(filledCoords) {
		return this.current.fall(filledCoords);
	}

	rotate() {
		this.current.rotateBlock(this.cols,this.filledCoords.coordinates);
	}

	move(keyCode) {
		this.current.moveBlock(keyCode,this.filledCoords.coordinates,this.cols);
	}

	displayGrid() {
		this.grid.display();
	}

	displayBlock() {
		this.grid.displayBlock(this.current);
		for(let coord of this.filledCoords.coordinates) {
			this.grid.displayCoord(coord,coord.hueValue);
		}
	}

	display() {
		this.displayGrid();
		this.displayBlock();
	}


	updateCoordinates() {
		for (let coord of this.current.coordinates) {
			coord.hueValue = this.current.hueValue;
			this.filledCoords.updateCoordinates(coord);
		}
		this.current = this.spawnBlock();
	}

	update() {
		if (this.currentFall(this.filledCoords.coordinates)) {
			this.updateCoordinates();
		}
		this.display();
		this.filledCoords.checkClear(this.rows,this.cols)
		this.filledCoords.dropCoordinates(this.rows);
	}

	drop() {
		this.current.drop(this.filledCoords.coordinates);
		this.updateCoordinates();
	}
}