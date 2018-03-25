class AngleVector extends Vector {
	contructor(mag,angle) {
        super(Math.cos(mag),Math.sin(mag));
	}
}

export {AngleVector};