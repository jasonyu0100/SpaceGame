class Car {
	constructor(width,height,location) {
		this.pixiSprite = new sprite(resources[location].texture);
		this.pixiSprite.height = height;
		this.pixiSprite.width = width;
		this.pos = {x:0,y:0};
		this.velocity = {x:1,y:1};
		this.force = {x:0,y:0};

	}

	addToContainer(container) {
		container.addChild(this.pixiSprite);
	}

	getDirection() {

	}

	updateSpritePos() {
		this.pixiSprite.x = this.pos.y;
		this.pixiSprite.y = this.pos.x;
	}

	update(mousePosition) {
		
		this.pos.x += this.velocity.x
		this.pos.y += this.velocity.y
		this.updateSpritePos()
	}


}