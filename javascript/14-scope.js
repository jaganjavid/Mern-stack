
// Global, Function, Block

var a = 1;
let b = 2;
const c = 3;


function test(){
    var a = 4;
    let b = 5;
    const c = 6;

    console.log(`Fucntion Scope `, a, b, c);
}


test();




// if(true){
//     // Block scope
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log(`Block Scope`, a, b, c);
// }

for(let a = 0; a < 10; a++){
    console.log(`Loop`, a);
}


console.log(`Global Scope`, a, b, c);