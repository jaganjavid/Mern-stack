

const firstName = "Jagan";
const lastName = "Javid";
const age = 26;
const str = "Hello there my name is Jagan";
const tags = "web dev, coding, uiux";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + "Doe";

val += "Doe";

val = "Hello , my name is " + firstName + " " + "and I am " + age;

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change case

// val = firstName.toLowerCase();
// val = firstName.toUpperCase();

// Get the index of string
val = firstName[0];
val = firstName[1];
val = firstName[5];

// CharAT
val = firstName.charAt(2);

// Get the last Index
val = firstName.charAt(firstName.length - 1);

// Slice 
const fruit = "Apple";
val = fruit.slice(0,3);

// Split
val = str.split(",");
val = str.split(",");

// Replace
val = str.replace("Jagan", "Javid");

// Include
val = str.includes("namee")

console.log(val);