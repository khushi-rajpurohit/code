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

// removing duplicate values
let arr3_0 = ["apple", "banana", "mango", "apple", "kivi", "kivi", "orange", "banana", "apple"];

let uA = new Set(arr3_0)
console.log(uA); // Set { 1, 2, 3, 4, 5 }

let arr3=[ 1,2,4,2,4,5,6,7,6,7]
const removeDuplicates = (arr3) => {
    for (let i = 0; i < arr3.length; i++) {
        let word1 = arr3[i];
        for (let j = i+1; j < arr3.length; j++) {
            let word2 = arr3[j];
            if(word1===word2 ){
                arr3.splice(j,1);
                j--; // Decrement j to account for the removed element  
            }
            
        }
       

    }
    return arr3;
    console.log(arr3)
}


//sum of elements
let arr4 = [1, 2, 3, 4, 5];
const sumOfArr = (arr4)=>{
    let sum = 0;
    for(let i =0;i<arr4.length;i++){
        sum = sum +arr4[i];
       
    }
    
    return sum;
}
console.log(sumOfArr(arr4))