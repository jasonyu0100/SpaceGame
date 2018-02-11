function setup() {
	frameRate(1);
	createCanvas(400,400);
	pixelDensity(1);
	x_slider = createSlider(0,10,2,0.01);
	y_slider = createSlider(0,10,2,0.01);
}

function draw() {
	loadPixels();
	for(var x = 0; x < width; x++) {
		for(var y = 0; y < height; y++) {
			var a = map(x, 0, width,-x_slider.value(), x_slider.value());
			var b = map(y, 0, width,-x_slider.value(), x_slider.value());
			var val = Mandelbrot(a,b);
			var pix = (x + y * width) * 4;
			pixels[pix + 0] = val;
			pixels[pix + 1] = val;
			pixels[pix + 2] = val;
			pixels[pix + 3] = 255;
		}
	}
	updatePixels();
}

function Mandelbrot(a,b) {
	var max_iterations = 20;
	var initial_a = a;
	var initial_b = b;
	for (var n = 0; n < max_iterations; n++) {
		var square = a * a - b * b;
		var imaginary = 2 * a * b;
		a = square + initial_a;
		b = imaginary + initial_b;
		if (abs(a + b) > 16) {
			break;
		}
	}
	var bright = map(n,0,max_iterations,0,1);
	bright = map(sqrt(bright),0,1,255,0);
	return bright;

}