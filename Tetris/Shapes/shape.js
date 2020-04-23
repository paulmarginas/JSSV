export class Shape {
    constructor(row, column, template, cells) {
        this.row = row;
        this.column = column;
        this.cells = cells;
        switch (template) {
            case "L":
                this.template = [
                    [1, 0],
                    [1, 0],
                    [1, 1]
                ];
                break;
            case "S":
                this.template = [
                    [0, 1, 1],
                    [1, 1, 0]
                ];
                break;
            case "T":
                this.template = [
                    [1, 1, 1],
                    [0, 1, 0]
                ];
                break;
            case "Z":
                this.template = [
                    [1, 1, 0],
                    [0, 1, 1]
                ];
                break;
            case "O":
                this.template = [
                    [1, 1],
                    [1, 1]
                ];
                break;
            case "I":
                this.template = [
                    [1],
                    [1],
                    [1],
                    [1]
                ];
                break;
            case "J":
                this.template = [
                    [0, 1],
                    [0, 1],
                    [1, 1]
                ];
                break;
        }

        this.color = "orange";
    }

    draw() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw(this.color);
                }
            }
        }
    }
    up() {
        this.row--;
    }
    down() {
        this.row++;
    }
    left() {
        this.column--;
    }
    right() {
        this.column++;
    }
}