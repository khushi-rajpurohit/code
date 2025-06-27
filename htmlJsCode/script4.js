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

//Oops

//inheritance

class Animal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

//child class

class Dog extends Animal{
    constructor(name , breed){
        super(name); 
        this.breed = breed; 
    }
    bark(){
        console.log(`${this.name} is barking`);
    }
}

const Doggy = new Dog("Tommy","A");

Doggy.bark()
Doggy.eat()


//  for button

class Button {
    constructor(text,id){
        this.text = text;
        this.id = id;
        this.buttonComoponent = this.createButtonElement(); 
        this.addBaseStyle();
}
createButtonElement(){
    const btn = document.createElement("button");
    btn.textContent = this.text;
    btn.id = this.id;
    return btn;
}
addBaseStyle(){
    this.buttonComoponent.style.padding = "10px 20px";
    this.buttonComoponent.style.backgroundColor = "#4CAF50";
    this.buttonComoponent.style.color = "white";
    this.buttonComoponent.style.borderRadius = "5px";
    this.buttonComoponent.style.cursor = "pointer";
}
onClick(callback){
    this.buttonComoponent.addEventListener("click",callback)
}
render(parentElement){
    parentElement.appendChild(this.buttonComoponent);
}
}

//
class SubmitButton extends Button {
    constructor(text="Submit", id){
        super(text, id);
        this.buttonComoponent.type = "submit"; 
        this.addSubmitStyle();
    }
    addSubmitStyle(){
        this.buttonComoponent.style.backgroundColor = "#008CBA"; // Different color for submit button
    }
    
}

const appDiv = document.getElementById('app') || document.body; // Ensure we have a place to render

const defaultBtn = new Button("Click Me");
defaultBtn.onClick(() => console.log("Default button clicked!"));
defaultBtn.render(appDiv);

const submitBtn = new SubmitButton("Save Data", "saveBtn");

submitBtn.onClick(() => console.log("Submit button logic here!")); // You can still add more click handlers
submitBtn.render(appDiv);

function findLargestNumber(arr) {
  if (arr.length === 0) {
    return undefined; // Or throw an error, depending on requirements for an empty array
  }

  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

const numbers = [12, 5, 28, 9, 33, 17];
console.log(findLargestNumber(numbers));