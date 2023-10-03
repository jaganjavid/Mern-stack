

const xhr = new XMLHttpRequest();

xhr.open("GET", "./mytext.txt");


xhr.onreadystatechange = function(){
    if(this.status === 200){
        const data = this.response;
        document.querySelector(".text-output").textContent = data;
    }else {
        console.log("Error");
    }
}

xhr.send();



