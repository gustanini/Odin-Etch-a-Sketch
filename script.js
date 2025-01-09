function populateBoard(size){
    // select board
    let board = document.querySelector(".board");
    // size^2 grid
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    // add size^2 divs, color blue
    for (i = 0; i < (size * size); i++){
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