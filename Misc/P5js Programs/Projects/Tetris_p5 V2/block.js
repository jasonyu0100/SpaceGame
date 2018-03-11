let blockTypes = [
[
['*','*'],
['*','*']
],
[
[' ','*','*'],
['*','*',' ']
],
[
['*','*',' '],
[' ','*','*']
],
[
[' ','*',' '],
['*','*','*']
],
[
['*',' '],
['*',' '],
['*','*']
],
[
[' ','*'],
[' ','*'],
['*','*']
],
['*','*','*','*']
];

// let blockTypes = [
// ['*','*','*','*']
// ];

class Block {
	constructor(originCoord) {
		this.originCoord = originCoord;
		this.blockTemplate = blockTypes[floor(random(0,blockTypes.length))];
		this.coordinates = this.generateCoordinates(this.blockTemplate,this.originCoord);
		this.hueValue = floor(random(0,360));
	}

	generateCoordinates(blockTemplate,originCoord) {
		let coordinates = []
		for(let r = blockTemplate.length - 1; r >= 0; r --) {
			let blockRow = blockTemplate[r];
			for (let c = 0; c < blockRow.length; c ++) {
				if (blockRow[c] === '*') {
					let newRow = originCoord.row + (blockTemplate.length - 1 - r);
					let newCol = originCoord.col + c;
					let coord = {col:newCol,row:newRow};
					coordinates.push(coord);
				}
			}
		}
		return coordinates;
	}

	fall(filledCoords) {
		let unverifiedCoords = [];
		for (let coord of this.coordinates) {
			let newCoord = {row:(coord.row - 1),col:coord.col};
			unverifiedCoords.push(newCoord);
		}
		let overlap = this.checkIllegal(filledCoords,unverifiedCoords);
		if (overlap === true) {
			return true
		} else if (this.originCoord.row === 0){
			return true
		} else {
			this.coordinates = unverifiedCoords;
			this.originCoord.row -= 1;
		}
		return false;
	}

	drop(filledCoords) {
		while (true) {
			if (this.fall(filledCoords) === true) break;
		}
	}

	checkIllegal(filledCoords,unverifiedCoords) {
		let overlap = false;
		for(let unverifiedCoord of unverifiedCoords) {
			for(let filledCoord of filledCoords) {
				if((unverifiedCoord.row) === (filledCoord.row) && (unverifiedCoord.col) === (filledCoord.col)) {
					overlap = true;
					return overlap
				}
			}
		}
		return overlap
	}

	borderCheck(coordinates,maxCols) {
		for (let coord of coordinates) {
			if (coord.row < 0 || coord.col < 0 || coord.col >= maxCols) {
				return true;
			}
		}
		return false;
	}

	rotateBlockTemplate(blockTemplate) {
		let index = {};
		let length = blockTemplate[0].length;
		for(let i = blockTemplate.length - 1; i >= 0; i --) {
			let row = blockTemplate[i];
			for(let j = 0; j < row.length; j ++) {
				if (index[j] !== undefined) {
					index[j].push(row[j]);
				} else {
					index[j] = [row[j]];
				}
			}
		}
		let rotatedBlockTemplate = [];
		for(let i = 0; i < length; i ++) {
			rotatedBlockTemplate[i] = index[i];
		}
		return rotatedBlockTemplate;
	}

	rotateBlock(maxCols,filledCoords) {
		let rotatedBlockTemplate = this.rotateBlockTemplate(this.blockTemplate);
		let newCoordinates = this.generateCoordinates(rotatedBlockTemplate,this.originCoord);
		let check = this.checkIllegal(filledCoords,newCoordinates);
		let borderCheck = this.borderCheck(newCoordinates,maxCols);
		if (check === false && borderCheck === false) {
			this.blockTemplate = rotatedBlockTemplate;
			this.coordinates = newCoordinates;
		}
	}

	moveBlock(keyCode,filledCoords,maxCols) {
		let direction = 0;
		if (keyCode === 37) {
			direction = -1;
		} else if (keyCode === 39) {
			direction = 1;
		}

		let unverifiedCoords = [];
		for (let coord of this.coordinates) {
			let newCoord = {row:coord.row,col:(coord.col + direction)};
			unverifiedCoords.push(newCoord);
		}

		let overlap = this.checkIllegal(filledCoords,unverifiedCoords);
		let border = this.borderCheck(unverifiedCoords,maxCols);
		if (overlap === true || border === true) {
			return false;
		} else {
			this.coordinates = unverifiedCoords;
			this.originCoord.col += direction;
			//Add later check for borders
		}
		return true;
	}
}