console.log("Loops Practice");

//for loop
let array = "abcdefghijklmnopqrstuvwxyz"
for (let i = 0; i < array.length; i += 5) {
    console.log(array[i])
}

let sum = 0;
let n = 4;
for (let i = 1; i <= n; i++) {
    sum = sum + i
}
console.log(sum)

//while loop
m = 1
while (m < 7) {
    console.log("practicing");
    m++;
}
//do-while loop --> will execute at least once
let q = 2
do {
    console.log("hello world")
    q++
} while (q < 5);

//for...of loop --> itterate over strings and arrays values
let str = "JavaScript";
for (let char of str) {
    console.log(char);
}
//for...in loop --> itterate over objects keys
let school = {
    name: "Pathshala",
    teachers: 30,
    students: 900,
}
for (let key in school) {
    console.log(school[key])
}
