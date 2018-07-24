class BouncingBall {
    constructor(gv, x, y, dx, dy, fileLocation, width, height) {
        this.position = new Vector(x, y)
        this.velocity = new Vector(dx, dy) //vector dx dy
        this.acceleration = new Vector(0, gv);
        this.sprite = new sprite(resources[fileLocation].texture)
        this.sprite.width = width
        this.sprite.height = height
    }
    update() {
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        this.sprite.x = this.position.x
        this.sprite.y = this.position.y
        if (this.position.y > height) {
        	this.position.y = height
        	this.velocity.y *= (-1)
        } 
        if (this.position.x > width) {
        	this.position.x = width
        	this.velocity.x *= (-1)
        }
        if (this.position.x < 0) {
        	this.position.x = 0
        	this.velocity.x *= (-1)

        } 

    }




}