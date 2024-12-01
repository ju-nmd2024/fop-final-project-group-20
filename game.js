let jets = [];
let jetCount = 0;
const maxJets = 10;
let shootLine = {
  active: false,
  startX: 0,
  startY: 0,
};
function setup() {
  createCanvas(600, 900);
}
import Jet from "./Jet.js";
import IronMan from "./oopIronMan.js";
import Button from "./oopbutton.js";
import CircleButtom from "./oopcircleButtom.js";
function preload() {
  startBackground = loadImage("1234.jpg");
  rulesBackground = loadImage("123.jpg");
  winBackground = loadImage("12345.jpg");
  lostBackground = loadImage("2131012.jpg");
  hulk = loadImage("Hulk.jpg");
}

let state = "start";

const rulesButton = new Button(235, 380, 150, 75, "rules");
const startButtomStartScreen = new CircleButtom(300, 770, 100, 100, "start");
const startButtomRulesScreen = new CircleButtom(480, 650, 100, 100, "start");
const suitColorRed = new Button(50, 380, 150, 75, "Red", 255, 0, 0);
const suitColorBlue = new Button(230, 380, 150, 75, "Blue", 0, 0, 255);
const suitColorGray = new Button(420, 380, 150, 75, "Gray", 200, 200, 200);
const playAgain = new Button(230, 800, 150, 75, "play again", 255, 0, 255);
const playAgainGameOver = new Button(
  215,
  800,
  200,
  75,
  "play again",
  0,
  255,
  0
);
let ironMan = new IronMan(150, 100, 1);
let ironManGame = new IronMan(150, 100, 0.8);
let jetGame = new Jet(100, 100);
function bossFighter(x, y, s) {
  image(hulk, x, y, 100 * s, 100 * s);
}
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
  startButtomStartScreen.draw();
}
function rulesScreen() {
  image(rulesBackground, 0, 0, 600, 900);
  fill(255, 0, 0);
  rect(380, 350, 200, 300, 18);
  startButtomRulesScreen.draw();
}

function menueScreen() {
  background(0);
  suitColorRed.draw();
  suitColorBlue.draw();
  suitColorGray.draw();

  ironMan.update();
  ironMan.draw();
  fill(255, 0, 255);
  rect(60, 500, 500, 100, 20);

  startButtomStartScreen.draw();
}

function gameScreen() {
  background(255);

  if (keyIsDown(LEFT_ARROW)) {
    ironManGame.x = ironManGame.x - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    ironManGame.x = ironManGame.x + 5;
  }
  ironManGame.draw();

  if (frameCount % 60 === 0 && jetCount < maxJets) {
    jets.push(new Jet(random(width - 40), -50));
    jetCount++;
  }
  // shoting line
  if (shootLine.active) {
    stroke(255, 0, 0);
    strokeWeight(2);
    line(shootLine.startX, shootLine.startY, mouseX, mouseY);
  }
  for (let i = jets.length - 1; i >= 0; i--) {
    jets[i].update();
    jets[i].draw();
    // remove jets
    if (jets[i].y > height) {
      jets.splice(i, 1);
      jetCount--;
    }
    if (shootLine.active) {
      let d = dist(mouseX, mouseY, jet[i].x + 20, jet[i].y + 20);
      if (d < 25) {
        jets.splice(i, 1);
        jetCount--;
      }
    }
  }
}
function mousePressed() {
  shootLine.active = true;
  shootLine.startX = mouseX;
  shootLine.startY = mouseY;
}

function mouseReleased() {
  shootLine.active = false;
}

function winScreen() {
  image(winBackground, 0, 0, 600, 900);
  playAgain.draw();
}

function lostScreen() {
  image(lostBackground, 0, 0, 600, 900);
  playAgainGameOver.draw();
}
