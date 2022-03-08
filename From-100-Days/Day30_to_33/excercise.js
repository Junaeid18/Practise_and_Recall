let a = "javascript",
    b = 20,
    c = ["learn web development", "become web developer"];

/* alert(a);
alert(b);
alert(c); */

let course = { a, b, c };
/* alert(course.a);

alert(course.c[1]); */

function accessListItem(arr, arrInd) {
    let element = arr[arrInd];
    return element;
}

let firstgoal = accessListItem(course.c, 0);
alert(firstgoal);
