// code by finn arundel
// code~words rmit
// thanks to Karen Ann Donnachie and Daniel Shiffman for the  k n o w l e d g e

let node = [];
let index = 0;
let words = ['Enter', 'your', 'own', 'text', 'here.']

let helvetica;

let time;
let spaceSlider;
let timeSlider;

function preload () {
  helvetica = loadFont('data/helveticaneue.otf');
}

function setup() {
  createCanvas (windowWidth, windowHeight, WEBGL);
  // createEasyCam( { 
  // distance: 
  //   700
  // } 
  // );
  // document.oncontextmenu = function () { 
  //   return false;
  // };


  for ( let i = 0; i < words.length; i++) {
    let size = height/4;
    wdt = int(random(-size, size ));
    hgt = int (random (-size, size ));
    z = int (random (-size, size ));
    node[i] = new NodePoint (wdt, hgt, z, int(document.getElementById("time-slider").value));
    
  }

}

function draw() {
  background (document.getElementById("backgroundColor").value);

  let spin = radians(frameCount) *0.1;
  translate (windowWidth/25,0);
  rotateY (-spin);

  if (mouseIsPressed === true) {
    cursor('NONE');
  } else {
    cursor('grab');
  }
 
  node[0].connect();

  for (let i = 0; i < words.length; i++) {  
    if (frameCount > node[i].time * i + node[i].time) {
      node[i].show(i); // uses draw  counter as arguement for class
    }
  }
}

function resetSketch () {
  node = [];
  words =  document.getElementById("textInput").value.split(" ");
  words[0].toUpperCase();
 

  frameCount = 0;

  for ( let i = 0; i < words.length; i++) {
    let size = height/4;
    wdt = int(random(-size, size));
    hgt = int(random (-size, size));
    z = int(random (-size, size));
    node[i] = new NodePoint (wdt, hgt, z, int(document.getElementById("time-slider").value));
  }
}

function spaceSliderChange() {
  for ( let i = 0; i < words.length; i++) {  
    node[i].scale(); //this will call the scale() part of your class, which is where you apply the multiplier (once)
  }
}
