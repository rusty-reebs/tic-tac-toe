// TODO -- build Gameboard object, store gameboard as an array inside object
// TODO -- build player objects
// TODO -- build object to control flow of game

//! Goal -- use as little global code as possible. Use factories and modules.

// Gameboard object and array -- use module

const gameBoard = (() => {
    const gameArray = {
        cell1: "X",
        cell2: "O",
        cell3: "X",
        cell4: "O",
        cell5: "X",
        cell6: "O",
        cell7: "X",
        cell8: "O",
        cell9: "X"
        };

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

    const populateBoard = () => {
        cell1.innerHTML = gameArray.cell1;
        cell2.innerHTML = gameArray.cell2;
        cell3.innerHTML = gameArray.cell3;
        cell4.innerHTML = gameArray.cell4;
        cell5.innerHTML = gameArray.cell5;
        cell6.innerHTML = gameArray.cell6;
        cell7.innerHTML = gameArray.cell7;
        cell8.innerHTML = gameArray.cell8;
        cell9.innerHTML = gameArray.cell9;
    };

return {gameArray, populateBoard};

})();

gameBoard.populateBoard();
