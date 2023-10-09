// 

// 


class Github {
    constructor(){
        this.client_id = "ca7e1fc0cd150c36346a";
        this.client_secret = "271921b8269a6a8d9fa175b1fc5b16ef7189723c";
    }

    async getUser(user){
        const profileResponse = await 
        fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return profile;
    }
}