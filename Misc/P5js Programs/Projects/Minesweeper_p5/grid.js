class Grid {
	constructor(rows,cols,length,borderPercentage,mineCount) {
		this.rows = rows;
		this.cols = cols;
		this.length = length;
		this.borderPercentage = borderPercentage;
		this.mineCount = mineCount
		this.originPoint = createVector(width * borderPercentage / 2,width * borderPercentage / 2); // Where the grid starts
		this.grid = this.generateGrid(rows,cols);
	}

	generateGrid(rows,cols) {
		let grid = [];
		for(let r = 0; r < rows; r ++) {
			let row = []
			for(let c = 0; c < cols; c ++) {
				row.push(new Cell(r,c,this.length,this.originPoint));
			}
			grid.push(row);
		}

		this.setMines(grid,this.mineCount);
		this.setValues(grid);
		return grid;
	}

	setMines(grid,numOfMines) {
		for(let i = 0; i < numOfMines; i ++) {
			while(true) {
				let row = floor(random(0,this.rows));
				let col = floor(random(0,this.cols));
				if (grid[row][col].type === false) {
					grid[row][col].type = true;
					break;
				}
			}
		}
	}

	setValues(grid) {
		for(let r = 0; r < grid.length; r ++) {
			let row = grid[r];
			for(let c = 0; c < row.length; c ++) {
				let cell = row[c];
				if(cell.type === true) {

				} else {
					let mineCellCount = this.checkSurroundingMineCells(cell,grid);
					if (mineCellCount === 0) {
						cell.type = false;
					} else {
						cell.type = mineCellCount;
					}
				}
			}
		}
	}

	checkSurroundingMineCells(cell,grid) {
		let mineCellCount = 0;
		for(let rowChange = -1; rowChange <= 1; rowChange ++) {
			for(let colChange = -1; colChange <= 1; colChange ++) {
				if (rowChange === 0 && colChange === 0) {

				} else {
					let currentCell = grid[cell.row + rowChange][cell.col + colChange];
					if (currentCell.type === true) {
						mineCellCount ++;
					}
				}
			}
		}
		return mineCellCount
	}

	displayGrid() {
		for(let row of this.grid) {
			for(let cell of row) {
				cell.update();
			}
		}
	}

	update() {
		this.displayGrid();
	}

	checkCell(mouseX,mouseY) {
		for(let row of this.grid) {
			for(let coord of row) {
				if (coord.contains(mouseX,mouseY)) {
					coord.activateCell();
				}
			}
		}
	}


}