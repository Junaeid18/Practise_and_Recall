function ShowGameSection() {
    if (info[0].name === "" && info[1].name === "") {
        alert("Please add player name !");
        return;
    }
    activePlayerName.textContent = info[activePlayer].name;
    gameSection.style.display = "block";
}

function switchPlayer() {
    if (activePlayer == 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerName.textContent = info[activePlayer].name;
}

function selectedListArea(event) {
    if (event.target.tagName !== "LI") {
        return;
    }
    const selectedBox = event.target;
    //console.dir(selectedBox);
    const sbRow = selectedBox.dataset.row - 1;
    const sbCol = selectedBox.dataset.col - 1;
    //console.log(sbRow + "  " + sbCol);

    if (gameData[sbRow][sbCol] > 0) {
        alert("Please choose an empty field.");
        return;
    }

    event.target.textContent = info[activePlayer].symbol;
    event.target.classList.add("disabled_board");

    gameData[sbRow][sbCol] = activePlayer + 1;
    console.log(gameData);
    const winnerId = gameIsOver();
    console.log(winnerId);

    currentRound++;
    switchPlayer();
}

function gameIsOver() {
    //for Row check
    for (let i = 0; i < 3; ++i) {
        if (
            gameData[i][0] > 0 &&
            (gameData[i][0] === gameData[i][1]) === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }
    //for column check
    for (let i = 0; i < 3; ++i) {
        if (
            gameData[0][i] > 0 &&
            (gameData[0][i] === gameData[0][i]) === gameData[0][i]
        ) {
            return gameData[0][i];
        }
    }
    //Left to Right Diagonal Check
    if (
        gameData[0][0] > 0 &&
        (gameData[0][0] === gameData[1][1]) === gameData[2][2]
    ) {
        return gameData[0][0];
    }
    //Right to left Diagonal Check
    if (
        gameData[0][2] > 0 &&
        (gameData[0][2] === gameData[1][1]) === gameData[2][0]
    ) {
        return gameData[2][0];
    }
    if (currentRound === 9) {
        return -1;
    }
    return 0;
}
