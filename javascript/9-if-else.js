

// if(something){
//     do something
// } else {
//     do something else
// }


const id = 100;

// This == only check for the value

// Equal To

if(id == 100){
    console.log("Correct");
} else {
    console.log("Incorrect");
}

// Not Equal to

if(id != 101){
    console.log("Correct");
} else {
    console.log("Incorrect");
}


// This === check for both the value and type

// Equal to both value and type

if(id === 100){
    console.log("Correct")
} else{
    console.log("Incorrect")
}

// Not Equal to both value and type

if(id !== 101){
    console.log("Correct")
}else {
    console.log("Incorrect")
}

// Test if undefined
let greet = "";

if(typeof greet === "undefined"){
    console.log("Correct")
}else {
    console.log("Incorrect")
}

// Greater or Less than

if(id >= 100){
    console.log("Correct")
}else {
    console.log("Incorrect")
}

if(id <= 99){
    console.log("Correct")
}else {
    console.log("Incorrect")
}

// if else

const color = "green";

if(color === "red"){
    console.log("Color is red")
} else if(color === "blue"){
    console.log("Color is blue")
} else if (color === "orange"){
    console.log("Color is orange")
} else {
    console.log("I dont know the color");
}

// Logical -- && Operator both value True - False

const name = "jagan";
const age = 18;

if(age > 0 && age < 12){
    // console.log(`${name} is a child`)
    console.log("Hello");
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is a adult`);
}

// OR - check only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not run the race`);
} else {
    console.log(`${name} can register for the race`);
}

// ES6 (Ternary operator)

console.log(100 === 101 ? "correct" : "Incorrect");


