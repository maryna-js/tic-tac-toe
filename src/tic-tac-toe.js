class TicTacToe {
    constructor() {
        this.current = "x";
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
         ];
         this.check = true;
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if (this.current === 'x'){
                this.current = 'o';
            } else {
                this.current = 'x';
            }
        }
        return this;
    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) {
            return true;
        }
        else {
            return false;
        }
    }

    getWinner() {
        //00 01 02
        //10 11 12
        //20 21 22
    let leftDiag = this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2];
    let rightDiag = this.field[0][2] == this.field[1][1] && this.field[1][1] == this.field[2][0];
    if (this.field[1][1] !== null) {
        if (leftDiag) {
            {return this.field[1][1];}
        }
        if (rightDiag) {
            {return this.field[1][1];}
        }
    }

    for (let i = 0; i < 3; i++) {
        let row = this.field[i][0] === this.field[i][1] && this.field[i][1] === this.field[i][2] && this.field[i][1] !== null;
        let col = this.field[0][i] === this.field[1][i] && this.field[1][i] === this.field[2][i] && this.field[1][i] !== null;

        if (row) {

            return this.field[i][1];
        } else if (col) {

            return this.field[1][i];
        }
    }
    return null;
    


    }

    noMoreTurns() {
        let count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] === null) {
                    count++;
                }
            }
        }
        if (count == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    
    isDraw() {
        if (this.getWinner() === null && this.noMoreTurns() === true) {

            return true;
        }
        return false;

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];

    }
}
module.exports = TicTacToe;
