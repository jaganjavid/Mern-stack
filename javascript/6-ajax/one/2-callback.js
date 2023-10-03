

const posts = [
    {title: "Post One", body: "This is a post one"},
    {title: "Post Two", body: "This is a post two"},
];


// Sync

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000)
// };

// function getPost(){
//     setTimeout(function(){
//         posts.forEach(function(post){
//             const div = document.createElement("div");
//             div.innerHTML = `<strong>
//               ${post.title} - ${post.body}
//             </strong>`;

//             document.querySelector("#posts").appendChild(div);
//         })

        
//     }, 1000)
// }   


// createPost({title: "Post Three", body: "This is a post three"});

// getPost();


function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000)
};

function getPost(){
    setTimeout(function(){
        posts.forEach(function(post){
            console.log(post);
            const div = document.createElement("div");
            div.innerHTML = `<strong>
              ${post.title} - ${post.body}
            </strong>`;

            document.querySelector("#posts").appendChild(div);
        })
        
    }, 1000)
}   


createPost({title: "Post Three", body: "This is a post three"}, getPost);


