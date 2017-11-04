function setup() {
	createCanvas(displayWidth,displayHeight);
}

function draw() {
	// ellipse(50,50,80,80);
	fill('#ED225D');
	textFont("Righteous");
	textSize(32);
	text('hi there', mouseX, mouseY, 200, 200);
}