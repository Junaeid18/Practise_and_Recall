//task1

const btn1 = document.querySelector("button");
//console.log(btn1);
const btn2 = document.getElementById("btn-change-background");
//console.log(btn2);

//task2

function forBtn1() {
    //console.dir(btn1);
    var2.remove();
}
btn1.addEventListener("click", forBtn1);

function forBtn2(event) {
    //console.dir(event.target);
    var1.classList.add("highlighted");
    // var1.style.backgroundColor = "blue";  //another solution
}
btn2.addEventListener("click", forBtn2);

//task3

const var1 = document.body.children[2].children[1];
const var2 = document.body.children[2].children[3];
