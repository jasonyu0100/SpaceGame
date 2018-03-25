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
	.add("assets/car.svg")
	.load(setup);

document.body.appendChild(app.view)


let mousePosition;
function setup() {
	mouseposition = app.renderer.plugins.interaction.mouse.global;
}

function gameLoop(delta) {

}

setup();

