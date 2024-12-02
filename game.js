let missile = [];
let missileDestroy = 0;
let level = 1;
let jets = [];
let jetDestroyCount = 0;
let shootLine = {
  active: false,
  startX: 0,
  startY: 0,
};

function setup() {
  createCanvas(600, 900);
}
import Missile from "./missile.js";
import Jet from "./Jet.js";
import IronMan from "./oopIronMan.js";
import Button from "./oopbutton.js";
import CircleButtom from "./oopcircleButtom.js";
function preload() {
  startBackground = loadImage("1234.jpg");
  rulesBackground = loadImage("123.jpg");
  winBackground = loadImage("12345.jpg");
  lostBackground = loadImage("2131012.jpg");
  hulk = loadImage("Hulk.png");
  gameBackground = loadImage("game.jpg");
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
let ironManGame = new IronMan(170, 400, 0.8);
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
    mouseX > 430 &&
    mouseX < 530 &&
    mouseY > 620 &&
    mouseY < 720
  )
    state = "game";
  else if (
    state === "lost" &&
    mouseX > 215 &&
    mouseX < 415 &&
    mouseY > 800 &&
    mouseY < 875
  )
    state = "rules";
  else if (
    state === "win" &&
    mouseX > 230 &&
    mouseX < 380 &&
    mouseY > 800 &&
    mouseY < 875
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
  image(gameBackground, 0, 0, 600, 900);
  // win condition
  if (level === 1 && jetDestroyCount >= 5) {
    level = 2;
    jetDestroyCount = 0;
  } else if (level === 2 && jetDestroyCount >= 5 && missileDestroy >= 5) {
    state = "win";
    return;
  }

  if (keyIsDown(LEFT_ARROW)) {
    ironManGame.x = ironManGame.x - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    ironManGame.x = ironManGame.x + 5;
  }
  ironManGame.draw();

  // jet spawn
  if (frameCount % 60 === 0 && jets.length < 5) {
    jets.push(new Jet(random(width - 300), -50));
  }

  // missile spawn
  if (level === 2 && frameCount % 90 === 0 && missile.length < 3) {
    missile.push(new Missile(random(width - 40), -50));
  }

  for (let i = jets.length - 1; i >= 0; i--) {
    jets[i].update();
    jets[i].draw();

    let actualJetX = planeX + (jets[i].x - 100);
    let actualJetY = planeY + (jets[i].y - 100);

    if (
      actualJetX >= ironManGame.x - 40 &&
      actualJetX <= ironManGame.x + 40 &&
      actualJetY >= ironManGame.y - 40 &&
      actualJetY <= ironManGame.y + 40
    ) {
      state = "lost";
      return;
    }

    if (jets[i].y > height) {
      state = "lost";
      return;
    }
  }

  if (level === 2) {
    for (let i = missile.length - 1; i >= 0; i--) {
      missile[i].update();
      missile[i].draw();

      let actualMissileX = missile[i].x;
      let actualMissileY = missile[i].y;

      if (
        actualMissileX >= ironManGame.x - 30 &&
        actualMissileX <= ironManGame.x + 30 &&
        actualMissileY >= ironManGame.y - 30 &&
        actualMissileY <= ironManGame.y + 30
      ) {
        state = "lost";
        return;
      }

      if (missile[i].y > height) {
        state = "lost";
        return;
      }
    }
  }

  if (shootLine.active) {
    stroke(255, 0, 0);
    strokeWeight(2);
    line(shootLine.startX, shootLine.startY, mouseX, mouseY);
  }
}
function mousePressed() {
  shootLine.active = true;
  shootLine.startX = mouseX;
  shootLine.startY = mouseY;
}

function mouseReleased() {
  shootLine.active = false;

  for (let i = jets.length - 1; i >= 0; i--) {
    let actualJetX = planeX + (jets[i].x - 100);
    let actualJetY = planeY + (jets[i].y - 100);

    if (
      mouseX >= actualJetX - 50 &&
      mouseX <= actualJetX + 50 &&
      mouseY >= actualJetY - 25 &&
      mouseY <= actualJetY + 25
    ) {
      jets.splice(i, 1);
      jetDestroyCount++;

      if (level === 1 && jetDestroyCount >= 5) {
        level = 2;
        jetDestroyCount = 0;
      }
      break;
    }
  }
  if (level === 2) {
    for (let i = missile.length - 1; i >= 0; i--) {
      let actualMissileX = missile[i].x;
      let actualMissileY = missile[i].y;

      if (
        mouseX >= actualMissileX - 25 &&
        mouseX <= actualMissileX + 25 &&
        mouseY >= actualMissileY - 25 &&
        mouseY <= actualMissileY + 25
      ) {
        missile.splice(i, 1);
        missileDestroy++;

        if (jetDestroyCount >= 5 && missileDestroy >= 5) {
          state = "win";
        }
        break;
      }
    }
  }
}

function winScreen() {
  image(winBackground, 0, 0, 600, 900);
  playAgain.draw();
}

function lostScreen() {
  image(lostBackground, 0, 0, 600, 900);
  playAgainGameOver.draw();
}
