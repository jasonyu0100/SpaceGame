class Grid {
    constructor(rows,cols) {
        this.rows = rows; //Amount of Rows
        this.cols = cols; // Amount of Columns
        this.scaledSize = width / cols;
        this.gridTemplate = this.generateTemplate();
        this.gridStructure = this.generateStructure();
        this.current = null;
        this.score = 0;
        this.spawnNumberSquare();
    }

    generateTemplate() { // Generates a template structure 
        let gridTemplate = []
        for(let r = 0; r < this.rows; r++) {
            let row = []
            for(let c = 0; c < this.cols; c++) {
                let coord = this.getLiteralCoord(r,c);
                let currentSquare =  new TemplateSquare(r,c,coord.x,coord.y,this.scaledSize);
                row.push(currentSquare);
            }
            gridTemplate.push(row);
        }
        return gridTemplate;
    }

    generateStructure() { // Generates a data structure for storing blocks
        let structure = [];
        for(let r = 0; r < this.rows; r ++) {
            let row = [];
            for(let c = 0; c < this.cols; c ++) {
                let coordinate = this.getLiteralCoord(r,c);
                let literalCoordinate = createVector(coordinate.x,coordinate.y);
                row[c] = {'block':null,'coordinate':literalCoordinate,'row':r,'col':c};
            }
            structure[r] = row;
        }
        return structure;
    }

    getLiteralCoord(row,col) { // Gets the literal coord based on r,c
        let xPos = (this.scaledSize/2) + (col * this.scaledSize);
        let yPos = (height - this.scaledSize/2) - (row * this.scaledSize);
        return {'x':xPos,'y':yPos};
    }

    spawnNumberSquare() { // Create Current Number Square
        let row = this.rows - 1;
        let col = floor(random(this.cols));
        if (this.gridStructure[row][col].block !== null) {
            this.current = null;
        } else {
            let coordinate = this.gridStructure[row][col].coordinate;
            let power = floor(random(1,6));
            this.current = new NumberSquare(row,col,coordinate.x,coordinate.y,this.scaledSize,power);
            this.current.move = true;
            this.updateStructure(this.current);
        }
    }

    updateStructure(numberSquare) { // Sets the numberSquare to dataStructure
        let row = numberSquare.r;
        let col = numberSquare.c;
        let coordinate = this.gridStructure[row][col].coordinate;
        numberSquare.pos = createVector(coordinate.x,coordinate.y);
        this.gridStructure[row][col].block = numberSquare;
    }

    displayTemplate() { // Shows the template
        for (let row of this.gridTemplate) {
            for (let templateSquare of row) {
                templateSquare.display();
            }
        }
    }

    displayStructure() { // Shows the number blocks in structure
        for (let row of this.gridStructure) {
            for (let cell of row) {
                if (cell.block) {
                    cell.block.display();
                }
            }
        }
    }

    update() { // Updates all values
        this.displayTemplate();
        this.displayStructure();
        textSize(32);
        text(this.score.toString(),width/2,32);
    }

    combineSquares(square) {
        let surrounding = this.getSurrounding(square);
        let powerIncrease = 0;
        for(let coord of surrounding) {
            let cell = this.gridStructure[coord.r][coord.c].block
            if (cell !== null) {
                if (cell.power === square.power) {
                    powerIncrease += 1;
                    this.gridStructure[coord.r][coord.c].block = null
                }
            }
        }
        if (powerIncrease > 0) {
            let newValue = square.updateValues(powerIncrease);
            this.score += newValue;
            this.current.move = false;
            return true
        } else {
            return false
        }
    }

    checkFloatingSquares() {
        for(let r = this.rows - 1; r >= 1; r--) { //Only goes the the second lowest row
            for(let c = 0; c < this.cols; c++) {
                let cell = this.gridStructure[r][c].block;
                let lowerCell = this.gridStructure[r-1][c].block;
                if (cell !== null && lowerCell === null) {
                    this.current = cell;
                    return true
                }
            }
        }
        return false
    }

    getSurrounding(square) {
        let surrounding = [];
        let vectors = [[1,0],[-1,0],[0,1],[0,-1]];
        for (let vector of vectors) {
            let newR = square.r + vector[0];
            let newC = square.c + vector[1];
            if (newR >= 0 && newR < this.rows && newC >= 0 && newC < this.cols) {
                surrounding.push({r:newR,c:newC});
            }
        }
        return surrounding
    }

    incrementTime() {
        if (this.current.r <= 0 || this.gridStructure[this.current.r - 1][this.current.c].block != null) { // Reached  the bottom or another square
            if (this.combineSquares(this.current)){

            } else if (this.checkFloatingSquares()){
                //If there are floating cells
            } else {
                this.spawnNumberSquare();
            }
        } else { // Descend
            this.gridStructure[this.current.r][this.current.c].block = null;
            this.current.descend();
            this.updateStructure(this.current);
        }
    }

    //getGrid()

    move(keycode) {
        let currentCoord = {r:this.current.r,c:this.current.c};
        let action = false;
        if (this.current.move) {
            switch (keycode) {
                case 37:
                    if (currentCoord.c <= 0) {

                    } else if (this.gridStructure[currentCoord.r][currentCoord.c-1].block !== null){

                    } else {
                        this.current.c -= 1;
                        this.updateStructure(this.current);
                        this.gridStructure[currentCoord.r][currentCoord.c].block = null;
                        action = true;
                    }
                    break;
                case 39:
                    if (currentCoord.c >= this.cols-1) {
                    
                    } else if (this.gridStructure[currentCoord.r][currentCoord.c+1].block !== null){

                    } else {
                        this.current.c += 1;
                        this.updateStructure(this.current);
                        this.gridStructure[currentCoord.r][currentCoord.c].block = null;
                        action = true;
                    }
                    break;
                case 40:
                    let newR;
                    for (let r = currentCoord.r - 1; r >= 0; r --) {
                        if (this.gridStructure[r][currentCoord.c].block !== null) {
                            //Case for block being below current block
                            newR = r + 1;
                            this.current.r = newR;
                            this.gridStructure[currentCoord.r][currentCoord.c].block = null;
                            this.updateStructure(this.current);
                            action = true;
                            break;
                        } else if (r === 0 && this.gridStructure[r][currentCoord.c].block === null) {
                            newR = r;
                            this.current.r = newR;
                            this.gridStructure[currentCoord.r][currentCoord.c].block = null;
                            this.updateStructure(this.current);
                            action = true;
                            break;
                        }
                    }
            }
        }
        return action;
    }
}