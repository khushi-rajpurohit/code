for (let i = 4; i > 0; i--) {
    console.log(i)
}
//using for loop to print numbers from 0 to 9

let a = 1
let sum = 0

while (a < 11) {
    sum = sum + a
    a++
}
console.log(sum)

// Using for...of loop to iterate over a string
// This will print each character in the string on a new line
let str = " JavaScript";
for (let akshar of str) {
    console.log(akshar)
}


for (var i = 0; i < 21; i++) {
    if (i % 2 !== 0) {
        console.log("oddnumbers are : ", i)
    }
}

// Using for loop to calculate factorial of 5

let fact = 1;

for (let i = 5; i > 0; i--) {
    fact = fact * i
}
console.log(fact)

// Using nested for loop to print a pattern of numbers
var value = 1
for (var i = 1; i < 4; i++) {
    var string = ""
    for (var j = 1; j < 4; j++) {
        string += value;
        value++
    }
    console.log(string)
}
// Using for loop to print an array in reverse order
let arr1 = [1, 2, 3, 4, 5]
for (var i = arr1.length - 1; i >= 0; i--) {

    console.log(arr1[i])
}
//method=> console.log(arr1.reverse())
//but using for loop to reverse an array 

for (i = 0; i < Math.floor(arr1.length / 2); i++) {
    var temp = arr1[i];
    arr1[i] = arr1[arr1.length - 1 - i];
    arr1[arr1.length - 1 - i] = temp;

}
console.log(arr1)

// Using while loop to print numbers from 1 to 100 that are divisible by 5
var num = 1
while (num < 101) {
    if (num % 5 === 0)
        console.log(num)
    num++

}

var object = {
    name: "Khushi",
    lastName: "Rajpurohit",
    email: "rajpurohitkhushi362gmail.com",
    age: 20,
}
for (let key in object) {
    console.log(key);

}

var movies = ["Avengers","Housefull","Kungfu Panda","Neemo","Welcome"];

for(let i=0;i<movies.length;i++){
    console.log(movies[i])
   
}
// Using forEach to iterate over an array
movies.forEach(function(value){
    console.log(value)
})

//logging 2nd element of array
console.log(movies[1])

movies.unshift("Shkatiman","Mahabharat");  //adding elements at the beginning of the array
console.log(movies)     
movies.push("Krrish","Dangal"); //adding elements at the end of the array
console.log(movies)
console.log(movies.pop())  //removing last element of the array
console.log(movies)
console.log(movies.slice(0,3)) //slicing the array from index 0 to 3
console.log(movies.splice(1,2)) //removing 2 elements from index 1
console.log(movies)
console.log(movies.indexOf("Kungfu Panda")) 
console.log(movies.includes("Neemo"))
console.log( movies.concat(arr1)) 

// Using for loop to sort an array using bubble sort algorithm
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. 
var arr2 = [5,2,9,8];
for(let i=0;i<arr2.length;i++){
    for(let j = 0;j<arr2.length -1;j++){
if(arr2[j]>arr2[j+1]){
    var temp = arr2[j];
    arr2[j]= arr2[j+1];
    arr2[j+1]= temp
}
    }
}
console.log(arr2)

