const name = "Jagan";
const age = 25;
const job = "web developer";
const city = "Chennai";

let val;

// WIthout template strings

// val = "My name is " + name + " " + "im" + " " + age + " " + " my job is " + job;

// with template strings (es6)
val = `My name is ${name} im ${age} and my job is ${job} from ${city} and ${5 + 5}`;

console.log(val);