// Primitive types and Reference types

// Hold a single value

// 7 types => only 5 type are main

// String
const name = "Jagan";

// console.log(name);
// console.log(typeof name);

// Number
const age = 26;

// console.log(age);
// console.log(typeof age);

// Boolean
const hasGuns = true;

// console.log(hasGuns)
// console.log(typeof hasGuns)

// Null
const gun = null;

// console.log(gun);
// console.log(typeof gun);

// Undefined
let undef;

// console.log(undef)
// console.log(typeof undef)

// Bigint
const alsoHuge = BigInt(9007199254740991);

// console.log(alsoHuge)
// console.log(typeof alsoHuge)

// Symbol
const symbol = Symbol("Hello");

// console.log(symbol);
// console.log(typeof symbol);


// Reference Types - objects

// Can hold a mutiple values

// Array

const myArr = ["jagan", "javid", 26, true, null, undefined];

console.log(myArr[0]);
console.log(typeof myArr);

// Object

// Key:Value or Name:Value pairs

const car = {
    // Properties
    name: "BMW",
    color: "Black",
    model: "X5",
    year: 2023,
    // Methode
    start: function(){
        console.log("Im started");
    }
}

console.log(car.name);
console.log(car.model);
car.start();
console.log(typeof car)




