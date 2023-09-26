// ES6
class Person{

   constructor(firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
   }  

   greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
   }

   goodbye(){
    console.log("Goodnight")
   }

}


class Customer extends Person{
    constructor(firstName,lastName, phone, membership){
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName} welcome`;
    }
}

const javid = new Person("Jagan", "Javid");

const josh = new Customer("Josh", "sri", "111-1111-111", "pro");

console.log(javid)
console.log(josh.greeting())


