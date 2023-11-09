var b = 5;

function a(){
    const b = "Hola";
    console.log("Statement", this);
    console.log(b);
    this.newVariable = "Hello";
}

a();

var b = function(){
    console.log("Exp", this);
}

b();


var c = {
    name: "The C Object",
    log: function(){
        this.name = "Updated c object";

        var self = this;

        var setName = function(newName){
            self.name = newName; 
        }

        setName("Updated C object again");
    }
}

c.log();
console.log(c);

console.log(this);