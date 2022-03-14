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
