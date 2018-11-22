var rain = [];

function setup() {
	createCanvas(1900, 900);

}

function draw() {
	background(51);
	if(frameCount % 10 === 0) {
		rain.push(new Rain(random(height), random(width)));
	}

	for (var i = rain.length - 1; i >= 0; i--) {
		rain[i].show();
		rain[i].update()
		if(rain[i].w >= 180) {
			rain.splice(i, 1)
		}
	}
}
