//guide:
/*  

press and hold mouse to draw
 
if u use white as a color it acts as a eraser

funnyboy_roks is credited with giving me the idea to use a color picker
 
 the small box on the top corner is a color picker

c clears and resets

use on computers and touchscreen computers 

s saves your canvas as a png

= increases size

- decreases size 


based on : https://medium.com/@kellylougheed/rainbow-paintbrush-in-p5-js-e452d5540b25

first version made in 1 day (more like 3 hrs but same thing)

link to the  older version with rainbow mode and some other removed features

https://editor.p5js.org/Anerd/sketches/DzhrN9o9P


Thanks for using!


MORE COMING MAYBE
*/

let diameter = 25
var sat;
var r;
var rainbow = true;
var light;
let colorPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  r = 0;
  sat = 200;
  light = 200;
  let d = day();
  let y = year();
  let m = month();
  let h = hour();
  let M = minute();
  let s = second();
  colorPicker = createColorPicker('#DC4056'); //wow p5js color
  colorPicker.position(29, 0);
  text('Finished loading.', 100, 12);
  text('The date is ' + m + "/" + d + "/" + y + "  Site opened on: " + h + ":" + M + ":" + s, 420, 12);

  text(diameter, 12, 12)
}
function draw() {

  setcolor(colorPicker.color());




  if (diameter < 1) {
    diameter = 1
  }

  if (diameter > 150) {
    diameter = 150
  }
  if (keyIsDown(38)) {
    r++
  }
  if (keyIsDown(40)) {
    r = r - 1
  }



}


function mouseDragged() {
  if (rainbow) {
    if (r > 360) {
      r = 0;
    } else {
      r++;
    }
  }

  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(diameter);
  noStroke();
  stroke(r, sat, light);
  line(pmouseX, pmouseY, mouseX, mouseY)
}

function setcolor(ihue, isat, ilight, irainbow) {

  r = ihue;
  sat = isat;
  light = ilight;
  rainbow = irainbow;
}




function keyPressed() {


  // c = clear
  if (keyCode == 67) {
    createCanvas(windowWidth, windowHeight);
    background(255);
    r = 0;
    sat = 200;
    light = 200;
    let d = day();
    let y = year();
    let m = month();
    let h = hour();
    let M = minute();
    let s = second();
    light = 200;
    sat = 200;
    clear();
    background("white");
    rainbow = true
    text('You reset the canvas.', 120, 12);
    text('The date is ' + m + "/" + d + "/" + y + "  TIME OF LOADING: " + h + ":" + M + ":" + s, 420, 12);
    text(diameter, 12, 12)
  }
  if (keyCode == 83) {
    saveCanvas()
    text('You took a screenshot of your drawing.', 260, 12);
  }
      if (keyCode==107 || keyCode==187) {
    diameter += 1;

  }

  if (keyCode==109 || keyCode==189) {
    diameter -= 1;

  }
}
