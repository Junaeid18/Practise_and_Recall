let inputBox = document.querySelector("input");

function changeTarget(event) {
    let string = event.target.value;
    let stringLength = string.length;
    let num = 60 - stringLength;
    document.getElementById("targetNumber").innerHTML = num;
    console.log(stringLength);
}

inputBox.addEventListener("input", changeTarget);
