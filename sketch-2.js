var color_count = 0;

function setup() {
	// createCanvas(windowWidth,windowHeight);
	// imageMode(CENTER);
	// frameRate(5);
}

function draw() {
	createCanvas(windowWidth,windowHeight);
	imageMode(CENTER);
	frameRate(5);
	var width = windowWidth;
	var height = windowHeight;

	// animate background color
	background(230+12 * sin(color_count*.12), 230+12 * sin(color_count*.1), 230+12 * sin(color_count*.14));
	if (color_count > 700) {
		color_count = 0;
	} else {
		color_count += 1;
	}

	// draw text
	// textSize(70);
	// fill(0);
	// //text('a.tbd', width*.1, height*.4);
	// // textFont('Arimo')
	// // text('a.tbd (A)', 100, displayHeight*.2)
	// textFont('Montserrat Alternates')
	// text('a.tbd', displayWidth*.1, displayHeight*.3)
	// // textFont('Biryani')
	// // text('a.tbd (B)', 100, displayHeight*.4)

	// // textFont('Nobile')
	// // text('a.tbd (N)', 100, displayHeight*.5)

	// textSize(18);
	// textFont('Lora')
	// text('hi at a-tbd dot com', displayWidth*.1, displayHeight*.7)
	// text('-', displayWidth*.25, displayHeight*.7)
	// text('hi at a-tbd dot com', displayWidth*.3, displayHeight*.7)

	
}
