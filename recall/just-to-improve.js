const arr = [1,2,3];

// const result = arr.map(function(num){
//    return num * 2;
// })

// console.log(arr);
// console.log(result);

function customMap(array, callback){

    // Check if the 1st argument is an array
    if(!Array.isArray(array)){
        console.log("The first arugemnt must be an array");
    }

    // check id the second arugument is a function
    if(typeof callback !== "function"){
        console.log("The second arugemnt must be an function");
    }

    var newArray = [];

    for(var i = 0; i < array.length; i++){
        newArray.push(callback(array[i], i, array));
    }

    // return the new array
    return newArray;    

}

var numbers = [1,2,3,4,5,6];

var doubledNumber = customMap(numbers, function(element, index, array){
    return element * 2;
})

console.log(doubledNumber);


function customForEach(array, callback){

     // Check if the 1st argument is an array
     if(!Array.isArray(array)){
        console.log("The first arugemnt must be an array");
    }

     // check id the second arugument is a function
     if(typeof callback !== "function"){
        console.log("The second arugemnt must be an function");
    }

    for(var i = 0; i < array.length; i++){
       callback(array[i], i, array);
    }

}

customForEach(numbers, function(element, index){
    console.log("Element at index " + index + " " + element);
})


numbers.forEach(function(element, index){
    console.log("Element at index of builtIn" + index + " " + element);
})