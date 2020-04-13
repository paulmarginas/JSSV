const canvas = document.getElementById("canvasId");
const context = canvas.getContext("2d");


const rows = 20;
const colomns = 10;
const width = 30;
const height = 30;

let grid = [];

const createGrid = () => {
    for(let row = 0; row < rows; row++){
        grid[row] = [];
        for(let colomn = 0; colomn < colomns; colomn++){
            grid[row][colomn] = new Cell(row,colomn, row % 2 ? "red" : "blue");
        }
    }
}

const drawGrid = () => {
    for(let row = 0; row < rows; row++){
        for(let colomn = 0; colomn < colomns; colomn++){
            grid[row][colomn].draw();
        }
    }
}

createGrid();
drawGrid();

