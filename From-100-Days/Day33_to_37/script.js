/* console.log(window); */
//console.dir(document);

//document.body.children[1].children[0].href = "http://google.com";

/* let link = document.getElementById("weblink");
link.href = "https://google.com";
 */

/* 
let link = document.querySelector("a");
link.href = "https://google.com";
 */

/* 
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
 */
//inserting html elements
let link = document.createElement("a");
link.href = "https://google.com";
link.textContent = " Check me here bro !";

let para = document.querySelector("p");
para.append(link);

//deleting html elements
/* let delel = document.querySelector("h1");
delel.remove();
 */

//moving html elements
//use this :  //link.parentElement.append(delel);

//or use this:
/* 
let childele = document.querySelector("h1");
let parentele = document.querySelector("h1").parentNode;
parentele.insertBefore(para, childele);
 */
console.log(para.innerHTML);
//para.textContent = "ok this is <strong> it </strong>";
para.innerHTML = "ok this is <strong> it </strong>";
//para.append.innerHTML = "ok this is <strong> it </strong>";
console.log(para.innerHTML);
