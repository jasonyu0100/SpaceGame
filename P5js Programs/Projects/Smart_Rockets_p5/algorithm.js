class Algorithm {
    constructor(
        popCount,popMut,
		lifeSpan,radius,
		spawnX,spawnY,
		targetX,targetY) {

        this.population = new Population(popCount,popMut,spawnX,spawnY,lifeSpan);
        this.target = new Target(targetX,targetY,radius);
    }

    update() {
        this.population.update(this.target);
        this.target.update();
    }
}