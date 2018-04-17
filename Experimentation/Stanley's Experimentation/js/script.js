let Application = PIXI.Application,
		Graphics = PIXI.Graphics,
		Colors = {
			red: 0xC91F37,
			orange: 0xDC3023,
			yellow: 0xFFB61E,
			green: 0x26C281,
			blue: 0x22A7F0,
			purple: 0xBF55EC
		}

// application setup
let app = new Application({
	width: innerWidth, 
	height: innerHeight,
	antialias: true,
	transparent: false,
	resolution: 1
})
app.renderer.backgroundColor = 0x333333

// add canvas to DOM
document.body.appendChild(app.view)

// main variables
let square, circle, squircle, state
const shapes = []

function setup() {
	// set current state to play
	state = play

	square = new Graphics()
	square.beginFill(Colors.red)
	square.drawRect(0, 0, 100, 100)
  square.endFill()
  square.position.set(innerWidth / 2 - 200, innerHeight / 2)
  square.pivot.set(50, 50)
  square.vx = 1

  circle = new Graphics()
  circle.beginFill(Colors.green)
  circle.drawCircle(0, 0, 55)
  circle.endFill()
  circle.position.set(innerWidth / 2, innerHeight / 2)
  circle.vx = -1
  console.log(circle.width)

  squircle = new Graphics()
  squircle.beginFill(Colors.blue)
  squircle.drawRoundedRect(0, 0, 100, 100, 30)
  squircle.endFill()
  squircle.position.set(innerWidth / 2 + 200, innerHeight / 2)
  squircle.pivot.set(50, 50)
  squircle.vx = 1

  shapes.push(square)
  shapes.push(circle)
  shapes.push(squircle)

  app.stage.addChild(square)
  app.stage.addChild(circle)
  app.stage.addChild(squircle)
  app.ticker.add(delta => gameLoop(delta))
}

function gameLoop(delta) {
	state(delta)
}

function play(delta) {
	shapes.forEach(shape => {
		if (isTouchingWall(shape)) {
			shape.vx *= -1
		}
		shape.position.x += shape.vx
	})
	for (let i = 0; i < shapes.length; ++i) {
		for (let j = i; j < shapes.length; ++j) {
			if (hitTestRectangle(shapes[i], shapes[j])) {
				shapes[i].vx *= -1
				shapes[j].vx *= -1
			}
		}
	}
}

function isTouchingWall(shape) {
	let leftX = shape.x - (shape.width / 2)
	let rightX = shape.x + (shape.width / 2)
	return leftX <= 0 || rightX >= innerWidth
}

function hitTestRectangle(r1, r2) {
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy
  hit = false

  r1.centerX = r1.x + r1.width / 2
  r1.centerY = r1.y + r1.height / 2
  r2.centerX = r2.x + r2.width / 2
  r2.centerY = r2.y + r2.height / 2

  r1.halfWidth = r1.width / 2
  r1.halfHeight = r1.height / 2
  r2.halfWidth = r2.width / 2
  r2.halfHeight = r2.height / 2

  vx = r1.centerX - r2.centerX
  vy = r1.centerY - r2.centerY

  combinedHalfWidths = r1.halfWidth + r2.halfWidth
  combinedHalfHeights = r1.halfHeight + r2.halfHeight

  if (Math.abs(vx) < combinedHalfWidths) {
    if (Math.abs(vy) < combinedHalfHeights) {
      hit = true
    } else {
      hit = false
    }
  } else {
    hit = false
  }
  return hit
}

setup()