const canvas1 = document.createElement("c1");
canvas1.width = 350;
canvas1.height = 200;
document.getElementById("c1").append(canvas1);
const context1 = c1.getContext("2d");

console.log("************************************");
context1.beginPath();
context1.arc(50,50,35,0,2 * Math.PI);
context1.stroke();
context1.fillStyle = "red";
context1.fill();
context1.closePath();

console.log("************************************");
const canvas2 = document.createElement("c2");
canvas2.width = 350;
canvas2.height = 200;
document.getElementById("c2").append(canvas2);
const context2 = c2.getContext("2d");

function draw(numberOfSides){
context2.beginPath();
if(numberOfSides == 3){
    context2.moveTo(20, 20);
    context2.lineTo(20, 70);
    context2.lineTo(70, 70);
    context2.fillStyle = "blue";
} else if (numberOfSides == 4){
    context2.rect(80,80,50,50);
    context2.fillStyle = "red";
} else if(numberOfSides == 5){
    const angle = 2 * Math.PI/5;
    context2.moveTo(175 + 40 * Math.cos(0), 100 + 40 * Math.sin(0));
    for (let i = 1; i <= 5; i++) {
        context2.lineTo (175 + 40 * Math.cos(i * angle), 100 + 40 * Math.sin(i * angle));
   }
   context2.fillStyle = "yellow";
} else if (numberOfSides == 6){
    context2.moveTo (260 +  40 * Math.cos(0), 100 + 40 *  Math.sin(0));          
    for (let i = 1; i <= 6;i += 1) {
        context2.lineTo (260 + 40 * Math.cos(i * 2 * Math.PI / 6), 100 + 40 * Math.sin(i * 2 * Math.PI / 6));
    }
    context2.fillStyle = "green";
}
context2.stroke();
context2.fill();
context2.closePath();
}
draw(3);
draw(4);
draw(5);
draw(6);


console.log("************************************");
const canvas3 = document.createElement("c3");
canvas3.width = 350;
canvas3.height = 200;
document.getElementById("c3").append(canvas3);
const context3 = c3.getContext("2d");
class Circle{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = 1;
    }
    draw(){
        context3.beginPath();
        context3.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2 * Math.PI
        );
        context3.stroke();
        context3.fillStyle = this.color;
        context3.fill();
        context3.closePath();
    }
    move(byX){
        if(this.dx == 1){
            this.color = "red";
            this.radius++;
        } else if (this.dx == -1){
            this.color = "blue";
            this.radius--;
        }
        this.changeCircleDirectionWhenBoundryReached();
        this.x += byX * this.dx;
        this.draw();
    }
    changeCircleDirectionWhenBoundryReached(){
        if(this.x >= canvas3.width - this.radius){
            this.dx = -1;
        }
        if(this.x <= this.radius){
            this.dx = 1; 
        }
    }
}
const circle = new Circle(80,80,20);
function animateCircle(){
    console.log("se apeleaza");
    context3.clearRect(0, 0, canvas3.width, canvas3.height);
    circle.move(10);
}
setInterval(animateCircle, 50);

// console.log("************************************");
const canvas4 = document.createElement("c4");
canvas4.width = 350;
canvas4.height = 650;
document.getElementById("c4").append(canvas4);
const context4 = c4.getContext("2d");
class Cell{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw(){
        context4.beginPath();
        context4.fillStyle = this.color;
        context4.rect(this.y * 20, this.x * 20, 20, 20);
        context4.fill();
        context4.stroke();
        context4.closePath();
    }
}
const rows = 20;
const colomns = 10;

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

// console.log("************************************");
const canvas5 = document.createElement("c5");
canvas5.width = 350;
canvas5.height = 350;
document.getElementById("c5").append(canvas5);
const context5 = c5.getContext("2d");
class Square{
    constructor(row, colomn){
        this.row = row;
        this.colomn = colomn;
    }
    draw(){
        context5.beginPath(); 
        let grid = [];
        for(let i = this.row; i < (this.row+3); i++){
            grid[i] = [];
            for(let j = this.colomn; j < (this.colomn+3); j++){
                context5.rect(i * 30, j * 30, 30, 30);
                context5.stroke();
            }
        }
        context5.closePath();
    }
}
const square = new Square(2,3)
square.draw();

const square2 = new Square(5,7)
square2.draw();
