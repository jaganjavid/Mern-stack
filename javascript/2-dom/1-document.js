// DOM - Document object model

let val;


val = document;
val = document.all; // HTMLALLCOLLECTION
val = document.body;
val = document.doctype;
val = document.URL;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;

val = document.links;
val = document.links[0];
val = document.links[0].className; // string
val = document.links[0].classList; // DOMTOKENLIST
val = document.links[0].classList[0];


val = document.images;
val = document.images[0];
val = document.images[0].src;


console.log(val);