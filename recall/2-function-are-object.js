function greet(){
    console.log("hi");
}


greet();

greet.language = "Tamil";

console.log(greet.language);

const x = {
    a:"Hello"
}

x.b = "Vanakam"
console.log(x)


const greet2 = function(){
    return "Hola"
}

function greet3(greet){
   console.log(greet())
}

greet3(greet2);

function greet4(greet){
   greet()
}

greet4(function(){
    console.log("Next.js")
})

