
// IIFE

(function(global, name){
    var greeting = "Hey";

    global.greeting = "Vanakam";

    console.log("IIFE", greeting + " " + name);
})(window, "Javid");

console.log(greeting);

var greeting = "Hola";

console.log(greeting);



// function test(){
//     var greet = "Hello";

//     return greet;
// }

// function test2(){
//     var greet = "Hola";

//     return greet;
// }

// console.log(test());
// console.log(test2());