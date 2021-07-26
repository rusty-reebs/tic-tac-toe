// TODO -- build Gameboard object, store gameboard as an array inside object
// TODO -- build player objects
// TODO -- build object to control flow of game

//! Goal -- use as little global code as possible. Use factories and modules.


// Module for gameboard object and array
const gameBoard = (() => {
    // DOM objects to be manipulated
    const celldivs = document.querySelectorAll(".cell"); // squares is a NodeList, not an array
    const cells = Array.from(celldivs);
    
    //! what to do with click listeners once they are listening? When there is a click it must call a function.
    //! need to change array to X or O depending on player turn
    //! player 1, update array
    //! player 2, update array, etc
    

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {  // This adds click listener to each cell
            player1(index);
            console.log(cell);
            });
        });

   

    // const gameArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    const gameArray = ["", "", "", "", "", "", "", "", ""];
    
    const populateBoard = () => {
        // cells.forEach(index => {
        //     cells[index].innerHTML = gameArray[index];  //! This didn't work
        // });

        cells[0].innerHTML = gameArray[0];  // but this does
        cells[1].innerHTML = gameArray[1];
        cells[2].innerHTML = gameArray[2];
        cells[3].innerHTML = gameArray[3];
        cells[4].innerHTML = gameArray[4];
        cells[5].innerHTML = gameArray[5];
        cells[6].innerHTML = gameArray[6];
        cells[7].innerHTML = gameArray[7];
        cells[8].innerHTML = gameArray[8];
    };

return {populateBoard, gameArray, cells}; // makes methods public
})();


function player1(cell) {
    gameBoard.gameArray.splice(cell, 1, "X");
    console.log(gameBoard.gameArray);
    gameBoard.populateBoard();
}

function player2(cell) {
    gameBoard.gameArray.splice(cell, 1, "O");
    console.log(gameBoard.gameArray);
    gameBoard.populateBoard();
}

// Module for game flow

//! decide what to put in game flow module
    //! player1 move click
    //! player2 move

// TODO upon click, then change array to X or O



    
gameBoard.populateBoard();


//! Player 1 clicks place X and Player 2 clicks place O
// Factory for players

const player = (playername) => {

    console.log(playername);
};