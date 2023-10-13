

const module1 = (function(){
    const apple = true;

    return {
        apple
    }

})();

const module2 = (function(){
    const apple = true;

    return {
        apple
    }

})();

console.log(module1.apple = false);
console.log(module2);

