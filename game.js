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
let bossX = 300;
let bossY = 100;
let clickOnBoss = 0;
let time = 0;
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
const startButtomRulesScreen = new CircleButtom(480, 650, 100, 100, "start");
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
let ironManGame = new IronMan(400, 850, 0.8);
// we use AI to finf a solution for reset the game in different states : https://chatgpt.com/share/67508cdb-a400-8004-97f1-40834a22d34c
function resetGame() {
  missile = [];
  missileDestroy = 0;
  level = 1;
  jets = [];
  jetDestroyCount = 0;
  shootLine = {
    active: false,
    startX: 0,
    startY: 0,
  };
  clickOnBoss = 0;
  time = 0;
  bossX = 300;
}
function mouseClicked() {
  if (
    state === "start" &&
    mouseX > 238 &&
    mouseX < 383 &&
    mouseY > 380 &&
    mouseY < 450
  ) {
    state = "rules";
  } else if (
    state === "rules" &&
    mouseX > 430 &&
    mouseX < 530 &&
    mouseY > 620 &&
    mouseY < 720
  ) {
    resetGame();
    state = "game";
  } else if (
    state === "lost" &&
    mouseX > 215 &&
    mouseX < 415 &&
    mouseY > 800 &&
    mouseY < 875
  ) {
    resetGame();
    state = "rules";
  } else if (
    state === "win" &&
    mouseX > 230 &&
    mouseX < 380 &&
    mouseY > 800 &&
    mouseY < 875
  ) {
    resetGame();
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
}
function rulesScreen() {
  image(rulesBackground, 0, 0, 600, 900);
  push();
  fill(255, 0, 0);
  rect(380, 300, 200, 350, 18);
  startButtomRulesScreen.draw();
  pop();
  push();
  fill(0, 0, 0);
  text("there are three levels:", 400, 320);
  text("in level 1 you have to kill 5 jets", 400, 340);
  text("then you will go to level two", 400, 360);
  text("in level 2 you should shot 5", 400, 380);
  text("bombs and every jets", 400, 400);
  text("then you will go to level 3", 400, 420);
  text("in level 3 you should shot Boss", 400, 440);
  text("three times in 5 secondes and ", 400, 460);
  text("every jets are coming too", 400, 480);
  text("tips: jets in level 2 and 3 are for ", 400, 500);
  text("distracting but you should shot  ", 400, 520);
  text("jets also to win ", 400, 540);
  text("don't forget not to hit by enemies", 400, 560);
  text("control ironman with left and right ", 400, 580);
  text("arrow keys ", 400, 600);

  pop();
}

function gameScreen() {
  image(gameBackground, 0, 0, 600, 900);
  // win condition
  if (level === 1 && jetDestroyCount >= 5) {
    level = 2;
    jetDestroyCount = 0;
  } else if (level === 2 && jetDestroyCount >= 5 && missileDestroy >= 5) {
    level = 3;
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
      actualJetX >= ironManGame.x - 260 &&
      actualJetX <= ironManGame.x + 260 &&
      actualJetY >= ironManGame.y - 260 &&
      actualJetY <= ironManGame.y + 260
    ) {
      state = "lost";
      return;
    }

    if (jets[i].y > height) {
      state = "lost";
      return;
    }
  }
  // missle spawn
  if (level === 2) {
    for (let i = missile.length - 1; i >= 0; i--) {
      missile[i].update();
      missile[i].draw();

      let actualMissileX = missile[i].x;
      let actualMissileY = missile[i].y;

      if (
        actualMissileX >= ironManGame.x - 260 &&
        actualMissileX <= ironManGame.x + 260 &&
        actualMissileY >= ironManGame.y - 260 &&
        actualMissileY <= ironManGame.y + 260
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
  if (level === 3) {
    bossX += 2;
    if (bossX > 500) {
      bossX = 100;
    }
    image(hulk, bossX, bossY, 150, 150);
    fill(255);
    textSize(30);
    text("Hits needed" + (3 - clickOnBoss), 20, 50);
  }
  if (level === 3 && clickOnBoss > 0) {
    if (millis() - time > 5000) {
      state = "lost";
      clickOnBoss = 0;
    }
  }

  if (shootLine.active) {
    stroke(255, 0, 0);
    strokeWeight(3);
    line(shootLine.startX, shootLine.startY, shootLine.endX, shootLine.endY);
    shootLine.active = false;
  }
}
function mousePressed() {
  shootLine.active = true;
  shootLine.startX = ironManGame.x - 80;
  shootLine.startY = ironManGame.y - 170;
  shootLine.endX = mouseX;
  shootLine.endY = mouseY;
  if (level === 3) {
    if (
      mouseX > bossX &&
      mouseX < bossX + 150 &&
      mouseY > bossY &&
      mouseY < bossY + 150
    ) {
      if (clickOnBoss === 0) {
        time = millis();
      }
      if (millis() - time > 5000) {
        state = "lost";
        clickOnBoss = 0;
        return;
      }
      clickOnBoss++;
      if (clickOnBoss === 3) {
        if (millis() - time <= 5000) {
          state = "win";
        } else {
          state = "lost";
        }
        clickOnBoss = 0;
      }
    }
  }
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
          level = 3;
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
