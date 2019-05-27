var bird;
var pipes = [];
var paused = false;
var scoreboard;

function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new Pipe());
	scoreboard = new Scoreboard();
}

function draw() {
	background(0);
	bird.update();
	bird.show();
	scoreboard.update();
	speed *= 1.0001;	

	if (frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}
	if (bird.hitsWall()) {
		noLoop();
		paused = true;
	}
	for (let i = 0; i < pipes.length; i++) {
		if (bird.hitsPipe(pipes[i])) {
			noLoop();
			paused = true;
		}
		pipes[i].show();
		pipes[i].update();
		if (pipes[i].x < -pipes[i].w) {
			scoreboard.incrementScore();
			pipes.splice(i, 1);
		}
	}
}

function keyPressed() {
	if (paused) {
		restartGame();
		paused = false;
	}

	if (key == ' ') {
		bird.up();
	}
	
}

function restartGame() {
	pipes.length = 0;
	scoreboard.score = 0;
	bird.y = height / 2;
	loop();
}
