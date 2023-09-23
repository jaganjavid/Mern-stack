// String

const name1 = "Jagan"; // primitive types
const name2 = new String("Javid");

// Number

const num1 = 5;
const num2 = new Number(7);

// console.log(num1, num2, typeof num1, typeof num2)

// boolean

const bool1 = true;
const bool2 = new Boolean(false);

// console.log(bool1, bool2);

// Function

const getsum = function(x, y){
    return x + y;
}

const getsum2 = new Function("x", "y", "return x + y");


// console.log(getsum(5, 5))
// console.log(getsum2(10, 10))

// Array
const arr1 = [1,2,3]; // ***

const arr2 = new Array(1,2,3);

console.log(arr1, arr2);

// console.log(typeof arr1, typeof arr2);

// Object

const jagan = {name:"Jagan"}

const javid = new Object({name: "jagan"});

console.log(jagan,javid);
console.log(typeof jagan,typeof javid);



// console.log(name1, name2);
// console.log(typeof name1, typeof name2);

// console.log(name1.indexOf("a"));

// console.log(name2.indexOf("a"));