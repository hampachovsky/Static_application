function Rain(x, y) {
	this.x = x;
	this.y = y;
	this.w = 70;

	this.show = function() {
		noFill();
		stroke(13, 84, 150);
		ellipse(this.x, this.y, this.w);

	}

	this.update = function() {
		this.w += 1;
	}
}

