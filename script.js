// TODO -- build Gameboard object, store gameboard as an array inside object
// TODO -- build player objects
// TODO -- build object to control flow of game

//! Goal -- use as little global code as possible. Use factories and modules.

// DOM objects to be manipulated
const cell1 = document.getElementById("one"); 
const cell2 = document.getElementById("two");
const cell3 = document.getElementById("three");
const cell4 = document.getElementById("four");
const cell5 = document.getElementById("five");
const cell6 = document.getElementById("six");
const cell7 = document.getElementById("seven");
const cell8 = document.getElementById("eight");
const cell9 = document.getElementById("nine");

// Module for gameboard object and array
const gameBoard = (() => {
    const gameArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    
    const populateBoard = () => {
        cell1.innerHTML = gameArray[0];
        cell2.innerHTML = gameArray[1];
        cell3.innerHTML = gameArray[2];
        cell4.innerHTML = gameArray[3];
        cell5.innerHTML = gameArray[4];
        cell6.innerHTML = gameArray[5];
        cell7.innerHTML = gameArray[6];
        cell8.innerHTML = gameArray[7];
        cell9.innerHTML = gameArray[8];
    };

return {gameArray, populateBoard};

})();

// Factory for players

const player = (playername) => {

    console.log(playername);
};

// Module for game flow

// TODO event listener for clicks on cell divs
// TODO upon click, then change array to X or O

cell1.addEventListener("click", () => {
    gameBoard.gameArray.splice(0, 1, "A");
    console.log(gameBoard.gameArray);
    gameBoard.populateBoard();
})

gameBoard.populateBoard();
