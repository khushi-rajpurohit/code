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
//print even no 1-100
for(let num=0;num<=100;num++){
    if(num%2 == 0){
        console.log(num)
    }
}

//strings
// --> string interpolation ==> template literals usage to substitue placeholders using ${}
// --> n/ and t/ ==> escape  characters for line change and tab space


//string methods -- built in functions to manupulate strings ..
// original string doesnt change beacuse strings are immutables

let str5 = "Perfection is on Way   ";
console.log(str5.toUpperCase()); 
console.log(str5.toLowerCase());
console.log(str5.trim());
console.log(str5.slice(2,4));
console.log(str5.replace("P","F")); //for once replaceAll to replace every time
console.log(str5.charAt(5));

//prompt
let  fullName = prompt("Enter your full name");
let userName = "@"+  fullName + fullName.length;
console.log(userName);


