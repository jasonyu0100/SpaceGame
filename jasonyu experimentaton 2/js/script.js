let application = PIXI.Application,
		loader = PIXI.loader,
		resources = PIXI.loader.resources,
		sprite = PIXI.Sprite;

let app = new PIXI.Application({
	width: 600, 
	height: 600,
	backgroundColor: 0x555555,
	antialias: true,
	interactive:true,
	transparent: false
});


loader
	.add("images/car.svg")
	.load(setup);

document.body.appendChild(app.view)


let mousePosition;
let particles = [];
function setup() {
	mouseposition = app.renderer.plugins.interaction.mouse.global;
	testCallState = testCall;
	ParticleMoveState = ParticleMove;
	let particle = new Car(new Vector(0,0),"images/car.svg",100,50);
	particle.vel = new Vector(0.1,0.1);
	particles.push(particle)
	for (particle of particles) {
		app.stage.addChild(particle.sprite);
	}

	app.ticker.add(delta => gameLoop());
}

function gameLoop(delta) {
	ParticleMoveState(delta);
}

function ParticleMove() {
	for (particle of particles) {
		particle.update(mouseposition);
	}
}

function testCall(delta) {
	console.log('hello');
}


setup();

