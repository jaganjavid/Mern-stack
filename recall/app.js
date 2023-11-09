
const person = {
    name:'Jagan',
    email:"jaganjavid@gmailcom",
    age:26,
    hasKids:false,
    hobbies:["Music", "Teaching"],
    address:{
        city:"chennai",
        state:"TN"
    },
    getName: function(){
        return this.name;
    }
}


// console.log(person.getName())