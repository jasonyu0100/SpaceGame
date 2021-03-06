class Vector {
    constructor(x,y) {
        this.x = x
        this.y = y
    }

    add(vector) {
        this.x += vector.x
        this.y += vector.y
    }

    sub(vector) {
        this.x -= vector.x
        this.y -= vector.y
    }

    mult(mag) {
        this.x *= mag
        this.y *= mag
    }

    div(mag) {
        this.x /= mag
        this.y /= mag
    }

    normalize() {
        let magnitude = Math.sqrt(this.x*this.x + this.y*this.y)
        this.div(magnitude)
    }

    setMag(mag) {
        this.normalize()
        this.mult(mag)
    }

    getAngle() {
        return this.angToRad(Math.atan2(this.y,this.x))
    }

    angToRad(angle) {
        return angle * 180 / Math.PI
    }

    copy() {
        return new Vector(this.x,this.y)
    }
}