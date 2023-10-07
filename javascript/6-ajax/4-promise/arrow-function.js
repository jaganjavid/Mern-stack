
// const sayHello = function(){
//     console.log("Hello");
// }

// sayHello();

// Arrow function 

// const sayHello = () => {
//     console.log("Hello");
// }

// one line function does not need a braces

// const sayHello = () => console.log("Hello")

// One line return
// const sayHello = () => "Hello";

// const sayHello = function(){
//     return "Helllo"
// }

// Return object 
// const sayHello = () => ({msg: "Hello"})

// Single params does not need a parenthesis

// const sayHello = name => console.log(`Hello ${name}`);
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Jagan", "Javid")

const users = ["Jagan", "Arun", "Dinesh"];

users.forEach(function(user){
    console.log(user)
})

users.forEach((user) => {
    console.log(user);
})

const myUser = users.map((user) => {
    return user.length;
})


console.log(myUser);