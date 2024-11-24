class Button {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
  }

  draw() {
    push();
    translate(this.x, this.y);
    stroke(128);
    strokeWeight(3);
    fill(200);
    rect(0, 0, this.width, this.height, this.height / 3);
    // text structure
    noStroke();
    fill(0);
    textSize(this.height / 4);
    textAlign(CENTER);
    text(this.text, 0, this.height / 3, this.width);

    pop();
  }
}

const rulesButton = new Button(10, 10, 200, 100, "Start Game");
const levelEasy =
const levelHard=
const color1=
const color2=
const color3=
const winButton=
const againButton=
