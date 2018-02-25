class Car {
	constructor(width,height,location) {
		this.pixiSprite = new sprite(resources[location].texture);
		this.pixiSprite.height = height;
		this.pixiSprite.width = width;
		this.velocity = new Vector(1,0)
		this.force = new Vector(0,0)
	}

	addToContainer(container) {
		container.addChild(this.pixiSprite);
	}


	applyForce(force) {
		this.force.add(force)
	}

	getDirection(mousePosition) {
		let mouse = new Vector(mousePosition.x,mousePosition.y)
		let direction = new Vector(this.pixiSprite.x,this.pixiSprite.y)
		mouse.subtract(direction)
		return mouse
	}


	update(mousePosition) {
		let direction = this.getDirection(mousePosition)
		//direction.normalize()
		//this.applyForce(direction)
		//this.velocity.add(this.force)
		//this.force.mult(0)
		this.pixiSprite.x += this.velocity.x
		this.pixiSprite.y += this.velocity.y
		this.pixiSprite.rotation = this.velocity.angle();
	}



}