var symbol
var symbolSize = 60;
function setup() {
	createCanvas(window.innerWidth,window.innerHeight);
	textSize(symbolSize);
	symbol = new Symbol(width/2,height/2);
}

function draw() {
	background(0);
	symbol.render();
}

function Symbol(x,y,speed) {
	this.speed = speed;
	this.x = x;
	this.y = y;
	this.value;
	this.switchInterval = round(random(10,40));

	this.setToRandomSymbol = function() {
		if (frameCount % this.switchInterval == 0) {
			this.value = String.fromCharCode(0x30A0 + round(random(0,96)));
			this.switchInterval = round(random(2,20));
		}
	}
	this.setToRandomSymbol();

	this.render = function() {
		fill(0,255,70);
		text(this.value,this.x,this.y);
		this.fall();
		// this.setToRandomSymbol();
	}

	this.fall = function() {
		this.y = (this.y >= height) ? 0 : this.y += this.speed;
	}
}

function Stream(column) {
	this.symbols = [];
	this.total_symbols = round(random(5,30));
	this.speed = random(5,20);
	this.generate_symbols = function() {
		var y = 0;
		var x = width/2;

		for (var i = 0; i < total_symbols; i ++) {
			symbol = new Symbol(x,y,this.speed);
			this.symbols.push(symbol);
			y -= symbolSize;
		}
	}

	this.render = function() {
		this.symbols.forEach(function(symbol) {
			fill(0,255,70);
			text(symbol.value,symbol.x,symbol.y);
			symbol.fall();
			symbol.setToRandomSymbol();
		});
	}
}


