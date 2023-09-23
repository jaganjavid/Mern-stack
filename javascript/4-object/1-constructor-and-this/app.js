// ES5
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        console.log(this.firstName + " " + this.lastName);

        // function test(){
        //    this.firstName = "Arun";
        //    console.log(this);
        // }

        // test()
    }
}


const javid = new Person("Jagan", "Javid");
const jagan = new Person("javid", "javid");

console.log(jagan, javid);

jagan.getFullName();
javid.getFullName();


// var obj = {};

// obj.firstName = "Jagan"

// console.log(obj)





// console.log(this);
// console.log(window);

// function test(){
//     console.log(this);
// }

// test();

// const obj = {
//     name: "Jagan",
//     myMethod: function(){
//         console.log(this); // direct object

//         function hey(){
//             console.log(this) // window
//         }

//         hey();
//     }
// }

// obj.myMethod();
