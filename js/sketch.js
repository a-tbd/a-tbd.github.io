var font;
var LOW = 180.;
var HIGH = LOW+20.;
var count = LOW;
var increase = true;
var nav_size = 26;
var padding_top;

var holder_width = 500;
var holder_height = 250;

var a = 'a';
var dot = '.';
var t = 't';
var b = 'b';
var d = 'd';

var a_wid;
var dot_wid;
var t_wid;
var b_wid;
var d_wid;

var color_count = 0;

function setup() {
  var canvas = createCanvas(holder_width, holder_height);
  setUpWindow();

  console.log(LOW);
  console.log(HIGH);
  frameRate(5);
  
  textFont("Averia Sans Libre");
  textSize(HIGH);
  a_wid = textWidth(a);
  dot_wid = textWidth(dot);
  t_wid = textWidth(t);
  b_wid = textWidth(b);
  d_wid = textWidth(d);
  canvas.parent('sketch-holder');
}

function draw() {
  clear()
  // responsive canvas environment
  var win_inner_width = HIGH*1.6;
  var padding_left = (holder_width - win_inner_width) / 2;
  
  // draw background gradient
  //background(200+12 * sin(color_count*.12), 200+12 * sin(color_count*.1), 200+12 * sin(color_count*.14));
  //background(##);
  // set text color and alignment
  fill(255);
  textAlign(CENTER);
  
  // easing function for text size
  var ease_val;
  var t_size;
  var ease = map(count,LOW,HIGH,0,1);
  
  if (ease < .5) {
    ease_val = 2*ease*ease;
  } else {
    ease_val = -1+(4-2*ease)*ease;
  }
  
  // set text size
  if (increase == true) {
    t_size = map(ease_val,0,1,LOW,HIGH);
  } else {
    t_size = map(ease_val,1,0,HIGH,LOW);
  }
  textSize(t_size);
  
  // write a.tbd to page
  text(a, padding_left, padding_top);
  text(dot, padding_left+HIGH*.4, padding_top);
  text("t", padding_left+HIGH*.65, padding_top);
  text("b", padding_left+HIGH*1.1, padding_top);
  text("d", padding_left+HIGH*1.6, padding_top);
  
  // write about and work (fixed size)
  textSize(nav_size);
  //text("about", padding_left+HIGH*.4, padding_top*1.3);
  //text("work", padding_left+HIGH*1.3, padding_top*1.3);
  
  // increase text size counter
  if (increase == true) {
    count += 1;
  } else {
    count -= 1;
  }
  
  // reset counter if over high or under low
  if (count > HIGH) {
    increase = false;
  } else if (count < LOW) {
      increase = true;
  }
  
  // increase color counter for background gradient
  if (color_count > 700) {
    color_count = 0;
  } else {
    color_count += 1;
  }
}

function setUpWindow() {
  if (windowWidth < 600) {
    LOW = 80.;
    HIGH = 100.;
    count = HIGH;
    nav_size = 18;
    padding_top = holder_height-10; 
  } else {
    LOW = 180.;
    HIGH = 200.;
    count = LOW;
    nav_size = 26;
    padding_top = holder_height-10; 
  }
}
// responsive canvas environment media queries
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setUpWindow();
}