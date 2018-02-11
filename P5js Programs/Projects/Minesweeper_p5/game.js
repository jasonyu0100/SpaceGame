class Game {
	constructor(rows,cols,borderPercentage) {
		this.rows = rows;
		this.cols = cols;
		this.borderPercentage = 0.1;
		this.length = (width* (1-this.borderPercentage)) / this.rows;
		this.grid = new Grid(this.rows,this.cols,this.length,this.borderPercentage);
	}

	update() {
		this.grid.update();
	}

	click(mouseX,mouseY) {
		this.grid.checkCell(mouseX,mouseY);
	}
}