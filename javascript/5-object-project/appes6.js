// BOOK CONSTRUCTOR

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    // ADD Book to the Lich

    addBookToList(book) {
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

    clearFields() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    deleteBook(element) {
        element.parentElement.parentElement.parentElement.remove();
    }

    editBookInList(book, index) {
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


class Store {

    static getBooks() {

        let books;

        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }

    static addBooks(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => {
            const ui = new UI();

            ui.addBookToList(book);
        })
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        })

        localStorage.setItem("books", JSON.stringify(books));
    }

}






document.addEventListener("DOMContentLoaded", Store.displayBooks);




// Event Listener for add book

let editMode = false;
let editedBookIndex = -1;

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
            console.log("Edit")
            // Edit mode
            const editedBook = new Book(title, author, isbn);

            let bookExists = false;
            // Check if a book with the same title and ISBN already exists
            const books = document.querySelectorAll("#book-list tr");


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
                ui.editBookInList(editedBook, editedBookIndex);
                editMode = false; // Exit edit mode
                editedBookIndex = -1; // Reset edited book index
                document.querySelector(".btn").textContent = "Add"; // Change button text back to "Add"
                ui.showAlert("Book edited successfully", "alert-success");
                console.log("Hello");
            }

        } else {
            // Add mode

            console.log("Add")

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
                Store.addBooks(book);
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

        console.log(editMode);

        // Store the index of the edited book
        editedBookIndex = Array.from(row.parentElement.children).indexOf(row);
    }
});

// Event Listener for delete book
document.querySelector("#book-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        const ui = new UI();

        // Delete Book 
        ui.deleteBook(e.target);

        const isbn = e.target.parentElement.parentElement.previousElementSibling.textContent;

        Store.removeBook(isbn);

        ui.showAlert("Bood removed succesfully", "alert-success");
    }
})
