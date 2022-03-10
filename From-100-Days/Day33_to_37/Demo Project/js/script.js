const inputBox = document.querySelector("input");

function changeTarget(event) {
    const string = event.target.value;
    const stringLength = string.length;
    const num = 60 - stringLength;
    const item = document.getElementById("targetNumber");
    item.innerHTML = num;
    if (num < 11) {
        item.classList.add("warning");
    }
    //console.log(stringLength);
}

inputBox.addEventListener("input", changeTarget);
