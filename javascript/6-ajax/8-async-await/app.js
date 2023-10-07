// async function myFunc(){


//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello")
//         }, 3000)
//     })

//     const error = false;

//     if(!error){
//         const res = await promise;
//         console.log(res)
//     } else {
//         console.log("error")
//     }

// }

// myFunc();


async function getUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Only proceed once its resolved
    const data = await response.json();

    return data;
}

getUsers().then((users) => {
    console.log(users);
}).catch(err => console.log(err));