

// document.getElementsByClassName()

const items = document.getElementsByClassName("collection-item");

// console.log(items);

// items[0].style.background = "blue";
// items[0].style.color = "#ffffff";
// items[0].innerText = "Hello";

// for(let i = 0; i < items.length; i++){
//     items[i].style.background = "blue";
//     items[i].style.color = "white";
// }

// Convert HTMLCOLLECTION TO ARRAY

const lists = Array.from(items);

// lists.forEach(function(list){
//     console.log(list);
//     list.style.background = "blue";
//     list.style.color = "white";
// });

// document.querySelectorAll("");

const listItems = document.querySelectorAll("li"); // Nodelist

// Nodelist has the inbuild forEach

listItems.forEach(function(li){
    li.style.background = "blue";
    li.style.color = "white";
})



