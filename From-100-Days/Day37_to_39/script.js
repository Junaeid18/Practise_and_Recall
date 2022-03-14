const val = 10;
if (val === 10) {
    const var1 = document.querySelector("h1");
    const var2 = document.getElementById("btn2");
    var2.classList.remove("prop");
    var2.classList.add("prop2");
    var1.remove();
}

let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("User is not logged in");
}

let names = "";
if (names) {
    console.log("nothing");
}
