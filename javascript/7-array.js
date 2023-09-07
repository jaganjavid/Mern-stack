// To create an array []

const numbers = [5,5,3,46,7,45,32,4,657,879,8]; // ***
// const numbers2 = new Array(4,657,879,8);

let val;

// Get the array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get a single value
val = numbers[0];
val = numbers[7];

// Find the index of value
val = numbers.indexOf(5);
// if array match is return the index number if not return -1

// Mutating Array

// Add on the end
// numbers.push(1000);

// Add on to front
// numbers.unshift(500);

// Take off from the end
// numbers.pop();
// numbers.pop();

// Take off from front
// numbers.shift();
// numbers.shift();
// numbers.shift();

// console.log(numbers);


const fruits = ["Apple", "Orange", "Kiwi"];

// Splice

// To Remove
// 1st - index, 2nd - remove element , 3rd add element
// fruits.splice(0,2);

// To Add
fruits.splice(2,1,"Lemon");

console.log(fruits);