//arrays
let arr1 = [1, 2, 3, 4, 5]; //arrays are mutable --> values at index can be changed
arr1[0] = 0;
console.log(arr1); // [0, 2, 3, 4, 5]

let arr2 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(arr2.shift()) // removes the first element of the array and returns it
console.log(arr2);

arr2.splice(1, 1, "Ola") // removes the element at index 1 and replaces it with "Ola" and returns the removed element
console.log(arr2);

arr2.push("Amazon") // adds "Amazon" at the end of the array and returns the new length of the array
console.log(arr2);

