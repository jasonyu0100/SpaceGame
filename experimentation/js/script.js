// aliases
let application = PIXI.Application,
		loader = PIXI.loader,
		resources = PIXI.loader.resources,
		sprite = PIXI.Sprite

// application setup
let app = new application({
	width: innerWidth, 
	height: innerHeight,
	antialias: true,
	transparent: false,
	resolution: 1
})
app.renderer.backgroundColor = 0x333333

// add canvas to DOM
document.body.appendChild(app.view)

// load images
loader
  .add("images/airplane.png")
  .load(setup)

// setup
let airplane
function setup() {
	// sprites
  airplane = new sprite(resources["images/airplane.png"].texture)

  // sprite positioning
  airplane.x = innerWidth / 2
  airplane.y = innerHeight / 2

  airplane.vx = 1
  airplane.vy = 1

  airplane.scale.set(0.2, 0.2)

  // add sprites
  app.stage.addChild(airplane)
}

function loop() {
	requestAnimationFrame(loop)
	if (airplane.x > innerWidth || airplane.x < 0) {
		airplane.vx *= -1
	}
	if (airplane.y < 0 || airplane.y > innerHeight) {
		airplane.vy *= -1
	}
	airplane.x += airplane.vx
	airplane.y += airplane.vy
}

loop()