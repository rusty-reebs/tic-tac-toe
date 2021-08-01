//! Goal -- use as little global code as possible. Use factories and modules.


// RUSTY'S NEW CODE

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
        cells.forEach((cell, index) => {  // uses cells array index to get gameArray
            cells[index].innerHTML = gameArray.newArray[index];
        })
    };
    return { populateBoard, cells };
})();

// Game Play Method -- listens for clicks and adds markers
const playGame = (() => {
    gameBoard.cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {  // This adds click listener to each cell
            console.log(cell);
            // goPlayer1(index); // passes clicked cell index to gameArray
            //! run a gameplay function / method
            // has to flip between player1 and player2
            addMarker(index);
        });
    });    
    const addMarker = (index) => {
            goPlayer1(index)
    };

        
//! For each turn, check if cell is already marked, then mark it, and go to next player
//! also check for a tie (no cells left) and a winner
// TODO keep track of whose turn it is

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



// // OLD CODE

// // Module for gameboard object and array
// const gameBoard = (() => {
//     // DOM objects to be manipulated
//     const celldivs = document.querySelectorAll(".cell"); // squares is a NodeList, not an array
//     const cells = Array.from(celldivs);
    
//     //! what to do with click listeners once they are listening? When there is a click it must call a function.
//     //! need to change array to X or O depending on player turn
//     //! player 1, update array
//     //! player 2, update array, etc
//     //! if array = true, then go to player2?
//     //! if array contains "X", go to player2?
//     //! while something is not true, player1, player2


//     cells.forEach((cell, index) => {
//         cell.addEventListener("click", () => {  // This adds click listener to each cell
//             console.log(cell);
//             // goPlayer1(index); // passes clicked cell index to gameArray
//             //! run a gameplay function / method
//             // has to flip between player1 and player2
//             gamePlay.addMarker(index);

//         });
//     });

//     // const gameArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
//     const gameArray = ["", "", "", "", "", "", "", "", ""];
    
//     const populateBoard = () => {
//         cells.forEach((cell, index) => {  // uses cells array index to get gameArray
//             cells[index].innerHTML = gameArray[index];
//         });
//     };

// return {populateBoard, gameArray, cells}; // makes methods public
// })();




// const goPlayer1 = (cell) => {       // put all this logic in a factory and then declare player1 as the variable
//     gameBoard.gameArray.splice(cell, 1, "X");
//     console.log(gameBoard.gameArray);
//     gameBoard.populateBoard();
//     return; //! not sure if reqd
// }

// const goPlayer2 = (cell) => {
//     gameBoard.gameArray.splice(cell, 1, "O");
//     console.log(gameBoard.gameArray);
//     gameBoard.populateBoard();
//     return; //! not sure if reqd
// }

// // Module for game flow

// //! decide what to put in game flow module
//     //! function to check for win, call it after each player move

//      // TODO keep track of whose turn it is in the game logic (Daryoush)
//     //! maybe 9 max turns, with a loop. have an interrupt if someone wins.
//     // while turns is less than 9, keep going
//     // player1's turn, has to call addMarker or goPlayer1


// const gamePlay = (() => {
    
//     // player one turn, listens for click and marks X
//     // add 1 iteration
//     // player two turn, listens for click and marks O

//     const addMarker = (index) => {
//         let turns = 0;
//         goPlayer1(index);
//         turns++;
//         goPlayer2(index);
//     }

//     // for (let i = 0, i <= 9, i++) {

//     // }

// return {addMarker};

// })();




// //! Player 1 clicks place X and Player 2 clicks place O
// // Factory for players

// const player = (playername) => {
    
//     console.log(playername);
// };

// gameBoard.populateBoard();