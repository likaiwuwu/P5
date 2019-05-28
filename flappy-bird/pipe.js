var speed = 4;
var gap = 600 * 0.35;
function Pipe() {
	this.top = random(height - gap);
	this.bottom = height - this.top - gap;
	this.x = width;
	this.w = 20;

	this.show = function() {
		fill(255);
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height - this.bottom, this.w, this.bottom);
	}

	this.update = function() {
		this.x -= speed;
	}


}
