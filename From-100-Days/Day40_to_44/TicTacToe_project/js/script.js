let playerid = 0;

const info = [
    {
        name: "",
        symbol: "X",
    },
    {
        name: "",
        symbol: "O",
    },
];

const configOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");
const errormsg = document.getElementById("errMsg");
const gameSection = document.getElementById("game");

const overlayCancelBtn = document.getElementById("cancel_btn");
const overlayConfirmBtn = document.getElementById("confirm_btn");
const formInput = document.querySelector("form");
const startGame = document.getElementById("start_game");

const editbtn1 = document.getElementById("edit_player1");
const editbtn2 = document.getElementById("edit_player2");

editbtn1.addEventListener("click", editPlayer);
editbtn2.addEventListener("click", editPlayer);

backDropElement.addEventListener("click", closeOverlays);
overlayCancelBtn.addEventListener("click", closeOverlays);
formInput.addEventListener("submit", savePlayerConfig);
startGame.addEventListener("click", ShowGameSection);
