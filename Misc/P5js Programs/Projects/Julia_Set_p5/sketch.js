function setup() {
	frameRate(1);
	createCanvas(400,400);
	pixelDensity(1);
	slider = createSlider(0,10,2,0.001);
	a_slider = createSlider(-1,1,0,0.001);
	b_slider = createSlider(-1,1,0,0.001);

}

function draw() {
	loadPixels();
	for(var x = 0; x < width; x++) {
		for(var y = 0; y < height; y++) {
			var a = map(x, 0, width,-slider.value(), slider.value());
			var b = map(y, 0, width,-slider.value(), slider.value());
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
	var constant_a = a_slider.value();
	var constant_b = b_slider.value();
	for (var n = 0; n < max_iterations; n++) {
		var square = a * a - b * b;
		var imaginary = 2 * a * b;
		a = square + constant_a;
		b = imaginary + constant_b;
		if (abs(a + b) > 16) {
			break;
		}
	}
	var bright = map(n,0,max_iterations,0,1);
	bright = map(sqrt(bright),0,1,255,0);
	return bright;

}