let val;


// Number to string
val = String(555);
val = String(5 + 5);

// Bool to string
val = String(true);

// String to number
val = Number("5");
val = Number("5 + 5"); // Nan = Not a Number

// Arr to Number
val = Number([1,2,3,"Hello"]); // NaN

// Boolean to number
val = Number(true);
val = Number(false);
val = Number(null);

val = Number("Hello"); // NaN

val = parseInt("110.11");
val = parseFloat("110.11");






console.log(val);
console.log(typeof val);