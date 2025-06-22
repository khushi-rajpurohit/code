//closure
// A closure is a fundamental concept in JavaScript where an inner function remembers and can access variables from its outer (enclosing) scope, even after the outer function has finished executing

function makeCounter(){
    let count = 0;
 return function(){
    count++;
    console.log(count);
 }
}

let count1 = makeCounter();
count1(); // 1
count1(); // 2
count1(); // 3

let count2 = makeCounter();
count2(); // 1              

count1(); // 4  //Each time counter1() is called, it accesses and increments its own private count variable
count2(); // 2 //These calls interact with counter2's own, independent count variable. They don't affect counter1's count

//example 2

function greeter (preifx){
    return function (name){
        console.log(`${preifx} ${name}!`);
    }
}
let greetHello = greeter("Hello");
let greetNamste = greeter("Namaste");

greetHello("Khushi"); // Hello Khushi!
greetNamste("Khushi"); // Namaste Khushi!