
// Create a element

const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add ID
li.id = "test";

// Create a text node and append
li.appendChild(document.createTextNode("Hello world"));

// Create a new link element
const link = document.createElement("a");

// Add class to link
link.className = "delete-item secondary-content test";

// Add icon HTML
link.innerHTML = `<i class="fa fa-remove"></i>`;

li.appendChild(link);

// Append li to ul
document.querySelector(".collection").appendChild(li);

console.log(li);