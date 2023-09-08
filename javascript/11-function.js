

// Two phases

// 1 - creation
// 2 - Excutation

// Function Declaraction || Function Statement

function greet(firstName = "John", lastName = "Doe"){
    
// Default Value 

//    if(typeof firstName === "undefined") {
//     firstName = "John"
//    }
//    if(typeof lastName === "undefined") {
//     lastName = "Doe"
//    }

   console.log(firstName, lastName);
   
}


// function calling
greet("Jagan", "Javid");

// Function Expression

const add = function(x = 10 , y = 15){
    console.log(x + y);
}

add(5, 5);

// An IIFE (Imediately Invoked Function Expression)

// "Hello"
// 5
// true
// 5 + 5;
// 5 - 5;
// 5 * 5;
// 5 / 5;

// (5 + 5)

(function(name){
    console.log(name);
})("Jagan");

const person = {
    firstName : "Jagan", 
    lastName: "Javid",
    getFullName: function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

console.log(person.getFullName())

// function x(a){
//     console.log("Hello")
//     a();
// }

// const b = function(){
//     console.log("Vanakam");
// }


// x(b);

// const d = "im d";

// function c(value){
//  console.log(value)
// }

// c(d);

// test1();

// function test1() {
//     console.log("This is a test1 function");
// }

// const test2 = function(){
//     console.log("This is a test2 function");
// }

// test2();







