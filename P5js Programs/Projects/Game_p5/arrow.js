class Arrow {
    constructor(x,y) {
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
    }

    display() {
        push();
        fill(255);
        var heading = this.vel.heading() + PI/2;
        translate(this.pos.x,this.pos.y);
        rotate(heading);
        beginShape();
        vertex(0,0);
        vertex(-5,20);
        vertex(5,20);
        endShape(CLOSE);
        pop();
    }

    update() {
        this.edges();
        this.movement()
        this.vel.add(this.acc);
        this.vel.limit(5);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.display();
    }

    movement() {
        if (keyIsDown(LEFT_ARROW)) {
            this.vel.x -= 0.2;
        } if (keyIsDown(RIGHT_ARROW)) {
            this.vel.x += 0.2;
        } if (keyIsDown(UP_ARROW)) {
            this.vel.y -= 0.2;
        } if (keyIsDown(DOWN_ARROW)) {
            this.vel.y += 0.2;
        }
    }

    edges() {
        if (this.pos.x < 0) {
            this.pos.x = 0;
        } else if (this.pos.x > width) {
            this.pos.x = width;
        } else if (this.pos.y < 0) {
            this.pos.y = 0;
        } else if (this.pos.y > height) {
            this.pos.y = height;
        }
    }

}