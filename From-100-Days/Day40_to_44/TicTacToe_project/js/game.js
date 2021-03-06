function gameReset() {
    activePlayer = 0;
    currentRound = 1;
    gameOverStatus = false;
    gameOver.firstElementChild.innerHTML =
        'You won, <span id="nameOfWinner">Player Name</span>!';
    gameOver.style.display = "none";
    let index = 0;
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            gameData[i][j] = 0;
            const gbc = gameArea.children[index];
            gbc.textContent = "";
            gbc.classList.remove("disabled_board");
            index++;
        }
    }
}

function ShowGameSection() {
    if (info[0].name === "" && info[1].name === "") {
        alert("Please add player name !");
        return;
    }
    gameReset();
    console.log(activePlayer);
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
    if (event.target.tagName !== "LI" || gameOverStatus) {
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
    //console.log(gameData);
    const winnerId = gameIsOver();
    console.log(winnerId);

    if (winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;
    switchPlayer();
}

function gameIsOver() {
    //for Row check
    for (let i = 0; i < 3; ++i) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            //console.log("yes from row");
            return gameData[i][0];
        }
    }
    //for column check
    for (let i = 0; i < 3; ++i) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]
        ) {
            //console.log("yes from column");
            return gameData[0][i];
        }
    }
    //Left to Right Diagonal Check
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        //console.log("yes from Left Diagonal");
        return gameData[0][0];
    }
    //Right to left Diagonal Check
    if (
        gameData[0][2] > 0 &&
        gameData[0][2] === gameData[1][1] &&
        gameData[1][1] === gameData[2][0]
    ) {
        //console.log("yes from Right Diagonal");
        return gameData[2][0];
    }
    if (currentRound === 9) {
        return -1;
    }
    return 0;
}

function endGame(winnerId) {
    gameOverStatus = true;
    gameOver.style.display = "block";
    if (winnerId > 0) {
        const name = info[winnerId - 1].name;
        gameOver.firstElementChild.firstElementChild.textContent = name;
        //console.log(name);
        //winnerName.textContent = name;
        //still don't know why this wasn't working
    } else {
        gameOver.firstElementChild.textContent = "It's a Draw.";
    }
}
