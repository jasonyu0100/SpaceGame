class Bullet extends Particle {
    constructor(pos,velocity,bulletPic) {
        super(pos);
        this.sprite = new sprite(resources[bulletPic].texture)
        this.velocity = velocity;
    }

    collision() {

    }
}