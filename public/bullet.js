class Bullet extends Entity {
    constructor(game, sprite, speed, delta, position, reach, mass) {
        super(game, sprite, position, reach, mass)
        this.position = new Vector(sprite.x, sprite.y)
        this.sprite.rotation = (this.bearing + 90) / 180 * Math.PI
        let angle = (this.bearing) / 180 * Math.PI
        this.velocity = new AngleVector(angle, speed*delta)
        this.friction = 0.01
    }

    update(delta) {
        this.applyFriction(delta)
        this.velocity.add(this.acceleration,delta)
        this.position.add(this.velocity,delta)
        this.acceleration.mult(0)

        this.updateSprite()
    }
}