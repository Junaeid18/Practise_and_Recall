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
    //console.log(gameData);
    switchPlayer();
}
