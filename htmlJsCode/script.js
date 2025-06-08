for (let i = 4 ; i>0;i--){
    console.log(i)
}
//using for loop to print numbers from 0 to 9

let a = 1
let sum = 0

while( a<11){
     sum = sum +a
    a++
}
console.log(sum)

// Using for...of loop to iterate over a string
// This will print each character in the string on a new line
let str = " JavaScript";
for(let akshar of str){
    console.log(akshar)
}


for (var i=0 ;i<21;i++){
    if(i%2 !==0){
        console.log("oddnumbers are : " , i)
    }
}

// Using for loop to calculate factorial of 5

let fact = 1;

for(let i=5 ;i>0;i--){
    fact = fact * i
}
console.log(fact)

// Using nested for loop to print a pattern of numbers
var value=1
for(var i=1;i<4;i++){
    var string = ""
    for(var j=1; j<4 ;j++){
        string += value;
        value++
    }
    console.log(string)
}
// Using for loop to print an array in reverse order
let arr1 = [1,2,3,4,5]
for(var i=arr1.length-1;i>=0;i--){
   
    console.log(arr1[i])
}

