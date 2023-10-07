
const buttonArr = ["animal","career","celebrity","dev","explicit",
"fashion","food","history","money","movie","music","political",
"religion","science","sport","travel", "jagan"];

const ul = document.querySelector("ul");

const input = document.querySelector("#categories-input");
const btnWrapper = document.querySelector(".all-btn");


document.addEventListener("DOMContentLoaded", function(){

    input.value = "animal";

    buttonArr.forEach(function(item){

        const btn = document.createElement("button");

        btn.className = "btn btn-info category-btn";

        btn.innerText = item;

        btnWrapper.style.display = "flex";
        btnWrapper.style.gap = "10px";
        btnWrapper.style.flexWrap = "wrap";

        btnWrapper.appendChild(btn);


    })

})

btnWrapper.addEventListener("click", function(e){
    if(e.target.classList.contains("category-btn")){
        input.value = e.target.innerText;
    }
})


function getData(url){

    ul.innerHTML = "";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            
            const response = this.response;

            const joke = JSON.parse(response);

            const li = document.createElement("li");

            li.appendChild(document.createTextNode(joke.value));

            ul.appendChild(li);
        } 
    }

    xhr.send();
}

document.getElementById("joke-form").addEventListener("submit", formSubmit);

function formSubmit(e){
 e.preventDefault();

 const getInput = input.value;

 const getCategories = `https://api.chucknorris.io/jokes/random?category=${getInput}`;

 getData(getCategories);

}