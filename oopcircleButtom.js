export default class CircleButtom {
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
    stroke(0);
    strokeWeight(5);
    fill(200, 0, 255);
    ellipse(0, 0, this.width, this.height);
    // text structure
    noStroke();
    fill(0);
    textSize(this.height / 4);
    textAlign(CENTER);
    text(this.text, 0, 0);

    pop();
  }
}
