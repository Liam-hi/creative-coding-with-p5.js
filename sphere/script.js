let img, font;

function preload() {
  font = loadFont('NeueMontreal-Medium.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = createGraphics(520,520, WEBGL);
  img.noStroke();
}

function draw() {
  ambientLight(100, 100, 100);
  pointLight(400, 400, 400, -400, -800, 800);
  pointLight(400, 400, 400, 400, -800, 800);
  background(0);
  img.background(0);
  img.fill(255);
  img.textSize(18);
  img.noStroke();
  img.textFont(font);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250, 150);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250, 125);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250, 100);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250, 75);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250, 50);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250, 25);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250, 0);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250, -75);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250,-50);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250, -25);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250,-100);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250,-125);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250,-150);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250,-175);
  img.text("Objects & Spaces Objects & Spaces Objects & Spaces Spaces Objects & Spaces", -250,-200);

  texture(img);
  rotateX(-0.8);
  push();
  translate(0,0);
  rotateZ(-0.5);
  rotateY(9-frameCount*0.05);
  sphere(200, 50, 50);
  pop();
}