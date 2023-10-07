const http = new MyHttp();

// http.get("https://jsonplaceholder.typicode.com/users")
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })

const data = {
    name: "Jagan",
    email: "Jaganajavid@gmail.com"
}


// http.post("https://jsonplaceholder.typicode.com/users", data)
// .then( data => console.log(data))
// .catch(err => console.log(err));

// http.put("https://jsonplaceholder.typicode.com/users/5", data)
// .then( data => console.log(data))
// .catch(err => console.log(err));


http.delete("https://jsonplaceholder.typicode.com/users/9")
.then( data => console.log(data))
.catch(err => console.log(err));