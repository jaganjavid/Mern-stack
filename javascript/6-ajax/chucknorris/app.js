const button = document.querySelector(".joke-btn");


button.addEventListener("click", function(e){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.chucknorris.io/jokes/random");

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            
            const response = this.response;

            const data = JSON.parse(response);

            console.log(data.value)

            document.querySelector(".jokes").textContent = data.value;
        } 
    }

    xhr.send();

})