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
	.add("images/ball.png", { crossOrigin: 'true' })
	.load(setup);

document.body.appendChild(app.view)
console.log(app.renderer)
width = app.renderer.screen.width
height = app.renderer.screen.height
let ball;
function setup() {
	updateObjects = update;
	ball = new BouncingBall(0.1,0,height/2,1.5,-5,"images/ball.png",50,50);
	app.stage.addChild(ball.sprite);
	app.ticker.add(delta => gameLoop());
}

function gameLoop(delta) {
	updateObjects(delta);
}

function update() {
	ball.update();
}


setup();