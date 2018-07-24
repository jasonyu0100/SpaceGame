class Player extends Entity {
    constructor(game, sprite, position) {
        super(game, sprite, position)
        this.friction = 0.02
    }


    update(delta) {
        // rotation
        this.sprite.rotation = (this.bearing + 90) / 180 * Math.PI 

        // movement
        this.applyFriction()
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity, delta)
        this.acceleration.mult(0)

        this.updateSprite()
    }

    boost(magnitude=0.6, delta=1) {
        let angle = (this.bearing) / 180 * Math.PI
        let direction = new AngleVector(angle, magnitude*delta)
        this.applyForce(direction)
    }

    shoot(speed=55, delta=1) {
        let coords = [new Vector(0,-30),new Vector(-5,0),new Vector(5,0)]
        let color = 0x00FFFF
        let graphics = new Polygon(coords,color)
        let position = new Vector(this.position.x,this.position.y)
        this.game.map.addChild(graphics)
        this.game.bullets.push(new Bullet(this.game, graphics, speed, delta, position, 10, 10))
    }
}