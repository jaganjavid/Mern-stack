// A callback is a function passed as an argument to another function

function changeText(){
    document.querySelector("h1").textContent = "Hello from callback";
}

setTimeout(changeText, 3000);





