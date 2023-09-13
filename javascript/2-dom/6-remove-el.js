
// Remove Element

const lists = document.querySelectorAll("li");

lists[2].remove();

// Classes and Attr
const firstLi = document.querySelector("li:first-child");

// console.log(firstLi);

let val;

const aTags = firstLi.children[0];

val = aTags.className;
val = aTags.classList; // DOMTOKENLIST

// val = aTags.classList[0];

const add = aTags.classList.add("new-class");
// const contain = aTags.classList.contains("jashjh");

// aTags.classList.forEach(function(cls){
//     console.log(cls);
// })

// const remove = aTags.classList.remove("new-class");

// aTags.classList.replace("test", "pass");


// console.log(aTags);
console.log(val);