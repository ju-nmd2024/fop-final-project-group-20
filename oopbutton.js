export default class Button {
  constructor(x, y, width, height, text, fill1, fill2, fill3) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.fill1 = fill1;
    this.fill2 = fill2;
    this.fill3 = fill3;
  }

  draw() {
    push();
    translate(this.x, this.y);
    stroke(0);
    strokeWeight(5);
    fill(this.fill1, this.fill2, this.fill3);
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
