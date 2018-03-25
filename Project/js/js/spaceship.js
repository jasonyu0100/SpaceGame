class Spaceship extends Particle {
    constructor(pos,spaceShipPic,bulletPic) {
        super(pos);
        let bullets = [];
        let sprite = new sprite(resources[spaceShipPic].texture);
        let friction = 0.98; //Change later if not working
        this.spaceShipAngle = null // Where the spaceship is angled towards

        //Inventory
        this.cash = 0

    }

    shoot(mousePosition) {
        let direction = mousePosition.copy();
        direction.sub(this.pos);
        direction.setMag(4);
        bullets.push(new Bullet(this.pos,direction,bulletPic))
    }

    update(mousePosition) {
        let direction = mousePosition.copy();
        direction.sub(this.pos);
        
        this.velocity.mult(this.friction)
        super.update();
        for (bullet of this.bullets) {
            this.bullet.update();
        }
    }

    //When we right click we want to accelerate in given direction


    accelerate() {
        // accelerate to spaceShipAngle
    }

}