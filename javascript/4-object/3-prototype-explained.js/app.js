function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const javid = new Person("Jagan", "Javid");
const arun = new Person("Arun", "Kumar");

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}



console.log(javid.getFullName());

// console.log(javid);


// const arr = [1,2,3];

// arr.__proto__.__proto__.customPop = function(){
//     if(this.length === 0){
//         return undefined
//     }

//     const removeElement = this[this.length - 1];
//     this.length--;
//     delete this[this.length];
//     return removeElement;
// }

// javid.__proto__.__proto__.getFullName = function(){
//     return this.firstName + " " + this.lastName;
// }

// console.log(arr);
// console.log(arr.pop());
// console.log(arr.customPop());

// console.log(arr);


