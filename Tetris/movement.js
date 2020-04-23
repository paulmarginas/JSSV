export class Movement {
    constructor(shape) {
        this.shape = shape;
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