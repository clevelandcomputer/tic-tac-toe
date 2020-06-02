for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    const currentCellElement = cellElementArray[elementIndex]

    currentCellElement.addEventListener('click', function (event) {
        const clickedCellElement = event.target;
        console.log("You clicked on cell number: " + clickedCellElement.id)
        if (currentPlayer === 'X') {
            clickedCellElement.innerHTML = 'X'
            currentPlayer = 'O'

        } else if (currentPlayer === "O ) {
            clickedCellElement.innerHTML = 'O'
    }
});

}
