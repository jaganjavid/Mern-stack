// By value (primitive types)

var a = 5;
var b;

b = a;

a = 2;


console.log(a);
console.log(b);

// By Reference (all object)

var c = {
    greeting : "HI"
}

var d;

d = c;

console.log(c)
console.log(d)

d.greeting = "Hello";


console.log(c)
console.log(d)



