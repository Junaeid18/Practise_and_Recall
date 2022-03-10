let header1 = document.querySelector("h1");

function makeTheChange(event) {
    header1.textContent = "Clicked";
    console.log("boss it's clicked");
    //console.log(event);
}

header1.addEventListener("click", makeTheChange);

let userInput = document.querySelector("input");

function retrieveUserInput(event) {
    //let userInputTillNow = userInput.value;
    let userInputTillNow = event.target.value;
    console.log(userInputTillNow);
}

userInput.addEventListener("input", retrieveUserInput);
