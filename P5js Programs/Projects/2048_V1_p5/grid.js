class Grid {
    constructor(w,h,r,c) {
        this.width = w; //Allocated Width
        this.height = h; //Allocated Height
        this.columns = c; //Amount of Columns
        this.rows = r; //Amount of Rows
        this.size = this.width / this.rows; //Size of Square to fit Width
        this.grid = this.generateGrid();
        this.numBlocks = [];
        this.current = this.spawnNumBlock();
        this.numBlocks.push(this.current);
    }

    generateGrid() {
        //Generate Grid 
        let grid = [];
        for (let y = 0; y < this.rows; y ++) {
            let currRow = [];
            for(let x = 0; x < this.columns; x ++) {
                let coords = this.getLiteralCoord(x,y);
                currRow[x] = new Square(coords.x,coords.y,x,y,this.size); 
            }
            grid[y] = currRow;
        }
        return grid;
    }

    display() {
        for(let row of this.grid) {
            for(let square of row) {
                square.display();
            }
        }
        
        for(let numBlock of this.numBlocks) {
            numBlock.display();
        }

    }

    getLiteralCoord(x,y) {
        let literalX = this.size/2 + (this.size * x);
        let literalY = this.height - this.size/2 - (this.size * y);
        return {'x':literalX,'y':literalY}
    }

    spawnNumBlock() {
        let r = this.rows - 1; //Top Row
        let c = floor(random(this.columns));
        let coords = this.getLiteralCoord(c,r);
        let value = 2;
        return new NumBlock(coords.x,coords.y,r,c,this.size,value);
    }

    move(keycode) {
        return
    }

    incrementTime() {
        if (!this.current.descend()) {
            let coords = this.getLiteralCoord(this.current.col,this.current.row);
            this.current.setNewCoords(coords);
        } else {
            this.current = this.spawnNumBlock();
            this.numBlocks.push(this.current);
        }

    }
}

class Square {
    constructor(x,y,r,c,size) {
        this.pos = createVector(x,y);
        this.unformSize = size;
        this.gap = 10;
        this.size = size - this.gap;
        this.row = r;
        this.col = c;
        this.color = color(150,30,50);
    }

    display() {
        fill(this.color);
        rectMode(CENTER);
        rect(this.pos.x,this.pos.y,this.size,this.size);
    }
}

class NumBlock extends Square {
    constructor(x,y,r,c,size,value) {
        super(x,y,r,c,size);
        this.color = color(0,0,155);
        this.value = value;
        this.bottom = false;
    }

    displayText() {
        fill(255);
        textAlign(CENTER);
        let size = this.calcTextSize();
        textSize(size);
        text(this.value.toString(), this.pos.x, this.pos.y + size/2.5);
    }

    calcTextSize() {
        let stringOfValue = this.value.toString();
        let size = floor(this.size / stringOfValue.length);
        return size;
    }

    descend() {
        if (this.row == 0) {
            this.bottom = true;
            return true;
        } else {
            this.row -= 1;
            return false;
        }
    }

    setNewCoords(coords) {
        this.pos = createVector(coords.x,coords.y);
    }

    display() {
        super.display();
        this.displayText();

    }

    move(key) {
        switch (key) {
            case 40: //DOWN
                this.row -= 1;
                break;
            case 37: //LEFT
                this.col -= 1;
                break;
            case 39: //RIGHT
                this.vel.x += 1;
                break;
        } 
    }
    
}