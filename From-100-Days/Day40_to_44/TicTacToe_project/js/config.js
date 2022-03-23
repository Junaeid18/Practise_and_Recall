function editPlayer(event) {
    //configOverlayElement.classList.add("enabled");
    //backDropElement.classList.add("enabled");
    //console.log("here");
    // Can't do backDrop using this way bcz it has no class where the
    // display property is initialized, so when we are adding enabled
    // class it is overwritten by it's default css which display none.
    playerid = +event.target.dataset.playerid;
    //console.log(playerid);
    configOverlayElement.style.display = "block";
    backDropElement.style.display = "block";
}

function closeOverlays() {
    configOverlayElement.style.display = "none";
    backDropElement.style.display = "none";
    formInput.firstElementChild.classList.remove("error");
    errormsg.textContent = "";
    formInput.firstElementChild.children[1].value = "";
}

function savePlayerConfig(event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    let enteredPlayerName = formdata.get("pname").trim();
    console.log(enteredPlayerName);
    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add("error");
        errormsg.textContent = "Please enter a valid name";
        return;
    } /* else {
        formInput.firstElementChild.classList.remove("error");
        errormsg.textContent = "";
        configOverlayElement.style.display = "none";
        backDropElement.style.display = "none";
        formInput.firstElementChild.children[1].value = "";
    } */

    const playerchoosed = document.getElementById(
        "player-" + playerid + "-info"
    );
    playerchoosed.children[1].textContent = enteredPlayerName;
    info[playerid - 1].name = enteredPlayerName;

    closeOverlays();
}
