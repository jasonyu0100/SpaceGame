class Rocket {
    constructor(x,y,lifeSpan) {
        this.pos =  createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.lifeSpan = lifeSpan;
        this.timer = lifeSpan
        this.completion = false;
        this.dna = new DNA(lifeSpan);
        this.fitness;
    }

    display() {
        rectMode(CENTER);
        fill(255);
        noStroke();
        rect(this.pos.x,this.pos.y,10,20);
    }

    getCurrentVect() {
        var currentTick = this.lifeSpan - this.timer;
        var currentVect = this.dna.genes[currentTick];
        return currentVect;
    }

    applyForce(vector) {
        this.acc.add(vector);
    }

    update(target) {
        this.updatePos();
        this.display();
        this.checkCompletion(target);
    }

    updatePos() {
        var currentVect = this.getCurrentVect();
        this.applyForce(currentVect);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.decrementTimer();
    }

    checkCompletion(target) {
        var distance = dist(target.pos.x,target.pos.y,this.pos.x,this.pos.y)
        if (this.timer <= 0 || distance < target.radius) {
            this.completion = true;
            this.fitness = this.dna.calcFit(distance,this.timer);
            console.log(this.fitness);
        }
    }

    decrementTimer() {
        this.timer -= 1;
    }
}