
function greet(firstName, lastName, language){
     return firstName + " " + lastName + " " + language;
}

function tamilGreet(language){
    return greet("Jagan", "Javid", language);
}

function englishGreet(language){
    return greet("Arun", "Kumar", language);
}



console.log(tamilGreet("TA"))
console.log(englishGreet("EN"))



