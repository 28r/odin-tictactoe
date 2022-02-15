let container = document.getElementById('grid')
let player = undefined
const values = []
const taken = []
let startingPlayerChosen = false
let counter = 0
let nameX = undefined
let nameO = undefined

function markX() {
    if (startingPlayerChosen === true) {
        return 1;
    }
    player = 'X';
    nameX = window.prompt("What's your name?", "X");
    nameO = window.prompt("Who are you playing against?", "O");
    startingPlayerChosen = true;
    return;
}

function markO() {
    if (startingPlayerChosen === true) {
        return 1;
    }
    player = 'O';
    nameO = window.prompt("What's your name?", "O");
    nameX = window.prompt("Who are you playing against?", "X");
    startingPlayerChosen = true;
    return;
}

for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.className = `cell`;
    cell.innerHTML = '&nbsp;';
    container.appendChild(cell);
}

container.style.gridTemplateColumns = `repeat(3, 1fr)`;
container.style.gridTemplateRows = `repeat(3, 1fr)`;

let cells = document.getElementsByClassName('cell');

for (let i = 0; i < 9; i++) {
    cells[i].setAttribute("onclick", `clickOnCell(${i})`);
}

function clickOnCell(index) {
    if (player === undefined) {
        window.alert('No player chosen!');
        return 1;
    }
    else if (taken[index] === true) {
        window.alert('Not an empty cell!')
        return 1;
    }
    else if (player === 'X') {
        cells[index].classList.add(`markedx`);
        values[index] = 'X';
        taken[index] = true;
        counter++;
        player = 'O';
    }
    else if (player === 'O') {
        cells[index].classList.add(`markedo`);
        values[index] = 'O';
        taken[index] = true;
        counter++;
        player = 'X';
    }
    checkForWinner();
    return;
}

function checkForWinner() {
    if (values[0] === 'X' && values[4] === 'X' && values[8] === 'X') {
        gameWon('X');
    }
    else if (values[2] === 'X' && values[4] === 'X' && values[6] === 'X') {
        gameWon('X');
    }
    else if (values[0] === 'X' && values[1] === 'X' && values[2] === 'X') {
        gameWon('X');
    }
    else if (values[3] === 'X' && values[4] === 'X' && values[5] === 'X') {
        gameWon('X');
    }
    else if (values[6] === 'X' && values[7] === 'X' && values[8] === 'X') {
        gameWon('X');
    }
    else if (values[0] === 'X' && values[3] === 'X' && values[6] === 'X') {
        gameWon('X');
    }
    else if (values[1] === 'X' && values[4] === 'X' && values[7] === 'X') {
        gameWon('X');
    }
    else if (values[2] === 'X' && values[5] === 'X' && values[8] === 'X') {
        gameWon('X');
    }
    else if (values[0] === 'O' && values[4] === 'O' && values[8] === 'O') {
        gameWon('O');
    }
    else if (values[2] === 'O' && values[4] === 'O' && values[6] === 'O') {
        gameWon('O');
    }
    else if (values[0] === 'O' && values[1] === 'O' && values[2] === 'O') {
        gameWon('O');
    }
    else if (values[3] === 'O' && values[4] === 'O' && values[5] === 'O') {
        gameWon('O');
    }
    else if (values[6] === 'O' && values[7] === 'O' && values[8] === 'O') {
        gameWon('O');
    }
    else if (values[0] === 'O' && values[3] === 'O' && values[6] === 'O') {
        gameWon('O');
    }
    else if (values[1] === 'O' && values[4] === 'O' && values[7] === 'O') {
        gameWon('O');
    }
    else if (values[2] === 'O' && values[5] === 'O' && values[8] === 'O') {
        gameWon('O');
    }
    else if (counter == 9) {
        window.alert("It's a tie!");
    }
    return;
}

function clearAll() {
    window.location = window.location.href;
    return;
}

function gameWon(player) {
    if (player === 'X') {
        if (!nameX || nameX === 'X') {
            window.alert(`Player ${player} won!`);
        }
        else {
            window.alert(`${nameX} won!`);
        }
    }
    else if (player === 'O') {
        if (!nameO || nameO === 'O') {
            window.alert(`Player ${player} won!`);
        }
        else {
            window.alert(`${nameO} won!`);
        }
    }
    return;
}