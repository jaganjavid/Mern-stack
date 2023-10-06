
document.querySelector("#button-1").addEventListener("click", getText);
document.querySelector("#button-2").addEventListener("click", getJson);
document.querySelector("#button-3").addEventListener("click", getExternal);


function getText(){
    fetch("text.txt").then(function(res){
       return res.text();
    }).then(function(data){
        // console.log(data)
        document.querySelector(".output").textContent = data;
    }).catch(function(err){
        console.log(err);
    })
}

function getJson(){
    fetch("posts.json").then(function(res){
       return res.json();
    }).then(function(data){
        let output = "";
        // console.log(data)
        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })

        document.querySelector(".output").innerHTML = output;
    }).catch(function(err){
        console.log(err);
    })
}

function getExternal(){
    fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
       return res.json();
    }).then(function(data){
        let output = "";
        // console.log(data)
        data.forEach(function(user){
            output += `<li>${user.name}</li>`;
        })

        document.querySelector(".output").innerHTML = output;
    }).catch(function(err){
        console.log(err);
    })
}



