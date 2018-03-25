class Game {
	constructor(rows,cols) { // Add various parameters fall speed later
		this.rows = rows;
		this.cols = cols;
		this.templates = [[
		['*',' ',' ',' '],
		['*',' ',' ',' '],
		['*',' ',' ',' '],
		['*',' ',' ',' ']
		]]
		this.grid = new Grid(this.rows,this.cols);
		this.fallSpeed = 1;
		this.current = null;
	}

	update() {
		this.grid.update();
	}

	spawn() {
		// Apply check to see whether chose column is viable for block
		let randomTemplate = this.templates[floor(random(0,templates.length))];
		let spawnColumn = floor(random(0,this.cols));
		let spawnedBlock = {row:this.rows,col:spawnColumn}
		this.current = spawnedBlock;
	}
}