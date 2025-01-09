let color = "black";

function populateBoard(size){
    // select board
    let board = document.querySelector(".board");
    
    // clear board before populating
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    // size^2 grid
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    amountOfSquares = size * size;
    // add size^2 divs, color blue
    for (i = 0; i < amountOfSquares; i++){
        let square = document.createElement("div");
        // change color on hover
        square.addEventListener("mouseover", changeSquareColor);
        // default color white
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(size){
    // keep size between 2 and 100
    if (size >= 2 && size <= 100){
        populateBoard(size);
    } 
    else {
        console.log("Invalid size, please input a value between 2 and 100.");
    }
}

function changeSquareColor(){
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}

function clearBoard(){
    // select board
    let board = document.querySelector(".board");

    // clear board before populating
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");
}

populateBoard(16);
//changeSize(16);