

let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector(".collection-item:last-child");


val = list.childNodes;
val = list.childNodes[0];

// Element, Text, Comment, Document Itself

// Get a children element nodes
val = list.children; // ***
val = list.children[0];

// First child
val = list.firstChild; // node
val = list.firstElementChild; // ***

// Last Chils

val = list.lastChild;
val = list.lastElementChild; // **

// Count the child element

val = list.childElementCount;

// Get Parent Node

val = listItem.parentElement.parentElement;

// Get a previous sibling
val = listItem.previousElementSibling.previousElementSibling;

// Get a Next Sibling
val = listItem.nextElementSibling;

console.log(val);