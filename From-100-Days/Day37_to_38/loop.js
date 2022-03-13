//loop-1 example

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ["Junaeid", "Nipa", "Jubaeir"];
for (const person of users) {
    console.log(person);
}

const human = { name: "Junaeid", gender: "male", age: 20 };
for (const property in human) {
    console.log(human[property]);
}
