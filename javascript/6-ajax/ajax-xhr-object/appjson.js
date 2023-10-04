

const xhr = new XMLHttpRequest();

xhr.open("GET", "users.json");

xhr.onreadystatechange = function(){
    if(this.status === 200){
        const data = JSON.parse(this.response);
        
        data.forEach(function(user) {
            const li = document.createElement("li");

            li.innerHTML = `<strong>
            ${user.name} - ${user.username}
            </strong>`;

            document.querySelector(".json-output").appendChild(li);
        });

       
    }else {
        console.log("Error");
    }
}

xhr.send();



