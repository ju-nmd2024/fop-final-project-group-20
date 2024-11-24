function setup() {
  createCanvas(600, 900);
}
let state = "start";
function preload() {
  startBackground = loadImage("1234.jpg");
  rulesBackground = loadImage(".jpg");
  menueBackground = loadImage(".jpg");
  winBackground = loadImage(".jpg");
  lostBackground = loadImage(".jpg");
}
function draw() {
  if (state === "start") {
    startScreen();
  }
}
function startScreen() {
  image(startBackground, 0, 0, 600, 900);
}
