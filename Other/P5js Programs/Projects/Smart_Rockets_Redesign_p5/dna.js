class DNA {
    constructor(lifeSpan,geneSequence1,geneSequence2) {
        if(arguments.length == 1) { //No given parents
            this.genes = this.initGenes(lifeSpan);
        } else { //Given Parents
            this.genes = this.reproduce(geneSequence1,geneSequence2);
        }
    }

    initGenes(lifeSpan) {
        var genes = [];
        var count = 0;
        for(var i = 0; i < lifeSpan; i ++) {
            var gene = createVector(random(-1,1),random(-1,1));
            gene.mult(0.4)
            genes.push(gene);
            count += 1;
        }
        return genes;
    }

    reproduce(geneSequence1,geneSequence2) {
        var newGenes = [];
        var midPoint = Math.floor(random() * geneSequence1.length);
        for(var i = 0; i < geneSequence1.length; i ++) {
            if (i < midPoint) {
                newGenes.push(geneSequence1[i]);
            } else {
                newGenes.push(geneSequence2[i]);
            }
        }
        return newGenes;
    }
}