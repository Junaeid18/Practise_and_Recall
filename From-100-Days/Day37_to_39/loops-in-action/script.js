//task-1

const sumTheSeries = document.getElementById("seriesSum");
function doTheSeriesSum() {
    const input = document.getElementById("user-number");
    const val = input.value;
    const res = document.getElementById("calculated-sum");
    //const val = event.target.value;
    let sum = 0;
    for (let i = 1; i <= val; ++i) {
        sum += i;
    }
    console.log(sum);
    res.textContent = sum;
    res.style.display = "block";
}
sumTheSeries.addEventListener("click", doTheSeriesSum);

//task-2

const btn = document.querySelector("#highlight-links button");
//console.dir(btn);
function highlightLinks() {
    const anchor = document.querySelectorAll("#highlight-links a");
    //console.dir(anchor);
    for (const anchorElements of anchor) {
        anchorElements.classList.add("highlight");
    }
}
btn.addEventListener("click", highlightLinks);

//task-3

const btn2 = document.querySelector("#user-data button");
const info = { name: "Junaeid", age: 20, gender: "male" };
function displayUserData() {
    const output = document.getElementById("output-user-data");
    output.innerHTML = "";
    for (const data in info) {
        const newElement = document.createElement("li");
        const outputText = data.toUpperCase() + ":" + info[data];
        newElement.textContent = outputText;
        output.append(newElement);
    }
}

btn2.addEventListener("click", displayUserData);
