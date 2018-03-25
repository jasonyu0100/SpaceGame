class Pong {
	constructor() {
		this.ball = new Ball(width/2,height/2);
		this.walls = [];
		this.constructWalls(0,width,0,height,100)
	}

	constructWalls(x1,x2,y1,y2,seperation) {
		var coordinates = [
		[x1,y1,x2,y1],
		[x1,y2,x2,y2],
		[x2,y1,x2,y1 + seperation],
		[x2,y2,x2,y2 - seperation],
		[x1,y1,x1,y1 + seperation],
		[x1,y2,x1,y2 - seperation]];
		for (var i = 0; i < coordinates.length; i ++) {
			var coordinate = coordinates[i];
			var wall = new Wall(coordinate[0],coordinate[1],coordinate[2],coordinate[3]);
			this.walls.push(wall);
		}
	}

	update() {
		this.ball.update();
		for(var i = 0; i < this.walls.length; i ++) {
			this.walls[i].update();
		}
	}
}