class Shotgun extends Weapon {
    constructor(bulletcount, spread) {
        super(aa) //Weapon constructor
        this.bulletcount = bulletcount;
        this.spread = spread;
        var bullangle;
    }

    shoot(){
        super.shoot()
        
        //Get the vector of the spaceship facing rn currently xd
        for (i = 0; i < bulletcount; i++) {
            bullangle.x = (spaceship.pos.x - spread)+(Math.random()*2*spread)
            bullangle.y = (spaceship.pos.y - spread)+(Math.random()*2*spread)
            new Bullet(spaceship.pos, bullangle, shotgunspritethingyreeeeee)
        }
    }
}