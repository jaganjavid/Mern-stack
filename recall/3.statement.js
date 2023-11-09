// Function Statement


greet();

function greet(){
    console.log("Hai");
}

greet();

// Function Expression

// Assign them to var

// anonymousGreet();  Error

var anonymousGreet = function (){
    console.log("Hello")
}

greet();

// Pass them fly

function log(a){
    a();
}

log(anonymousGreet);


 
