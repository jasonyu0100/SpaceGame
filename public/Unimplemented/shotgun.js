class Shotgun extends Weapon {
    constructor(bulletcount, spread) {
        super(aa) //Weapon constructor
        this.bulletcount = bulletcount;
        this.spread = spread;
        this.angle = angle;
    }
}
    shoot(angle){
        super.shoot()
        
        //Get the vector of the spaceship facing rn currently
        for (i = 0; i < bulletcount; i++) {
            angle.x = (spaceship.pos.x - spread)+(Math.random()*2*spread)
            angle.y = (spaceship.pos.y - spread)+(Math.random()*2*spread)
            new Bullet(game, sprite, speed, delta, position, reach, mass)
        }
    }
}