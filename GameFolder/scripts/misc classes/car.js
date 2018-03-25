class Car extends Particle {
    constructor(pos,fileLocation,width,height) {
        super(pos);
        this.sprite = new sprite(resources[fileLocation].texture)
        this.updateSpritePos();
        this.sprite.width = width;
        this.sprite.height = height;
        this.sprite.rotation = Math.PI * 3 / 2;
    }



    updateSpritePos() {
        this.sprite.x = this.pos.x
        this.sprite.y = this.pos.y
    }

    orientCar() {
        let x = this.vel.x
        let y = this.vel.y
        let angle = Math.abs(Math.atan(y/x));
    
        if (x>0&&y>0) {
            this.sprite.rotation = angle
        } else if (x>0&&y<0) {
            this.sprite.rotation = -angle
        } else if (x<0&&y>0) {
            this.sprite.rotation = Math.PI-angle
        } else if (x<0&&y<0) {
            this.sprite.rotation = Math.PI+angle
        } 
        
    }   

    update(mouseposition) {
        let direction = new Vector(mouseposition.x,mouseposition.y);
        let comparison = this.pos.copy();
        direction.sub(comparison)
        direction.setMag(0.01)
        this.applyForce(direction);
        super.update();
        this.updateSpritePos();
        this.orientCar()

    }
}