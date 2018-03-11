class Spaceship extends Particle {
    constructor(pos,spaceShipPic,bullletPic) {
        super(pos);
        let bullets = [];
        let sprite = new sprite(resources[spaceShipPic].texture);
        let friction = 0.98; //Change later if not working
        let spaceShipAngle = null // Where the spaceship is angled towards

    }

    shoot(mousePosition) {
        let direction = mousePosition.copy();
        direction.sub(this.pos);
        direction.setMag(4);
        bullets.push(new Bullet(this.pos,direction,bullletPic))
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