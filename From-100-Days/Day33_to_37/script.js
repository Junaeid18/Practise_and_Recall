let header1 = document.querySelector("h1");

function makeTheChange() {
    header1.textContent = "Clicked";
    console.log("boss it's clicked");
}

header1.addEventListener("click", makeTheChange);

let userInput = document.querySelector("input");

function retrieveUserInput() {
    let userInputTillNow = userInput.value;
    console.log(userInputTillNow);
}

userInput.addEventListener("input", retrieveUserInput);
