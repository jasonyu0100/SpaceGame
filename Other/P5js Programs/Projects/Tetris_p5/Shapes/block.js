class Block {
	constructor(template,blockSize,spawnCoord) {
		this.blockSize = blockSize;
		this.currentTemplate = template
		this.positions = this.generatePositions(spawnCoord,this.currentTemplate);
	}

	generatePositions(spawnCoord,template) {
		let positions = [];
		spawnR = spawnCoord.row;
		spawnC = spawnCoord.col;
		for (let r = template.length; r >= 0; r --) { //For loop was reversed to adhere to template appearance as it is based from ground up
		// Gotta start working on how object spawns 
		//Start loop from end of list so that spawn starts from bottom left
			let currentRow = template[r];
			for (let c = 0; c < currentRow.length; c ++) {
				currentPositionRow = (spawnR + r); // Block should stack up from spawn point
				currentPositionCol = (spawnC + c);
				let currentPositionCoord = {row:currentPositionRow,col:currentPositionCol}
			}
			positions[r] = currentPositionCoord;
		}
		return positions; // Check this code for oddities
		// Such as wrong position coords
		// Checking for list overflow
	}

	display(gridMap) {
		//Find a better alternative to the grid map!!!
		fill(color(255,0,0));
		for (let coord of this.positions) {
			let col = coord.col;
			let row = coord.row;
			let gridCoord = gridMap[row][col]
			rect(gridCoord.x,gridCoord.y,this.blockSize,this.blockSize);
		}
	}

	fall(positions) { // Check first if falling is possible
		// Essentially increment every position row by 1
		for (let i = 0; i < positions.length; i ++) {
			position = positions[i];
			let newRow = position.row + 1;
			let col = position.col;
			newPosition = {row:newRow,col:col};
			positions[i] = newPosition;
		}
		// Should modify pointer
		// If there are errors check code
		return positions
	}

	update(gridMap) {
		this.fall(this.positions);
		this.display(gridMap);
	}

}