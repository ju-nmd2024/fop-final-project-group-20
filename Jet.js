let planeX = 300;
let planeY = 200;

 export default class Jet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 3;
  }
  update() {
    this.y += this.speed;
  }
  draw() {
    // jet
    push();
    translate(planeX, planeY);


    //bodthis.y
    fill(70, 70, 80);
    noStroke();
    ellipse(this.x - 100, this.y - 100, 20, 100);

    // nose
    fill(0, 0, 175);
    noStroke();
    triangle(
      this.x - 100,
      this.y - 60,
      this.x - 110,
      this.y - 35,
      this.x - 90,
      this.y - 35
    );

    //wings
    fill(50, 50, 50);
    stroke(30);
    strokeWeight(2);

    beginShape();
    vertex(this.x - 100, this.y - 110);
    vertex(this.x - 145, this.y - 130);
    vertex(this.x - 135, this.y - 90);
    vertex(this.x - 100, this.y - 70);
    endShape(CLOSE);

    beginShape();
    vertex(this.x - 100, this.y - 110);
    vertex(this.x - 55, this.y - 130);
    vertex(this.x - 65, this.y - 90);
    vertex(this.x - 100, this.y - 70);
    endShape(CLOSE);

    //tail
    fill(60, 60, 70);
    beginShape();
    vertex(this.x - 100, this.y - 135);
    vertex(this.x - 125, this.y - 150);
    vertex(this.x - 125, this.y - 140);
    vertex(this.x - 100, this.y - 120);
    endShape(CLOSE);

    beginShape();
    vertex(this.x - 100, this.y - 135);
    vertex(this.x - 75, this.y - 150);
    vertex(this.x - 75, this.y - 140);
    vertex(this.x - 100, this.y - 120);
    endShape(CLOSE);

    //cockpit
    fill(100, 200, 255);
    noStroke();
    ellipse(this.x - 100, this.y - 85, 25, 12);

    //highlight
    fill(255, 255, 255, 150);
    noStroke();
    arc(this.x - 102, this.y - 85, 15, 5, PI, TWO_PI);

    //engin
    fill(40);
    rect(this.x - 105, this.y - 145, 5, 10);
    stroke(30);
    strokeWeight(1);
    line(this.x - 102, this.y - 120, this.x - 102, this.y - 140);
    line(this.x - 98, this.y - 120, this.x - 98, this.y - 140);
    line(this.x - 105, this.y - 80, this.x - 105, this.y - 60);
    line(this.x - 95, this.y - 80, this.x - 95, this.y - 60);

    pop();
  }
}
// jet = new Jet(100,100);
// function draw (){
// jet.draw();
// }