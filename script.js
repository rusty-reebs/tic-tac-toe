//! Goal -- use as little global code as possible. Use factories and modules.

//TODO reset button and player name inputs
//TODO add event listener to reset button that calls playGame.gameInit()

// Game Array Method -- holds the array of X's and O's
const gameArray = (() => {
    const newArray = ["", "", "", "", "", "", "", "", ""];

    return { newArray };
})();

// Game Board Method -- fills in the cells with the array
const gameBoard = (() => {
    const celldivs = document.querySelectorAll(".cell"); // celldivs is a NodeList, not an array
    const cells = Array.from(celldivs);
    const populateBoard = () => {
        cells.forEach((cell, index) => {  // fills in cells with array items
            cells[index].innerHTML = gameArray.newArray[index];
        })
    };
    return { populateBoard, cells };
})();

// Game Play Method -- adds markers and checks for tie and win
const playGame = (() => {
    let winner = null;
    let move = 1;
    gameBoard.cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {  // This adds click listener to each cell
            console.log(cell);
            if (checkCell(index)) {
                console.log("Occupado");
            }
            else {
                if (move%2 == 1) {
                    // goPlayer1(index); // passes clicked cell index to gameArray
                    player1.go(index); // passes clicked cell index to gameArray
                    checkforWin();
                    if (winner == true) {
                        openPop(player1.getName() + " wins!");
                        console.log(player1.getName());
                        setTimeout(() => gameInit(), 2000);
                        
                    }
                    //! stop event listeners
                    console.log(winner);
                }    
                else {
                    // goPlayer2(index);
                    player2.go(index);
                    checkforWin();
                    if (winner == true) {
                        openPop(player2.getName() + " wins!");
                        setTimeout(() => gameInit(), 2000);

                    }
                    console.log(winner);
                }
                move++;
                console.log(move);
                if (checkForTie()) {
                    console.log("Tie Game");
                    openPop("Tie Game!");
                    setTimeout(() => gameInit(), 2000);
                    console.log(gameArray.newArray);
                };
            }
            })
        });
    
    const checkforWin = () => {  // function to check for winner
        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], 
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
            ];

        winCombos.forEach((combo, index) => {
            if (gameArray.newArray[combo[0]] && gameArray.newArray[combo[0]] === gameArray.newArray[combo[1]] && gameArray.newArray[combo[0]] === gameArray.newArray[combo[2]]) {
                // winner = gameArray.newArray[combo[0]];
                winner = true;
            };
            return winner;
        });
    };
    
    const checkCell = (index) => {  // function to check if cell already has a marker
        if (gameArray.newArray[index] != "") {
            console.log("Cell occupied");
            openPop("Square Taken!");
            setTimeout(() => closePop(), 2000);
            return true;
        };
    };

    // multipurpose pop up box
    const openPop = (text) => {
        document.getElementById("text").innerHTML = text;
        document.getElementById("popup").style.display = "block";
    };

    const closePop = () => {
        document.getElementById("popup").style.display = "none";
    };

    const checkForTie = () => {  // function to check for a tie
        if (move == 10 && winner == null) {
            // console.log("Tie Game");
            // openPop("Tie Game!");
            // setTimeout(() => closePop(), 2000);
            return true;
        };
    };

    
    const gameInit = () => {  // initializes variables, arrays and game
        //! resets player names, array and calls populateBoard
        closePop();
        winner = null;
        move = 1;
        gameArray.newArray = ["", "", "", "", "", "", "", "", ""];
        gameBoard.populateBoard();
        
        
    };
    
    return { gameInit };
    
})();

//? does it have to be global?
const restart = document.getElementById("restart");
restart.addEventListener("click", () => {
    console.log("reset");
    playGame.gameInit();
    };
);

// TODO we want objects to describe our players and encapsulate all of the things our players can do (functions!)

// Player factory
const Player = (name, marker) => {
    const getName = () => name;
    const go = (cell) => {
        gameArray.newArray.splice(cell, 1, marker);
        console.log(gameArray.newArray);
        gameBoard.populateBoard();
    }
    return { getName, go };
};

const player1 = Player ("Rusty", "X");
const player2 = Player ("Jaim", "O");

gameBoard.populateBoard();

// const goPlayer1 = (cell) => {       // put all this logic in a factory and then declare player1 as the variable
//     gameArray.newArray.splice(cell, 1, "X");
//     console.log(gameArray.newArray);
//     gameBoard.populateBoard();
//     return; //! not sure if reqd
// };

// const goPlayer2 = (cell) => {
//     gameArray.newArray.splice(cell, 1, "O");
//     console.log(gameArray.newArray);
//     gameBoard.populateBoard();
//     return; //! not sure if reqd
// };
