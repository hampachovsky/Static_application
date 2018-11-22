function Rain(x, y) {
	this.x = x;
	this.y = y;
	this.w = 70;

	this.show = function() {
		noFill();
		stroke(33, 184, 255);
		ellipse(this.x, this.y, this.w);

	}

	this.update = function() {
		this.w += 1;
	}
}

