class UI{

    constructor(){
        this.profile = document.getElementById("profile");
    }
    
    // Display profile in UI

    showProfile(userData){

        this.profile.innerHTML = "";

        this.profile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
             <div class="col-md-3">
                <img width="100%" src=${userData.avatar_url} alt="">
                <a href=${userData.html_url} target="_blank" class="btn btn-dark mt-2">Visit Profile</a>
             </div>

             <div class="col-md-9">
                <span class="badge bg-success">Public Repos : ${userData.public_repos}</span>
                <span class="badge bg-info">Public Gists : ${userData.public_gists}</span>
                <span class="badge bg-warn">Followers : ${userData.followers}</span>
                <span class="badge bg-primary">Following : ${userData.following}</span>
                <span class="badge bg-dark">Created At : ${userData.created_at}</span>

                <div class="mb-3"></div>

                <ul class="list-group">
                    <li class="list-group-item">Company : ${userData.company}</li>
                    <li class="list-group-item">Location : ${userData.location}</li>
                    <li class="list-group-item">Twitter : ${userData.twitter_username}</li>
                    <li class="list-group-item">Type : ${userData.type}</li>
                </ul>
             </div>
        </div>
    </div>`
    }

    showAlert(message, className) {
        // Clear any existing alerts
        this.clearAlert();

        // Create a div element
        const div = document.createElement("div");

        // Add class
        div.className = `alert ${className}`;

        // Add text
        div.appendChild(document.createTextNode(message));

        const insertAlert = document.querySelector(".app-alert");

        insertAlert.appendChild(div);

        // Automatically remove the alert after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    };

    clearAlert() {
        const existingAlert = document.querySelector(".app-alert .alert");
        if (existingAlert) {
            existingAlert.remove();
        }
    };
     

}