class DNA {
    constructor(geneLength) {
        this.geneLength = geneLength;
        this.genes = this.initGenes(this.geneLength);
        this.fitness = 0;
    }
    initGenes(geneLength) {
        var genes = [];
        for(var i = 0; i < geneLength; i ++) {
            var randVector = p5.Vector.random2D();
            randVector.mult(0.1);
            genes.push(randVector);
        }
        return genes
    }

    calcFit(distance,time) {
        // The lower this value the worse!
        //Max fitness is 100 given that distance and time are 0
        return 1 / (distance + time + 0.01);
    }
}