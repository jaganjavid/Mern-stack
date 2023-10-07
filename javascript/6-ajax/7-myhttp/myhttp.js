

class MyHttp{

    // Make an HTTP Get Request

    get(url){
        return new Promise((reslove, reject) => {
           fetch(url)
           .then((res) => {
              return res.json();
           })
           .then((data) => {
              reslove(data)
           })
           .catch((err) => {
            const customError = 'Somthing went worng';
            reject(customError);
           })
        })
    }

    // Create a user

    post(url, data){
        return new Promise((reslove, reject) => {
            fetch(url, {
                method : "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((res) => {
                return res.json();
             })
             .then((data) => {
                reslove(data)
             })
             .catch((err) => {
              const customError = 'Somthing went worng';
              reject(customError);
             })
        })
    }

      // Update a user

      put(url, data){
        return new Promise((reslove, reject) => {
            fetch(url, {
                method : "PUT",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((res) => {
                return res.json();
             })
             .then((data) => {
                reslove(data)
             })
             .catch((err) => {
              const customError = 'Somthing went worng';
              reject(customError);
             })
        })
        
    }


    // Delete User
    
    delete(url){
        return new Promise((reslove, reject) => {
            fetch(url, {
                method : "DELETE",
                headers: {
                    "Content-type" : "application/json"
                }
            })
            .then((res) => {
                return res.json();
             })
             .then((data) => {
                reslove("Resource Deleted");
             })
             .catch((err) => {
              const customError = 'Somthing went worng';
              reject(customError);
             })
        })
        
    }

}