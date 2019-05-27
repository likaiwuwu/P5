function Bird() {
	this.y = height / 2;
	this.x = 64;

	this.gravity = 0.6;
	this.lift = -8;
	this.velocity = 0;
	this.highlight = false;

	this.show = function() {
		fill(255);
		if (this.highlight) {
			fill(255, 0, 0);
		}
		ellipse(this.x, this.y, 32, 32);
	}

	this.up = function() {
		this.velocity = 0;
		this.velocity += this.lift;
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.y += this.velocity;

		if (this.y > height) {
			this.y = height;
			this.velocity = 0;
		}

		if (this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}
	}

	this.hitsPipe = function(pipe) {
		if (this.y < pipe.top || this.y > height - pipe.bottom) {
			if (this.x > pipe.x && this.x < pipe.x + pipe.w) {
				this.highlight = true;
				this.show();
				return true;
			}
		}
		this.highlight = false;
		this.show();
		return false;
	}

	this.hitsWall = function() {
		if (this.y == height || this. y == 0) {
			this.highlight = true;
			return true;
		}
		this.highlight = false;
		return false;
	}
}
