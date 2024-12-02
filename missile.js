export default class Missile{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.speed = 8;
        this.width = 15;
        this.height = 50;
    }

    update () {
        this.y += this.speed;
    }

    draw() {
        // body
        noStroke();
        fill(70, 70, 80);
        beginShape();
        vertex(this.x, this.y);
        vertex(this.x - this.width/2, this.y + this.height/3);
        vertex(this.x - this.width/4, this.y + this.height);
        vertex(this.x, this.y + this.height/4);
        vertex(this.x + this.width/4, this.y + this.height);
        vertex(this.x + this.width/2, this.y + this.height/3);
        endShape(CLOSE);

        // tip
        fill(220, 220, 220);
        triangle(this.x, this.y, 
            this.x - this.width/4, this.y + this.height/3, 
            this.x + this.width/4, this.y + this.height/3);

        //tail 
        fill(90, 90, 100);
        triangle(this.x - this.width/2, this.y + this.height/3,
            this.x - this.width, this.y + this.height/4,
            this.x - this.width/4, this.y + this.height/2);

            triangle(this.x + this.width/2, this.y + this.height/3,
                this.x + this.width, this.y + this.height/4,
                this.x + this.width/4, this.y + this.height/2);
    }
}
