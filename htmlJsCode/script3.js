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

let arr3 = [1, 2, 4, 2, 4, 5, 6, 7, 6, 7]
const removeDuplicates = (arr3) => {
    for (let i = 0; i < arr3.length; i++) {
        let word1 = arr3[i];
        for (let j = i + 1; j < arr3.length; j++) {
            let word2 = arr3[j];
            if (word1 === word2) {
                arr3.splice(j, 1);
                j--; // Decrement j to account for the removed element  
            }
        }
    }
    return arr3;
    console.log(arr3)
}
//remove the duplicate values from the array
const removeDuplicatesFromArr = (arr) => {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr;
}
console.log(removeDuplicatesFromArr(arr3_0));


//sum of elements
let arr4 = [1, 2, 3, 4, 5];
const sumOfArr = (arr4) => {
    let sum = 0;
    for (let i = 0; i < arr4.length; i++) {
        sum = sum + arr4[i];

    }

    return sum;
}
console.log(sumOfArr(arr4))

//returning the largest element
const largestNo = (arr) => {
    let maxNo = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNo) {
            maxNo = arr[i]
        }
    }
    return maxNo;
}
console.log(largestNo(arr4))

// cont the frequency of target value in arr

const countFrequency = (arr, target) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count = count + 1
        }
    }
    return count;
}
console.log(countFrequency(arr3_0, "apple"))

// reverse the array
const reverseArr = (arr) => {
    let reversedArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    return reversedArr;
}
console.log(reverseArr(arr4))

// find the index of target value in arr
const findIndex = (arr, target) => {
    let index
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {
            index = i
        } else if (arr[i] !== target) {
            index = "Not found in arr"
        }

    }
    return index
}
console.log(findIndex(arr4, 44))

console.log(arr4.indexOf(3)) // returns the index of the first occurrence of the specified value in the array, or -1 if it is not present;

// return indices of the two numbers such that they add up to target

const sumTarget = (arr, target) => {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (i != j && arr[i] + arr[j] === target) {
                indices.push(i, j)
            }
        }
    }
    return indices
}
console.log(sumTarget(arr4, 6))

// // find the intersection of two arrays
const intersection = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i])
        }
    }
    return result;
}
arr5 = [3, 5, 6, 8, 9]
console.log(intersection(arr4, arr5))

// Product of Array Except Self
const productArr = (arr) => {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }
        answer.push(product)
    }
    return answer
}

console.log(productArr(arr4))

// give sets of  of three unique elments such that there sum is 0

const threeSum = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length ; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0 && i !== j && j !== k && i !== k) {
                    let triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
                    if (!result.some(r => r[0] === triplet[0] && r[1] === triplet[1] && r[2] === triplet[2])) {
                        result.push(triplet);
                    }
                }
            }
        }
    }
    return result;
}

console.log(threeSum([0, -1, 2, -3, 1, 4, -2, 3, -1]));


//rotate the array by k elements
const rotate = (arr, k) => {
    k = k % arr.length; // Handle cases where k is greater than the array length
    let rotatedArr = arr.slice(-k).concat(arr.slice(0, arr.length - k));
    console.log(rotatedArr);
    return rotatedArr;
}
let arr6 = [1, 2, 3, 4, 5, 6, 7];
rotate(arr6, 3);
