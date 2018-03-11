class TemplateSquare {
    constructor(r,c,xPos,yPos,size) {
        this.r = r;
        this.c = c;
        this.size = size;
        this.pos = createVector(xPos,yPos);
        this.color = color(100,100,100,100);
    }

    display() {
        fill(this.color);
        rectMode(CENTER);
        let offSet = this.size / 10;
        rect(this.pos.x,this.pos.y,this.size - offSet,this.size - offSet)
    }
}