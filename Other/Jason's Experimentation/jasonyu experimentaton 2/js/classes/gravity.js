class GravityPoint extends Vector {

    ///TODO
    constructor(x,y,reach) {
        super(x,y)
        this.reach = reach;
    }

    gravityForce(child) {

        this.sub(child)
        return this
    }
}