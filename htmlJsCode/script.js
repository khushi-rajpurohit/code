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


