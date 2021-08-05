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
        });
    };
    return { populateBoard, cells };
})();


// Play Game Method -- manages players and buttons, and adds markers and checks for tie and win
const playGame = (() => {
    let winner = null;
    let move = 1;
    gameBoard.cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {  // adds click listener to each cell
            console.log(cell);
            if (checkCell(index)) {
                console.log("Occupado");
            }
            else {
                if (move%2 == 1) {
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
                }
            }
            });
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

        winCombos.forEach((combo, index) => {   // runs function on each winning combo
            if (gameArray.newArray[combo[0]] && gameArray.newArray[combo[0]] === gameArray.newArray[combo[1]] && gameArray.newArray[combo[0]] === gameArray.newArray[combo[2]]) {
                winner = true;
            }
            return winner;
        });
    };
    
    const checkCell = (index) => {  // function to check if cell already has a marker
        if (gameArray.newArray[index] != "") {
            console.log("Cell occupied");
            openPop("Square Taken!");
            setTimeout(() => closePop(), 2000);
            return true;
        }
    };

    const checkForTie = () => {  // function to check for a tie
        if (move == 10 && winner == null) {
            return true;
        }
    };
    
    const openPlayerNames = () => {
        document.getElementById("namespopup").style.display = "block";
    };
    
    const closePlayerNames = () => {
        document.getElementById("namespopup").style.display = "none";
    };
    
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {      // stops refresh on submit
        e.preventDefault();
    });

    const restart = document.getElementById("restart");     // Restart button
    restart.addEventListener("click", () => {
        console.log("reset");
        gameInit();
    });

    const newPlayers = document.getElementById("newplayers");   // New Players button
    newPlayers.addEventListener("click", () => {
        console.log("new players");
        gameInit();                 // clears game board
        player1Name.value = "";     // resets player names on popup form
        player2Name.value = "";
        openPlayerNames();           // opens popup form
    });
    
    const gameInit = () => {  // initializes variables, arrays and game
        closePop();
        winner = null;
        move = 1;
        gameArray.newArray = ["", "", "", "", "", "", "", "", ""];
        gameBoard.populateBoard();
    };

    const openPop = (text) => {      // multipurpose pop up box
        document.getElementById("text").innerHTML = text;
        document.getElementById("popup").style.display = "block";
    };

    const closePop = () => {
        document.getElementById("popup").style.display = "none";
    };
    
    const player1Name = document.getElementById("player1");
    const player2Name = document.getElementById("player2");
    
    const submitNames = () => {
        player1 = Player (player1Name.value, "X");
        player2 = Player (player2Name.value, "O");
        setTimeout(closePlayerNames(), 300);
        gameInit();
    };

    return { openPlayerNames, submitNames };
    
})();


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


gameBoard.populateBoard();
playGame.openPlayerNames();

