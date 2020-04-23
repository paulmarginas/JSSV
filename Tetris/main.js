import { Grid } from "./grid.js";
import { Shape } from "./Shapes/shape.js";
import { Movement } from "./movement.js"

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

let shape = new Shape(0, 1, "L", grid.cells);
shape.draw();

shape = new Shape(4, 1, "O", grid.cells);
shape.draw();

shape = new Shape(7, 1, "T", grid.cells);
shape.draw();

shape = new Shape(10, 1, "J", grid.cells);
shape.draw();

shape = new Shape(14, 1, "Z", grid.cells);
shape.draw();

shape = new Shape(17, 1, "S", grid.cells);
shape.draw();

shape = new Shape(4, 5, "I", grid.cells);
shape.draw();

const move = new Movement(shape);

const colors = ["red", "green", "blue", "yellow", " brown", "pink", "purple", "black", "white"];
function getRandom() {
    return Math.floor(Math.random() * (colors.length));
}

document.addEventListener("keydown", event => {
    console.log(event.key);
    switch (event.key) {
        case 'Enter':
            grid.draw();
            shape.color = colors[getRandom()];
            shape.draw();
            break;
        case 'ArrowUp':
            grid.draw();
            move.up();
            shape.draw();
            break;
        case 'ArrowDown':
            grid.draw();
            move.down();
            shape.draw();
            break;
        case 'ArrowLeft':
            grid.draw();
            move.left();
            shape.draw();
            break;
        case 'ArrowRight':
            grid.draw();
            move.right();
            shape.draw();
            break;
    }
});

setInterval(() => {
    grid.draw();
    move.down();
    console.log("Moving down.")
    shape.draw();
}, 500);
