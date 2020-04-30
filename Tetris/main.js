import { Grid } from "./grid.js";
import { Movement } from "./utils/movement.js";
import { generateNewShape } from "./utils/shape-generator.js";
import { getRandomInt } from "./utils/shape-generator.js";


const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

let shape = generateNewShape(grid.cells);
shape.draw();

const move = new Movement(shape, grid.cells);

document.addEventListener("keydown", event => {
    console.log(event.key);
    switch (event.key) {
        case 'Enter':
            const colors = ["red", "green", "blue", "yellow", " brown", "pink", "purple", "black", "white"];
            shape.color = colors[getRandomInt(colors.length)];
            shape.draw();
            break;
        case 'ArrowUp':
            shape.rotate();
            break;
        case 'ArrowDown':
            move.down();
            break;
        case 'ArrowLeft':
            move.left();
            break;
        case 'ArrowRight':
            move.right();
            break;
    }
});
const animate = () => {
    if (move.canMove) {
        move.down();
        console.log("Moving");
    } else {
        console.log("Stopped");
        clearInterval(intervalId);
        shape = generateNewShape(grid.cells);
        intervalId = setInterval(animate, 200);
    }
}
let intervalId = setInterval(animate, 200);
