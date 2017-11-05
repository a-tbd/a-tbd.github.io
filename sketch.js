var right_vertex = -10;
var background_color = '#fafafa';
var triangle_color = '#faf1de';
var img_white;
var img_mask;

function preload() {
	//img_white = loadImage('assets/atbd_img.png');
	//img_mask = loadImage('assets/atbd_mask.png');
}

function setup() {
	createCanvas(displayWidth,displayHeight);
	//img_white.mask(img_mask);
	imageMode(CENTER);
}

function draw() {
	var width = displayWidth;
	var height = displayHeight;

	// get text info variables
	textFont("Righteous");
	textSize(90);
	//var text_width = textWidth('a.tbd')

	// animate triangle background
	background(background_color);
	fill(triangle_color);
	stroke(triangle_color);

	if (right_vertex > width*1.25) {
		if (triangle_color == '#faf1de') {
			background_color = '#faf1de';

		} else {
			background_color = '#fafafa';
		}
	}

	right_vertex += 5;

	if (right_vertex > width*1.25 + 10) {
		if (background_color == '#faf1de') {
			triangle_color = '#fafafa';
		} else {
			triangle_color = '#faf1de';
		}
		right_vertex = 0;
	}

	beginShape(TRIANGLES);
	vertex(right_vertex, height/2);
	vertex(0, height/2+right_vertex);
	vertex(0, height/2-right_vertex);
	endShape(CLOSE);

	fill(0);
	text('a.tbd', width*.1, height*.4);
	
	// draw text
	// if (right_vertex > text_width){
	// 	fill(background_color);
	// 	stroke(background_color);
	// 	text('a.tbd', width*.1, height/2);
	// } else {
	// 	fill(triangle_color);
	// 	stroke(triangle_color);
	// 	text('a.tbd', width*.1, height/2);
	// }
	//image(img_white, 100, 300);
	//delay(1000);

}

function triangle(color) {

}