// Function statment

// function greet(name){
//     console.log("Hello" + name);
// }

// Using function expression

var greetFucn = function(name){
    console.log("Hello " + name);
}

// Using an iife

var greeting = function(name){
    return "Hello " + name
}("Jav");


console.log(greeting)

const x = (function(name){
    var greeting = "Inside IIFE : Hello";
    return greeting + name
})("Javid");

const y = (function(name){
    var greeting = "Inside IIFE : Hai";
    return greeting + name
})("Jagan");

console.log(x)
console.log(y)

const name = "Jagan";

const tamilGreet = (function(name , languguage){
    const greet = "Hello " + name + " " + languguage;
})


const englishGreet = (function(name, languagge){
  const greet = "Hello " + name + " " + languguage;
})










