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
	.add("images/car.png")
	.load(setup);

document.body.appendChild(app.view)

let car;
let mouseposition = app.renderer.plugins.interaction.mouse.global;
//app.stage.mouseover()
function setup() {
	car = new Car(100,150,"images/car.png");
	car.addToContainer(app.stage);

	app.ticker.add(function(){
		car.update(mouseposition);
	});
}

