const configOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");

const overlayCancelBtn = document.getElementById("cancel_btn");
const overlayConfirmBtn = document.getElementById("confirm_btn");

const editbtn1 = document.getElementById("edit_player1");
const editbtn2 = document.getElementById("edit_player2");

editbtn1.addEventListener("click", editPlayer);
editbtn2.addEventListener("click", editPlayer);
