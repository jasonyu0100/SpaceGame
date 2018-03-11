class Bullet extends Particle {
    constructor(pos,velocity,bullletPic) {
        super(pos);
        this.sprite = new sprite(resources[bullletPic].texture)
        this.velocity = velocity;
    }

    collision() {

    }
}