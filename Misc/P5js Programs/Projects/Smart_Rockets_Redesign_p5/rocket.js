class Rocket {
    constructor(spawn,lifeSpan,dna) {
        //Movement and Pos Vectors
        this.pos = spawn.copy();
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        //Attributes
        this.size = 5;
        this.completion = false;
        this.lifeSpan = lifeSpan;
        this.count = 0;
        this.dna = dna ? dna : new DNA(this.lifeSpan);
        this.score = 0;
    }

    displayRocket() {
        var theta = this.vel.heading() + PI/2;
        var s = this.size;
        noStroke();
        push();
        translate(this.pos.x, this.pos.y);
        rotate(theta);
    
        // Rocket body
        fill(255);
        beginShape(TRIANGLES);
        vertex(0, -s*2);
        vertex(-s, s*2);
        vertex(s, s*2);
        endShape(CLOSE);
    
        pop();
    }

    update() {
        var dnaVector = this.getDnaVector();
        //this.edges();
        this.acc.add(dnaVector)
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.displayRocket();
        this.count += 1;
    }

    getDnaVector() {
        return this.dna.genes[this.count];
    }

    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        } 
        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    checkTarget(target,radius) {
        var distance = dist(target.x,target.y,this.pos.x,this.pos.y);
        if (distance <= radius) {
            this.completion = true;
            this.vel.mult(0);
        }
    }

    getCompletionData(target) {
        var distance = dist(this.pos.x,this.pos.y,target.x,target.y);
        var count = this.count;
        return [distance,count];
    }

    applyForce(vector) {
        this.acc.add(vector);
    }
}