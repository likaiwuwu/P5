let values = [];

let i = 0;
let j = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	values = new Array(width);
	for (let i = 0; i < values.length; i++) {
		values[i] = random(height);
	}
}

function draw() {
	background(0);
	
	if (i < values.length) {
		for (let j = 0; j < values.length - i - 1; j++) {
			let a = values[j];
			let b = values[j + 1];
			if (a > b) {
				swap(values, j, j+1);
			}
		}
	} else {
		console.log("finished");
		noLoop();
	}
	i++;
	for (let i = 0; i < values.length; i++) {
		stroke(255);
		line(i, height, i, height - values[i]);
	}
}

function swap(array, a, b) {
	let temp = array[a];
	array[a] = array[b];
	array[b] = temp;
}
