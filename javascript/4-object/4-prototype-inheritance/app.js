function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const javid = new Person("Jagan", "Javid");

// console.log(javid);

// Customer object

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype methods to customer
Customer.prototype = Object.create(Person.prototype);

// Make a customer prototype return customer
Customer.prototype.constructor = Customer;

const customerJavid = new Customer("Jagan", "Javid", "111-1111-111", "standard");

// console.log(customerJavid.greeting());

// Customer greeting
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName} welcome to my company`;
// }

console.log(customerJavid.greeting());
