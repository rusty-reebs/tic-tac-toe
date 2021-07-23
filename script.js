// TODO -- build Gameboard object, store gameboard as an array inside object
// TODO -- build player objects
// TODO -- build object to control flow of game

//! Goal -- use as little global code as possible. Use factories and modules.


// Module for gameboard object and array
const gameBoard = (() => {
    // DOM objects to be manipulated
    const celldivs = document.querySelectorAll(".cell"); // squares is a NodeList, not an array
    const cells = Array.from(celldivs);
    
    cells.forEach(cell => {
        cell.addEventListener("click", () => {  // This adds click listener to each cell
            console.log(cell);
            })
        });

    const gameArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    
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


// Module for game flow

//! decide what to put in game flow module
// TODO upon click, then change array to X or O


// This code works to change the first cell
// cell1.addEventListener("click", () => {
    //     gameBoard.gameArray.splice(0, 1, "A");
    //     console.log(gameBoard.gameArray);
    //     gameBoard.populateBoard();
    // })
    
gameBoard.populateBoard();


// Factory for players

const player = (playername) => {

    console.log(playername);
};