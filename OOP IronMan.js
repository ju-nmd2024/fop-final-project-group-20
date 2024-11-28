export default class IronMan {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.time = 0;
    this.redColor = color(200, 0, 0);
    this.goldColor = color(255, 200, 0);
    this.blueColor = color(0, 200, 255);
  }
  update() {
    this.time += 0.05;
    this.hoverY = sin(this.time) * 3;
  }
  drawReactor() {
    let reactorSize = 25 + sin(this.time * 2) * 3;
    fill(this.blueColor, 100);
    ellipse(this.x, this.y, reactorSize + 10, reactorSize + 10);

    // inside rector
    fill(this.blueColor);
    ellipse(this.x, this.y, reactorSize, reactorSize);
  }

  drawBody() {
    fill(this.redColor);
    rect(this.x - 40, this.y - 20, 80, 100, 5);

    // gold part
    fill(this.goldColor);
    rect(this.x - 30, this.y + 20, 60, 10);
  }

  drawHead() {
    fill(this.redColor);
    ellipse(this.x, this.y - 50, 80, 90);

    // face
    fill(this.goldColor);
    rect(this.x - 30, this.y - 70, 60, 40, 10);

    //eyes
    let eyeGlow = this.time;
    fill(this.blueColor, eyeGlow);
    ellipse(this.x - 15, this.y - 55, 20, 10);
    ellipse(this.x + 15, this.y - 55, 20, 10);
  }
  drawArm() {
    fill(this.redColor);
    rect(this.x - 60, this.y - 20, 20, 80, 5);
    rect(this.x + 40, this.y - 20, 20, 80, 5);
  }

  drawLeg() {
    fill(this.redColor);
    rect(this.x - 30, this.y + 80, 25, 70, 5);
    rect(this.x + 5, this.y + 80, 25, 70, 5);
  }
  drawJetpack() {
    if (mouseIsPressed) {
      fill(this.blueColor, 100);
      ellipse(this.x - 20, this.y + 150, 15, 30);
      ellipse(this.x + 20, this.y + 150, 15, 30);
    }
  }
  draw() {
    push();
    translate(this.x, this.y);
    this.drawJetpack();
    this.drawLeg();
    this.drawBody();
    this.drawReactor();
    this.drawArm();
    this.drawHead();

    pop();
  }
}
