class Entity extends Particle {
    constructor(game, sprite, position, reach, mass) {
        super(position, reach, mass)
        this.game = game
        sprite.x = this.position.x
        sprite.y = this.position.y
        this.sprite = sprite
    }

    get bearing() {
        let mouse = this.game.mouseposition
        let center = this.position
        return mouse.sub(center).getAngle()
    }

    // changes to this get reflected on-screen
    updateSprite() {
        this.sprite.x = this.position.x
        this.sprite.y = this.position.y
    }
}