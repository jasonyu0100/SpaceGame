class Coordinates {
	constructor() {
		this.mappedCoordinates = {};
		this.coordinates = [];
	}

	updateCoordinates(coord) {
		if (this.mappedCoordinates[coord.row] === undefined) {
			this.mappedCoordinates[coord.row] = [];
		} 
		this.mappedCoordinates[coord.row].push(coord);
		this.coordinates.push(coord);
	}

	clearCoord(coord) {
		for(let n = this.coordinates.length-1; n >= 0; n --) {
			let currentCoord = this.coordinates[n];
			if (currentCoord === coord) {
				this.coordinates.splice(n,1);
			}
		}
	}

	clearRow(rowNumber) {
		for (let coord of this.mappedCoordinates[rowNumber]) {
			this.clearCoord(coord);
		}
		this.mappedCoordinates[rowNumber] = [];
	}

	checkClear(rowAmount,colAmount) {
		for (let rowNumber = 0; rowNumber < rowAmount; rowNumber ++) {
			if (this.mappedCoordinates[rowNumber] === undefined) {

			} else if (this.mappedCoordinates[rowNumber].length === colAmount) {
				this.clearRow(rowNumber);
			}
		}
	}
	swapRows(rowNumber1,rowNumber2) {
		let row1 = this.mappedCoordinates[rowNumber1];
		let row2 = this.mappedCoordinates[rowNumber2];
		this.mappedCoordinates[rowNumber1] = row2;
		this.mappedCoordinates[rowNumber2] = row1;
	}

	decrementCoordinates(coordinates) {
		for (let coord of coordinates) {
			coord.row -= 1;
		}
	}

	dropCoordinates(rowAmount) {
		for(let rowNumber = 0; rowNumber < rowAmount - 1; rowNumber ++) {
			if (this.mappedCoordinates[rowNumber] === undefined) {
				this.mappedCoordinates[rowNumber] = [];
			} if (this.mappedCoordinates[rowNumber + 1] === undefined) {
				this.mappedCoordinates[rowNumber + 1] = [];
			} if (this.mappedCoordinates[rowNumber].length === 0 && this.mappedCoordinates[rowNumber + 1].length > 0) {
				this.decrementCoordinates(this.mappedCoordinates[rowNumber + 1]);
				this.swapRows(rowNumber,rowNumber+1);
			} 
		}
	}
}