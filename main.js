const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const playerTurn = document.querySelector('#whos-turn')
const player1Total = document.querySelector('#player1-total')
const player2Total = document.querySelector('#player2-total')
const drawGame = document.querySelector('#draw-game')
const gridCell = document.getElementsByClassName('grid-cell')
const cellReset1 = document.querySelector('#\\31')
const cellReset2 = document.querySelector('#\\32')
const cellReset3 = document.querySelector('#\\33')
const cellReset4 = document.querySelector('#\\34')
const cellReset5 = document.querySelector('#\\35')
const cellReset6 = document.querySelector('#\\36')
const cellReset7 = document.querySelector('#\\37')
const cellReset8 = document.querySelector('#\\38')
const cellReset9 = document.querySelector('#\\39')
let currentPlayer = 'X';
let playerXSelections = [];
let playerOSelections = [];
let matches = 0
let player1Increment = 0
let player2Increment = 0
let drawGameTotal = 0
let cellReset = [cellReset1, cellReset2, cellReset3, cellReset4, cellReset5, cellReset6, cellReset7, cellReset8, cellReset9]

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
        matches = 0
        console.log(playerSelections);
        console.log(winningCombinations[index]);
        for (let j = 0; j < playerSelections.length; j += 1) {
            if (winningCombinations[index].includes(playerSelections[j])) {
                matches++
                console.log(matches);

            }
        }
        if (matches === 3) {
            if (currentPlayer === 'X') {
                alert(player1.value + ' is the winner!')
                playerXSelections = []
                playerOSelections = []
                matches = 0
                currentPlayer = "X"
                player1Increment += 1
                player1Total.innerText = ' ' + player1Increment
                for (let p1Reset = 0; p1Reset < 9; p1Reset++) {
                    let newNum = cellReset[p1Reset]
                    newNum.innerText = null
                    newNum.style.backgroundColor = null
                    
                }
                return
            } else if (currentPlayer === 'O') {
                alert(player2.value + ' is the winner!')
                playerXSelections = []
                playerOSelections = []
                matches = 0
                currentPlayer = 'X'
                player2Increment += 1
                player2Total.innerText = ' ' + player2Increment
                for (let p2Reset = 0; p2Reset < 9; p2Reset++) {
                    let newNum = cellReset[p2Reset]
                    newNum.innerText = null
                    newNum.style.backgroundColor = null
                    
                }
                
                return
            }

        }
    }
    if (playerOSelections.length + playerXSelections.length === 9) {
        drawGameTotal += 1
        drawGame.innerText = ' ' + drawGameTotal

        alert('Draw')
        playerXSelections = []
        playerOSelections = []
        matches = 0
        currentPlayer = 'X'
        for (let reset = 0; reset < 9; reset++) {
            let newNum = cellReset[reset]
            newNum.innerText = null
            newNum.style.backgroundColor = null
        }
 
        return
    }
}

const cellElementArray = document.querySelectorAll('.grid-cell');

for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
 
    const currentCellElement = cellElementArray[elementIndex]

    currentCellElement.addEventListener('click', function (event) {
    
        const clickedCellElement = event.target;
        if (player1.value === player2.value) {
            alert('Player names must be unique, names reset')
            player1.value = 'X'
            player2.value = 'O'
        }
        if(currentCellElement.innerText !== ''){
            return
        }
        if (currentPlayer === 'X') {
            
            clickedCellElement.style.animation = 'spin .75s linear'
            clickedCellElement.style.backgroundColor = 'Orange'
            clickedCellElement.innerText = player1.value
            playerXSelections.push(parseInt(clickedCellElement.id))
            if (playerXSelections.length >= 3) {
                checkForWin(winningCombinations, playerXSelections)
            }
            playerTurn.innerText = ' ' + player2.value + '\'' + 's'
            currentPlayer = 'O'
            
            currentCellElement.removeEventListener('click', (event), false);
        } else if (currentPlayer === 'O') {
            
            clickedCellElement.style.animation = 'spin2 .75s linear'
            clickedCellElement.style.backgroundColor = 'Green'
            clickedCellElement.innerText = player2.value
            playerOSelections.push(parseInt(clickedCellElement.id))
            if (playerOSelections.length >= 3) {
                checkForWin(winningCombinations, playerOSelections)
            }
            playerTurn.innerText = ' ' + player1.value + '\'' + 's'
            currentPlayer = 'X'
        }
        console.log("You clicked on cell number: " + clickedCellElement.id)
    });
}
