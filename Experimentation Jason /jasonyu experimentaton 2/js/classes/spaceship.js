class Spaceship extends Particle {
    constructor(pos,spaceShipPic,bullletPic) {
        super(pos);
        let bullets = [];
        let sprite = new sprite(resources[spaceShipPic].texture)
    }

    shoot(mousePosition) {
        let direction = mousePosition.copy();
        direction.sub(this.pos);
        direction.setMag(4);
        bullets.push(new Bullet(this.pos,direction,bullletPic))
    }

    update() {
        super.update();
        for (bullet of this.bullets) {
            this.bullet.update();
        }
    }
}