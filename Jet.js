    let x = 100;
    let y = 100;

    let planeX = 300;
    let planeY = 200;

function setup () {
    createCanvas(600, 600);
    background(135, 206, 235); 
    drawJet();
}

function drawJet() {

    // jet 
    push();
    translate(planeX, planeY);

    // // shadow 
    // fill(0, 0, 0, 30);
    // ellipse(x - 90, y - 60, 120, 20);

    //body 
    fill(70, 70, 80);
    noStroke();
    ellipse(x - 100, y - 100, 100, 25);

    // nose 
    fill(0, 0, 175);
    noStroke();
    triangle(x - 60, y - 100, x - 35, y - 110, x - 35, y -90);

    //wings
    fill(50, 50, 50);
    stroke(30);
    strokeWeight(2);

    beginShape();
    vertex(x - 110, y - 100);
    vertex(x - 130, y - 145);
    vertex(x - 90, y - 135);
    vertex(x - 70, y - 100);
    endShape(CLOSE);

    beginShape();
    vertex(x - 110, y - 100);
    vertex(x - 130, y - 55);
    vertex(x - 90, y - 65);
    vertex(x - 70, y - 100);
    endShape(CLOSE);

    //tail
    fill(60, 60, 70);
    beginShape();
    vertex(x - 135, y - 100);
    vertex(x - 150, y - 125);
    vertex(x - 140, y - 125);
    vertex(x - 120, y - 100);
    endShape(CLOSE);

    beginShape();
    vertex(x - 135, y - 100);
    vertex(x - 150, y - 75);
    vertex(x - 140, y - 75);
    vertex(x - 120, y - 100);
    endShape(CLOSE);

    //cockpit
    fill(100, 200, 255);
    noStroke();
    ellipse(x - 85, y - 100, 25, 12);

    //highlight
    fill(255, 255, 255, 150);
    noStroke();
    arc(x - 85, y - 102, 15, 5, PI, TWO_PI);

    //engin
    fill(40);
    rect(x -145, y - 105, 5 , 10);
    stroke(30);
    strokeWeight(1);
    line(x - 120, y - 102, x - 140, y - 102);
    line(x - 120, y - 98, x - 140, y - 98);
    line(x - 80, y - 105, x - 60, y - 105);
    line(x - 80, y - 95, x - 60, y - 95);

    pop();
}
 