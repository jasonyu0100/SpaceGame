class Vector {
	constructor(x,y) {
		this.x = x;
		this.y = y;

	}

	add(second) {
		this.x += second.x
		this.y += second.y
	}

	subtract(second) {
		this.x -= second.x
		this.y -= second.y
	}

	mult(mag) {
		this.x *= mag
		this.y *= mag
	}

	radiansToDegrees(radians) {
		return radians * 180 / Math.PI
	}

	mag() {
		return Math.sqrt(this.x * this.x) + (this.y * this.y)
	}

	normalize() {
		this.x /= this.mag
		this.y /= this.mag
	}

	scale(mag) {
		this.normalize()
		this.mult(mag)
	}

	angle() {
		if (this.x == 0) {
			return Math.PI / 2
		} else if (this.y == 0) {
			return Math.PI / 2 
		} else {
			return Math.atan(this.x/this.y)
		}
	}

	reset() {
		this.x = 0;
		this.y = 0;
	}
}