
function romanToInt(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        
        const currentValue = romanValues[s[i]];
    

        // If the current value is smaller than the previous value, subtract it
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        // Update the previous value for the next iteration
        prevValue = currentValue;
    }

    return result;


}

// Example usage:
const romanNumeral = "XXVII";
const integerEquivalent = romanToInt(romanNumeral);
console.log(integerEquivalent); // Output: 27

// console.log(romanNumeral[4]);




// const romanValues = {
//     'I': 1,
//     'V': 5,
//     'X': 10,
//     'L': 50,
//     'C': 100,
//     'D': 500,
//     'M': 1000
// };


// console.log(romanValues);


// const obj = {
//     test: "my test"
// }


// console.log(obj["test"]);



