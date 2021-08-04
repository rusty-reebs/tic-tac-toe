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

// Game Play Method -- listens for clicks and adds markers
//! For each turn, check if cell is already marked, then mark it, and go to next player
//! also check for a tie (no cells left) and a winner
const playGame = (() => {
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
                }    
                else {
                    goPlayer2(index);
                }
                move++;
                console.log(move);
                checkForTie();
            }
            })
        });
      
    const checkCell = (index) => {
        if (gameArray.newArray[index] != "") {
            console.log("Cell occupied");
            openOccupied();
            setTimeout(() => closeOccupied(), 2000);
            return true;
            //TODO show pop up box, delay and then continue
        }
    };

    const openOccupied = () => {
        document.getElementById("occupiedpopup").style.display = "block";

    }

    const closeOccupied = () => {
        document.getElementById("occupiedpopup").style.display = "none";

    }

    const checkForTie = () => {
        if (move == 10) {
            console.log("Tie Game");
            return true;
            //TODO show pop up box, delay and then restart
        }
    };
        
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

