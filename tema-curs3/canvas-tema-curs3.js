const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.getElementById("playground").append(canvas);
const context = canvas.getContext("2d");

console.log("************************************");
context.beginPath();
context.arc(200,300,100,0,2 * Math.PI);
context.stroke();
context.fillStyle = "red";
context.fill();
context.closePath();

console.log("************************************");
function draw(numberOfSides){
context.beginPath();
if(numberOfSides == 3){
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
} else if (numberOfSides == 4){
    context.rect(100,100,50,50);
} else if(numberOfSides == 5){
    const angle = 2 * Math.PI/5;
    context.moveTo(125 + 100 * Math.cos(0), 125 + 100 * Math.sin(0));
    for (let i = 1; i <= 5; i++) {
        context.lineTo (125 + 100 * Math.cos(i * angle), 125 + 100 * Math.sin(i * angle));
   }
} else if (numberOfSides == 6){
    context.moveTo (250 +  200 * Math.cos(0), 250 +  200 *  Math.sin(0));          
    for (let i = 1; i <= 6;i += 1) {
        context.lineTo (250 + 200 * Math.cos(i * 2 * Math.PI / 6), 250 + 200 * Math.sin(i * 2 * Math.PI / 6));
    }
} else {
    context.arc(200,200,100,0,2 * Math.PI);
}
context.stroke();
context.fillStyle = "blue";
context.fill();
context.closePath();
}
draw(5);

console.log("************************************");
class Circle{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = 1;
    }
    draw(){
        context.beginPath();
        context.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2 * Math.PI
        );
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
    move(byX){
        this.changeCircleDirectionWhenBoundryReached();
        if(this.dx == 1){
            this.color = "red";
            this.radius++;
        } else if (this.dx == -1){
            this.color = "blue";
            this.radius--;
        }
        this.x += byX * this.dx;
        this.draw();
    }
    changeCircleDirectionWhenBoundryReached(){
        if(this.x >= canvas.width - this.radius){
            this.dx = -1;
        }
        if(this.x <= this.radius){
            this.dx = 1; 
        }
    }
}
const circle = new Circle(100,150,75);
function animateCircle(){
    console.log("se apeleaza");
    context.clearRect(0, 0, canvas.width, canvas.height);
    circle.move(10);
}
setInterval(animateCircle, 500);

console.log("************************************");
class Cell{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw(){
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.y * 30, this.x * 30, 30, 30);
        context.fill();
        context.stroke();
        context.closePath();
    }
}
const rows = 20;
const colomns = 10;
const width = 30;
const height = 30;

let grid = [];

const createGrid = () => {
    for(let row = 0; row < rows; row++){
        grid[row] = [];
        for(let colomn = 0; colomn < colomns; colomn++){
            if(row % 2 == 0){
                if(colomn % 2 == 0){
                    grid[row][colomn] = new Cell(row, colomn, "black");
                } else {
                    grid[row][colomn] = new Cell(row, colomn, "white");
                }
            } else if(row % 2 != 0) {
                if(colomn % 2 == 0){
                    grid[row][colomn] = new Cell(row, colomn, "white");
                } else {
                    grid[row][colomn] = new Cell(row, colomn, "black");
                }
            }
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

console.log("************************************");
class Square{
    constructor(row, colomn){
        this.row = row;
        this.colomn = colomn;
    }
    draw(){
        context.beginPath(); 
        let grid = [];
        for(let i = this.row; i < (this.row+5); i++){
            grid[i] = [];
            for(let j = this.colomn; j < (this.colomn+5); j++){
                context.rect(i * 30, j * 30, 30, 30);
                context.stroke();
            }
        }
        context.closePath();
    }
}
const square = new Square(2,3)
square.draw();

const square2 = new Square(5,7)
square2.draw();
