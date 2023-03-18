var letterSpace = 40;
var yCoordinate = 10;
var speed = 0.005;
let txt = "Objects & Spaces";

function preload() {
  font = loadFont('fonts/NeueMontreal-Medium.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#000');
    push(); 
    
    translate(width/2, height/2);
    translate(-(txt.length-1) * letterSpace/2, 0);

    textFont(font);
    noStroke();
    fill('#ffffff');
    textSize(38);

    for (var i = 0; i < txt.length; i++){
        var yMotion = tan(frameCount * speed - i) * yCoordinate;
        /* ellipse(i * horizontalSpacing, yMotion, 20, 20); */
        text(txt[i], i * letterSpace, yMotion);
    }
    pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}