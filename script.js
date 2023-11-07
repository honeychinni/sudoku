const cells = document.querySelectorAll(".cell");

// Initialize the game state (store initial cell values)
let initialState = Array.from(cells).map((cell) => cell.value);

function restartGame() {
    // Reset cell values to the initial state
    for (let i = 0; i < cells.length; i++) {
        cells[i].value = initialState[i];
    }
}

function validateGame() {
    const currentValues = Array.from(cells).map((cell) => cell.value);

    // Check if all cells are filled with valid numbers
    const isValid = currentValues.every((value) => /^[1-9]$/.test(value));

    if (isValid) {
        alert("Congratulations! Sudoku is valid.");
    } else {
        alert("Invalid Sudoku. Please check your numbers.");
    }
}