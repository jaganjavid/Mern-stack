const github = new Github();

const ui = new UI();


// Get Input Value

const input = document.querySelector("#search-user");

const form = document.querySelector("#search-form");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = input.value;

    if(user === ""){
        alert("Please add the user name");
    } else{
        github.getUser(user).then(data => {
            if(data.message === "Not Found"){
                alert("There is no user with this name");
            }else {
                ui.showProfile(data);
            }
        })
    }
})

