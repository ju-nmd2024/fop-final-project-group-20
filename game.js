function setup() {
  createCanvas(600, 900);
}

import Button from "./oopbutton.js";
import CircleButtom from "./oopcircleButtom.js";
function preload() {
  startBackground = loadImage("1234.jpg");
  rulesBackground = loadImage("123.jpg");
  //menueBackground = loadImage(".jpg");
  //winBackground = loadImage(".jpg");
  //lostBackground = loadImage(".jpg");
}

let state = "start";

const rulesButton = new Button(235, 380, 150, 75, "rules");
const startButtom = new CircleButtom(300, 770, 100, 100, "start");

function mouseClicked() {
  if (
    state === "start" &&
    mouseX > 238 &&
    mouseX < 383 &&
    mouseY > 380 &&
    mouseY < 450
  )
    state = "rules";
  else if (
    state === "rules" &&
    mouseX > 185 &&
    mouseX < 285 &&
    mouseY > 300 &&
    mouseY < 350
  )
    state = "game";
  else if (
    state === "lost" &&
    mouseX > 350 &&
    mouseX < 450 &&
    mouseY > 300 &&
    mouseY < 350
  )
    state = "game";
  else if (
    state === "won" &&
    mouseX > 245 &&
    mouseX < 377 &&
    mouseY > 300 &&
    mouseY < 364
  ) {
    state = "game";
  }
}
function draw() {
  if (state === "start") {
    startScreen();
  }
  if (state === "rules") {
    rulesScreen();
  }
  if (state === "menue") {
    menueScreen();
  }
  if (state === "game") {
    gameScreen();
  }
  if (state === "win") {
    winScreen();
  }
  if (state === "lost") {
    lostScreen();
  }
}

function startScreen() {
  image(startBackground, 0, 0, 600, 900);
  rulesButton.draw();
  startButtom.draw();
}
function rulesScreen() {
  image(rulesBackground, 0, 0, 600, 900);
}

function menueScreen() {
  background(250);
}

function gameScreen() {}

function winScreen() {}

function lostScreen() {}
