/* console.log(window); */
console.dir(document);

//document.body.children[1].children[0].href = "http://google.com";

/* let link = document.getElementById("weblink");
link.href = "https://google.com";
 */

/* 
let link = document.querySelector("a");
link.href = "https://google.com";
 */
let header1 = document.body.children[0];
console.log(header1);
let parent = header1.parentNode;
console.log(parent);
let sibling = header1.parentNode.children[1];
console.log(sibling);

let header2 = document.getElementById("hselect");
console.log(header2);
let para = document.querySelector("p");
console.log(para);

para.textContent = "Hoye gese change bro!!!!!!!!!!!";
