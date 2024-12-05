export default class IronMan {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.time = 0;
    // 200, 0, 0 = color(200, 0, 0);
    this.goldColor = color(255, 200, 0);
    this.blueColor = color(0, 200, 255);
    this.size = s;
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
    fill(200, 0, 0);
    rect(
      this.x - 40 * this.size,
      this.y - 20 * this.size,
      80 * this.size,
      100 * this.size,
      5 * this.size
    );

    // gold part
    fill(this.goldColor);
    rect(
      this.x - 30 * this.size,
      this.y + 20 * this.size,
      60 * this.size,
      10 * this.size
    );
  }

  drawHead() {
    fill(200, 0, 0);
    ellipse(this.x, this.y - 50 * this.size, 80 * this.size, 90 * this.size);

    // face
    fill(this.goldColor);
    rect(
      this.x - 30 * this.size,
      this.y - 70 * this.size,
      60 * this.size,
      40 * this.size,
      10 * this.size
    );

    //eyes
    let eyeGlow = this.time;
    fill(this.blueColor, eyeGlow);
    ellipse(
      this.x - 15 * this.size,
      this.y - 55 * this.size,
      20 * this.size,
      10 * this.size
    );
    ellipse(
      this.x + 15 * this.size,
      this.y - 55 * this.size,
      20 * this.size,
      10 * this.size
    );
  }
  drawArm() {
    fill(200, 0, 0);
    rect(
      this.x - 60 * this.size,
      this.y - 20 * this.size,
      20 * this.size,
      80 * this.size,
      5 * this.size
    );
    rect(
      this.x + 40 * this.size,
      this.y - 20 * this.size,
      20 * this.size,
      80 * this.size,
      5 * this.size
    );
  }

  drawLeg() {
    fill(200, 0, 0);
    rect(
      this.x - 30 * this.size,
      this.y + 80 * this.size,
      25 * this.size,
      70 * this.size,
      5 * this.size
    );
    rect(
      this.x + 5 * this.size,
      this.y + 80 * this.size,
      25 * this.size,
      70 * this.size,
      5 * this.size
    );
  }
  drawJetpack() {
    if (mouseIsPressed) {
      fill(this.blueColor, 100);
      ellipse(
        this.x - 20 * this.size,
        this.y + 150 * this.size,
        15 * this.size,
        30 * this.size
      );
      ellipse(
        this.x + 20 * this.size,
        this.y + 150 * this.size,
        15 * this.size,
        30 * this.size
      );
    }
  }
  draw() {
    push();
    //translate(this.x, this.y);
    scale(this.size);
    this.drawJetpack();
    this.drawLeg();
    this.drawBody();
    this.drawReactor();
    this.drawArm();
    this.drawHead();
    pop();
  }
}
