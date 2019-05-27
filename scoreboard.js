function Scoreboard() {
	this.score = 0;
	this.best_score = 0;

	this.incrementScore = function() {
		this.score++;
		if (this.score > this.best_score) {
			this.best_score = this.score;
		}
	}

	this.update = function() {
		textSize(32);
		fill(255);
		text(this.score, width / 2, 30);
		fill(0, 102, 153);
		text(this.best_score, width / 2, 90);
	}

}
