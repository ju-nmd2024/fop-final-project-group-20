
let planeX = 300;
let planeY = 200;

export default class Jet{
  constructor(x, y){
    this.x = x; 
    this.y = y;
  }
  draw() {
    // jet
    push();
    translate(planeX, planeY);
  
    //bodthis.y
    fill(70, 70, 80);
    noStroke();
    ellipse(this.x - 100, this.y - 100, 100, 25);
  
    // nose
    fill(0, 0, 175);
    noStroke();
    triangle(this.x - 60, this.y - 100, this.x - 35, this.y - 110, this.x - 35, this.y - 90);
  
    //wings
    fill(50, 50, 50);
    stroke(30);
    strokeWeight(2);
  
    beginShape();
    vertex(this.x - 110, this.y - 100);
    vertex(this.x - 130, this.y - 145);
    vertex(this.x - 90, this.y - 135);
    vertex(this.x - 70, this.y - 100);
    endShape(CLOSE);
  
    beginShape();
    vertex(this.x - 110, this.y - 100);
    vertex(this.x - 130, this.y - 55);
    vertex(this.x - 90, this.y - 65);
    vertex(this.x - 70, this.y - 100);
    endShape(CLOSE);
  
    //tail
    fill(60, 60, 70);
    beginShape();
    vertex(this.x - 135, this.y - 100);
    vertex(this.x - 150, this.y - 125);
    vertex(this.x - 140, this.y - 125);
    vertex(this.x - 120, this.y - 100);
    endShape(CLOSE);
  
    beginShape();
    vertex(this.x - 135, this.y - 100);
    vertex(this.x - 150, this.y - 75);
    vertex(this.x - 140, this.y - 75);
    vertex(this.x - 120, this.y - 100);
    endShape(CLOSE);
  
    //cockpit
    fill(100, 200, 255);
    noStroke();
    ellipse(this.x - 85, this.y - 100, 25, 12);
  
    //highlight
    fill(255, 255, 255, 150);
    noStroke();
    arc(this.x - 85, this.y - 102, 15, 5, PI, TWO_PI);
  
    //engin
    fill(40);
    rect(this.x - 145, this.y - 105, 5, 10);
    stroke(30);
    strokeWeight(1);
    line(this.x - 120, this.y - 102, this.x - 140, this.y - 102);
    line(this.x - 120, this.y - 98, this.x - 140, this.y - 98);
    line(this.x - 80, this.y - 105, this.x - 60, this.y - 105);
    line(this.x - 80, this.y - 95, this.x - 60, this.y - 95);
  
    pop();
}
}

function setup() {
  createCanvas(600, 600);
  background(135, 206, 235);
}
function draw() {
  const jet = new Jet(100, 100);
  jet.draw();
}
 