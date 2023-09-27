

let editMode = false;
let editedBookIndex = -1;


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

    UI.prototype.editBookInList = function (book, index) {
        const row = document.querySelector("#book-list").children[index];
        if (row) {
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
        }
    };

    UI.prototype.showAlert = function (message, className) {
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
    
    UI.prototype.clearAlert = function () {
        const existingAlert = document.querySelector(".app-alert .alert");
        if (existingAlert) {
            existingAlert.remove();
        }
    };
    
}


// Event Listener for add book

document.getElementById("book-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    const ui = new UI();

    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("Please fill all fields", "alert-danger");
    } else {
        if (editMode) {
            // Edit mode
            const editedBook = new Book(title, author, isbn);
            ui.editBookInList(editedBook, editedBookIndex);
            editMode = false; // Exit edit mode
            editedBookIndex = -1; // Reset edited book index
            document.querySelector(".btn").textContent = "Add"; // Change button text back to "Add"
            ui.showAlert("Book edited successfully", "alert-success");
        } else {
            // Add mode

            // Check if a book with the same title and ISBN already exists
            const books = document.querySelectorAll("#book-list tr");
            let bookExists = false;
            for (const bookRow of books) {
                const existingTitle = bookRow.querySelector("td:nth-child(1)").textContent;
                const existingIsbn = bookRow.querySelector("td:nth-child(3)").textContent;
                if (existingTitle === title || existingIsbn === isbn) {
                    bookExists = true;
                    break;
                }
            }

            if (bookExists) {
                ui.showAlert("Book with the same title and ISBN already exists", "alert-danger");
            } else {
                const book = new Book(title, author, isbn);
                ui.addBookToList(book);
                ui.showAlert("Book added successfully", "alert-success");
            }
        }

        ui.clearFields();
    }
});


// Event Listener for edit book
document.querySelector("#book-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("edit")) {

        const row = e.target.parentElement.parentElement.parentElement;
        const bookTitle = row.querySelector("td:nth-child(1)").textContent;
        const bookAuthor = row.querySelector("td:nth-child(2)").textContent;
        const bookIsbn = row.querySelector("td:nth-child(3)").textContent;

        // Fill the form fields with book data
        document.getElementById("title").value = bookTitle;
        document.getElementById("author").value = bookAuthor;
        document.getElementById("isbn").value = bookIsbn;

        // Change the button text to "Edit"
        document.querySelector(".btn-info").textContent = "Edit";

        // Enter edit mode
        editMode = true;

        // Store the index of the edited book
        editedBookIndex = Array.from(row.parentElement.children).indexOf(row);
    }
});

// Event Listener for delete book
document.querySelector("#book-list").addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        const ui = new UI();

        // Delete Book 
        ui.deleteBook(e.target);

        ui.showAlert("Bood removed succesfully", "alert-success");
    }
})



const arr = ["apple", "kiwi"]; // index is not matching

console.log(arr.indexOf("orange"));
