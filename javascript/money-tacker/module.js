

const module1 = (function(){

    // Private
    const nameModule = "Module 1";

    // Pub

    return {
        nameModule
    }

})();


const module2 = (function(){

    // Private
    const nameModule = "Module 1";

    // Pub

    return {
        nameModule
    }

})();

// window

// console.log(nameModule);

console.log(module1.nameModule);
console.log(module2.nameModule);


