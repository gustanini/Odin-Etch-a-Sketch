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
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(size){
    populateBoard(size);
}

//populateBoard(4);
//changeSize(16);