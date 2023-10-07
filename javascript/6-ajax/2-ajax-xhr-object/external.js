const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");


// 0 - request not initialized
// 1 - server connection established
// 2 - request received
// 3 - processing request
// 4 - request finished and response is ready



xhr.onreadystatechange = function(){

    console.log(this.readyState)

    if(this.readyState === 4 && this.status === 200){

        const data = JSON.parse(this.response);
        
        data.forEach(function(user) {
            const li = document.createElement("li");

            li.innerHTML = `<strong>
            ${user.name} - ${user.username}
            </strong>`;

            document.querySelector(".json-output").appendChild(li);
        })
       
    } else {
        console.log("Error", this.response);
    }
}

xhr.send();



// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// xhr.onreadystatechange = function(){
//     if(this.readyState === 4){ // State 4 (DONE)
//         if(this.status === 200){ // Successful response
//             const data = JSON.parse(this.response);
//             // Process the response data here
//         } else {
//             // Handle errors for non-200 status codes
//         }
//     } else if(this.readyState === 3) { // State 3 (LOADING)
//         // Partial data is available in this.responseText
//     } else if(this.readyState === 2) { // State 2 (HEADERS_RECEIVED)
//         // Headers and status are available: this.getAllResponseHeaders(), this.status
//     } else if(this.readyState === 1) { // State 1 (OPENED)
//         // The request has been opened
//     } else if(this.readyState === 0) { // State 0 (UNSENT)
//         // The request has not been opened yet
//     }
// }

// xhr.send(); // Initiates the request (transitioning to state 1 and further)



