function ShowGameSection() {
    if (info[0].name === "" && info[1].name === "") {
        alert("Please add player name !");
        return;
    }
    gameSection.style.display = "block";
}
