

// document.querySelector(".clear-tasks")
// .addEventListener("click",function(){
//   console.log(123);
// })


document.querySelector(".clear-tasks")
.addEventListener("click",onClick);

const purpleBtn = document.querySelector(".purple");

function onClick(event){
    let val;
    
    val = event;
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;


    purpleBtn.classList.remove("purple");
    purpleBtn.classList.add("green");
    purpleBtn.style.margin = "20px";
    purpleBtn.value = "Hello guys";

    console.log(purpleBtn);
}
