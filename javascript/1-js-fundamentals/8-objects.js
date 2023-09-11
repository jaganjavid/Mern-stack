
const person = {
    // Properties
    firstName: "Jagan", // name and value || key and value
    lastName: "Javid",
    age: 26,
    email:"jaganjavid@gmail.com",
    hasAlive: true,
    hobbies: ["music", "sports"],
    address: {
        city: "Chennai",
        state: "TN"
    },
    // Method
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}


let val;

val = person;
val = person.firstName; // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hasAlive;
val = person.hobbies[0];
val = person.hobbies[1];
val = person.address;
val = person.address.city;
val = person.address["state"];
val = person.getFullName();


console.log(val);
