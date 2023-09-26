// Book construtor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


function UI(){

    // Add book to list
    UI.prototype.addBookToList = function(book){
      const bodyList = document.querySelector("#book-list");

    // Create a tr element
    const row = document.createElement("tr");

    // console.log(row);

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>
         <div class="d-flex gap-5">
         <i class="edit fa-solid fa-pen-to-square"></i>
         <i class="delete fa-solid fa-trash"></i>
         </div>
           
        </td>
    `;

    bodyList.appendChild(row);

    }


    UI.prototype.clearFields = function(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    UI.prototype.deleteBook = function(element){
        element.parentElement.parentElement.parentElement.remove();
    }

    UI.prototype.showAlert = function(message, className){
        // Create a div element
        const div = document.createElement("div");
        
        // Add class
        div.className = `alert ${className}`;

        // Add text 
        div.appendChild(document.createTextNode(message));

        const insertAlert = document.querySelector(".app-alert");

        insertAlert.appendChild(div);
    }
}

// Event Listener for add book

document.getElementById("book-form").addEventListener("submit", function(e){
   e.preventDefault();

   const title = document.getElementById("title").value;
   const author = document.getElementById("author").value;
   const isbn = document.getElementById("isbn").value;

   //Instantiate Book
   const book = new Book(title, author, isbn);
   const ui = new UI();

   if(title === "" || author === "" || isbn === ""){
     ui.showAlert("please fill the all fileds", "alert-danger");
   }else {
     ui.addBookToList(book);
     ui.clearFields();
     ui.showAlert("Bood added succesfully", "alert-success");
   }
})

// Event Listener for delete book

document.querySelector("#book-list").addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        const ui = new UI();

        // Delete Book 
        ui.deleteBook(e.target);

        ui.showAlert("Bood removed succesfully", "alert-success");
    }
})