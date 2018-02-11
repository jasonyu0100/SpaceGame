class Population {
    constructor(popCount,lifeSpan,spawn,target,radius) {
        //Population Info
        this.popCount = popCount;
        this.lifeSpan = lifeSpan;
        this.count = 0;
        this.spawn = spawn;
        //Targets
        this.target = target;
        this.radius = radius;
        //Population
        this.population = this.generatePopulation(this.popCount);
    }

    generatePopulation(popCount) {
        var newPopulation = []
        for (var i = 0; i < popCount; i ++) {
            var rocket = new Rocket(this.spawn,this.lifeSpan);
            newPopulation.push(rocket);
        }
        return newPopulation
    }

    renderTarget() {
        fill(255);
        ellipse(this.target.x,this.target.y,this.radius*2,this.radius*2);
    }

    updateRockets() {
        for (var i = 0; i < this.population.length; i ++) {
            var rocket = this.population[i];
            if (rocket.completion) {
                
            } else {
                rocket.update();
                rocket.checkTarget(this.target,this.radius);
            }
        }
    }

    update() {
        if (this.count > this.lifeSpan) {
            this.fitness(this.population)
            this.evolution(this.population);
            this.count = 0;
        } else {
            //Render and Display Target
            this.renderTarget();
            //Update Rockets
            this.updateRockets();
            //Global Count of Simulation
            this.count += 1;
        }
    }

    getPopulationScores(population) {
        var distScores = [];
        var countScores = [];
        for (var i = 0; i < population.length; i ++) {
            var rocket = population[i];
            var data = rocket.getCompletionData(this.target);
            distScores[i] = data[0];
            countScores[i] = data[1];
        }
        return {'dist':distScores,'count':countScores};
    }
    
    moderateScores(distScores,countScores) {
        var maxDist = Math.max.apply(null,distScores);
        var newDistScores = distScores.map(x => map(x,0,maxDist,1,0) **2); //Maps higher distance to lower values and lower distances to higher values cubed to accentuate scores
        var countScores = countScores.map(x => (this.life / (x + 0.01)))**2; //Get count score as a ratio of the totalLife to count The lower the count, the higher the multiplier (max multiplier = x100)
        var sumCountScores = newDistScores.reduce(function(a, b) { return a + b; }, 0);
        var finalScores = newDistScores.map(x => int(x / sumCountScores * 1000));
        return finalScores;
    }

    applyScores(scores,population) {
        for (var i = 0; i < scores.length; i++) {
            population[i].score = scores[i];
        }
        return population;
    }

    fitness(population) {
        var scores = this.getPopulationScores(population);
        var distScores = scores.dist;
        var countScores = scores.count;
        var finalScores = this.moderateScores(distScores,countScores);
        this.applyScores(finalScores,this.population);
    }

    constructGenePool(population) {
        //From scores create a corresponding genepool
        var genePool = [];
        for(var i = 0; i < population.length; i ++) {
            var rocket = population[i];
            for(var j = 0; j < rocket.score; j ++) {
                genePool.push(rocket);
            }
        }
        return genePool;
    }

    selection(genePool) {
        //Select and generate a new population based on gene pool
        var newPop = [];
        for(var i = 0; i < this.popCount; i ++) {
            var geneSequence1 = this.randomSelectValue(genePool).dna.genes;
            var geneSequence2 = this.randomSelectValue(genePool).dna.genes;
            var childDNA = new DNA(this.lifeSpan,geneSequence1,geneSequence2);
            var newRocket = new Rocket(this.spawn,this.life,childDNA);
            newPop.push(newRocket);
        }
        return newPop;
    }

    randomSelectValue(array) {
        //Returns a random value from array
        return array[Math.floor(Math.random() * array.length)];
    }

    evolution(population) {
        var genePool = this.constructGenePool(this.population);
        var newPopulation = this.selection(genePool);
        this.population = newPopulation;
        return newPopulation;
    }

    applyForce(vector) {
        for (var i = 0; i < this.population.length; i ++) {
            var rocket = this.population[i];
            if (rocket.completion) {

            } else {
                rocket.applyForce(vector);
            }
        }
    }
    
}