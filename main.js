let currentPlayer = 'X';
let playerXSelections = [];
let playerOSelections = [];
let matchX = 0;
let matchO = 0;

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]

]

function checkForWin(winningCombinations, playerSelections) {
    
    for (let index = 0; index < winningCombinations.length; index += 1) {
        matchX = 0
         matchO = 0
        // for(let j = 0; j < playerSelections.length; j += 1) {

            console.log(playerSelections);
            console.log(winningCombinations[index]);


        // if (playerXSelections.every( ai => winningCombinations[index].includes(ai))) {
        // let winner = winningCombinations[index].forEach(function (playerSelections) {

        // });
        // if (winningCombinations[index].indexOf(playerSelections[j]) > -1 && currentPlayer === 'X') {
        //     matchX++
        //     console.log(matchX);

        // } else if (winningCombinations[index].indexOf(playerSelections[j]) > -1 && currentPlayer === 'O'){
        //     matchO++
        // }

        winningCombinations[index].forEach(function (playerSelections) {
            if (currentPlayer === 'X') {
                
                
                matchX++
            } else if (currentPlayer === 'O') {
                
                
                matchO++
            }

        })





        if (matchX === 3) {
            alert('Player X Wins')
            console.log(matchX);
            matchX = 0;
            return
        } else if (matchO === 3) {
            alert('Player O Wins')
            console.log(matchO);
            matchO = 0
            return
        }

    }



}




// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll('.grid-cell');
// Loop over each element in our cellElementArray:
for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    // Set the cell element at cellElementArray[cellIndex] to the currentCell variable:
    const currentCellElement = cellElementArray[elementIndex]
    // Add an event listener to the currentCellElement:
    currentCellElement.addEventListener('click', function (event) {
        // event.target tells us which element the user clicked (see Resources links below):
        const clickedCellElement = event.target;
        if (currentPlayer === 'X') {
            clickedCellElement.innerText = "X"
            playerXSelections.push(parseInt(clickedCellElement.id))
            if (playerXSelections.length >= 3) {
                checkForWin(winningCombinations, playerXSelections)
            }
            currentPlayer = 'O'
        } else if (currentPlayer === 'O') {
            clickedCellElement.innerText = "O"
            playerOSelections.push(parseInt(clickedCellElement.id))
            if (playerOSelections.length >= 3) {
                checkForWin(winningCombinations, playerOSelections)
            }
            currentPlayer = 'X'
        }
        // Log the ID of the cell which was just clicked:

        console.log("You clicked on cell number: " + clickedCellElement.id)
    });
}




