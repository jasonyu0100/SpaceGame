class NumberSquare extends TemplateSquare {
    constructor(r,c,xPos,yPos,size,power) {
        super(r,c,xPos,yPos,size);
        this.base = 2;
        this.power = power;
        this.numValue = this.base ** this.power;
        colorMode(HSB);
        this.color = color(this.numValue,150,150);
        this.move = false;
    }

    displayText() {
        let string = this.numValue.toString();
        let size = this.getTextSize(string);
        textSize(size);
        fill(255);
        textAlign(CENTER);
        text(string, this.pos.x, this.pos.y + size / 3);
    }

    getTextSize(string) {
        let size = floor(this.size / string.length);
        return size;
    }

    descend() {
        if (this.r <= 0) {
            
        } else {
            this.r -= 1;
        }
    }

    display() {
        fill(this.color);
        super.display();
        this.displayText();
    }

    updateValues(increase) {
        this.power += increase;
        this.numValue = this.base ** this.power;
        this.color = color(this.numValue,150,150);
        return this.numValue;
    }
}