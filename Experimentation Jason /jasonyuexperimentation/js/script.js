// aliases
let application = PIXI.Application,
		loader = PIXI.loader,
		resources = PIXI.loader.resources,
		sprite = PIXI.Sprite

// application setup
let app = new application({
	width: innerWidth, 
	height: innerHeight,
	backgroundColor: 0x333333,
	antialias: true,
	interactive:true,
	transparent: false
})

// add canvas to DOM
document.body.appendChild(app.view)

// load images
loader
  .add("images/car.png")
  .load(setup)

// setup
let car
function setup() {
	// sprites
  car = new sprite(resources["images/car.png"].texture)

  // sprite positioning
  car.position = {x:innerWidth/2,y:innerHeight/2}
  car.velocity = {x:1,y:1}
  // sprite size
  car.width = 100
  car.height = 150
  //car.scale.set(0.5, 0.5)

  //Set anchor
  car.anchor.set(0.5,0.2)
  //car.pivot.set(50,30) do the same thing

  // add sprites
  app.stage.addChild(car)
}

let mouseData =  PIXI.interaction.InteractionEvent


//console.log(PIXI.interaction.InteractionData.getLocalPosition);
// window.addEventListener(PIXI.interaction.InteractionEvent, function(e) {
//   console.log(e.x, e.y)
// })
// app.stage.interactive = true;
// app.stage.on('mouseover', (event)=>{
// 	console.log(event)
// });

var mouseposition = app.renderer.plugins.interaction.mouse.global;
function loop() {
	requestAnimationFrame(loop)
	if (car.position.x > innerWidth || car.position.x < 0) {
		car.velocity.x *= -1
	}
	if (car.position.y < 0 || car.position.y > innerHeight) {
		car.velocity.y *= -1
	}
	car.position.x += car.velocity.x
	car.position.y += car.velocity.y
	//car.rotation += 0.1
}

loop()