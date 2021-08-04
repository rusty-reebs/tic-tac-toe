//! Goal -- use as little global code as possible. Use factories and modules.


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
//! also check for a tie (no cells left) and a winner
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
                    goPlayer1(index); // passes clicked cell index to gameArray
                    checkforWin();
                    if (winner == true) {
                        openPop("X wins!");
                        setTimeout(() => gameInit(), 2000);
                        
                    }
                    //! stop event listeners
                    console.log(winner);
                }    
                else {
                    goPlayer2(index);
                    checkforWin();
                    if (winner == true) {
                        openPop("O wins!");
                        setTimeout(() => gameInit(), 2000);

                    }
                    console.log(winner);
                }
                move++;
                console.log(move);
                if (checkForTie()) {
                    // gameInit();
                    console.log("Tie Game");
                    openPop("Tie Game!");
                    setTimeout(() => gameInit(), 2000);
                    console.log(gameArray.newArray);
                };
                //! tie overrides win on last move
                //TODO if checkForTie is true, then restart
            }
            })
        });
    
    const checkforWin = () => {
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
        })

    }
    
    const checkCell = (index) => {
        if (gameArray.newArray[index] != "") {
            console.log("Cell occupied");
            openPop("Square Taken!");
            setTimeout(() => closePop(), 2000);
            return true;
        }
    };

    const openPop = (text) => {
        document.getElementById("text").innerHTML = text;
        document.getElementById("popup").style.display = "block";
    }

    const closePop = () => {
        document.getElementById("popup").style.display = "none";
    }

    const checkForTie = () => {
        if (move == 10 && winner == null) {
            // console.log("Tie Game");
            // openPop("Tie Game!");
            // setTimeout(() => closePop(), 2000);
            return true;
            //TODO show pop up box, delay and then restart
        }
    };

    const gameInit = () => {
        //! resets player names, array and calls populateBoard
        closePop();
        winner = null;
        move = 1;
        gameArray.newArray = ["", "", "", "", "", "", "", "", ""];
        gameBoard.populateBoard();


    }

    return { gameInit };
        
})();

// TODO make a player factory
// TODO we want objects to describe our players and encapsulate all of the things our players can do (functions!)

// Player factory
const Player = (name) => {
    const getName = () => name;
    
}

const goPlayer1 = (cell) => {       // put all this logic in a factory and then declare player1 as the variable
    gameArray.newArray.splice(cell, 1, "X");
    console.log(gameArray.newArray);
    gameBoard.populateBoard();
    return; //! not sure if reqd
};

const goPlayer2 = (cell) => {
    gameArray.newArray.splice(cell, 1, "O");
    console.log(gameArray.newArray);
    gameBoard.populateBoard();
    return; //! not sure if reqd
};

gameBoard.populateBoard();

