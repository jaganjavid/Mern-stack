const num1 = 100;
const num2 = 50;

let val;

// Simple Math with Numbers

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object

val = Math.PI;
val = Math.round(2.1);
val = Math.ceil(2.1);  // Upper number
val = Math.floor(2.9);  // Lower number
val = Math.sqrt(64);
val = Math.abs(-5); // always return the positive value
val = Math.min(-1,4,6,7,8,9);
val = Math.max(-1,4,6,7,8,9);
val = Math.random();

val = Math.floor(Math.random() * 20);


console.log(val);