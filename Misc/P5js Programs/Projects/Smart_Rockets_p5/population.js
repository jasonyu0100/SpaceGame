class Population {
    constructor(popCount,popMut,spawnX,spawnY,lifeSpan) {
        this.population = [];
        this.spawnPoint = createVector(spawnX,spawnY);
        this.lifeSpan = lifeSpan
        this.popCount = popCount;
        this.popMut = popMut;
        this.initPop();
    }

    initPop() {
        for(var i = 0; i < this.popCount; i ++) {
            var rocket = new Rocket(this.spawnPoint.x,this.spawnPoint.y,this.lifeSpan);
            this.population.push(rocket);
        }
    }

    getFitScores() {
        var total = 0;
        for(var i = 0; i < this.population.length; i ++) {
            total += this.population[i].fitness;
        }
        var scale = 100 / total;
        console.log(total);
        console.log(scale);
        for (var i = 0; i < this.population.length; i ++) {
            var current = this.population[i].fitness
            current *= scale;
            console.log(current);
        }
    }

    update(target) {
        for (var i = this.population.length-1; i >= 0; i -- ){
            var current = this.population[i];
            current.update(target);
            if (current.completion) {
                this.population.splice(i,1);
            }
        }
        this.lifeSpan -= 1;
        if (this.lifeSpan < 0) {
            this.getFitScores();
        }
    }
}