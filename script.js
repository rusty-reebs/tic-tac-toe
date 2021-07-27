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
    //! if array = true, then go to player2?
    //! if array contains "X", go to player2?

    

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {  // This adds click listener to each cell
            goPlayer1(index); // passes clicked cell index to gameArray
            console.log(cell);
            });
        });

    // const gameArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    const gameArray = ["", "", "", "", "", "", "", "", ""];
    
    const populateBoard = () => {
        cells.forEach((cell, index) => {  // uses cells array index to get gameArray
            cells[index].innerHTML = gameArray[index];
        });
    };

return {populateBoard, gameArray, cells}; // makes methods public
})();

const goPlayer1 = (cell) => {
    gameBoard.gameArray.splice(cell, 1, "X");
    console.log(gameBoard.gameArray);
    gameBoard.populateBoard();
}

const goPlayer2 = (cell) => {
    gameBoard.gameArray.splice(cell, 1, "O");
    console.log(gameBoard.gameArray);
    gameBoard.populateBoard();
}

// Module for game flow

//! decide what to put in game flow module
    //! player1 move click
    //! player2 move



gameBoard.populateBoard();


//! Player 1 clicks place X and Player 2 clicks place O
// Factory for players

const player = (playername) => {

    console.log(playername);
};