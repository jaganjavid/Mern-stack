
// STORAGE CONTROLLER, ITEM CONTROLLER, UI CONTROLLER

// STORAGE CONTROLLER

// const StorageCtrl = (function(){

//     return {
//         storeItem: function(item){
//             let items;

//             // Check if any items in LS
//             if(localStorage.getItem("items") === null){
//                items = [];

//                console.log("Step-1")

//             } else {
//                 // Get the existing data from ls
//                 items = JSON.parse(localStorage.getItem("items"));
//                 console.log("Step-2")
//             }

//             // Push the new item
//             items.push(item);

//             // Set the Ls
//             localStorage.setItem("items", JSON.stringify(items));

//         },
//         getItems: function(){
//             let items;

//             // Check if any items in LS
//             if(localStorage.getItem("items") === null){
//                 items = [];
//             }else {
//                 // Get the existing data from ls
//                 items = JSON.parse(localStorage.getItem("items"));
//             } 

//             return items;

//         },
//         updateItemLs: function(updatedItem){
//           // Get the existing data from ls
//           const items = JSON.parse(localStorage.getItem("items"));

//           items.forEach(function(item, index){
//              if(updatedItem.id === item.id){
//                 items.splice(index, 1, updatedItem);
//              }
//           })

//           localStorage.setItem("items", JSON.stringify(items));
//         },
//         deleteItemLs: function(id){
//             // Get the existing data from ls
//           const items = JSON.parse(localStorage.getItem("items"));

//           items.forEach(function(item, index){
//             if(id === item.id){
//                 items.splice(index, 1);
//             }
//           })

//           localStorage.setItem("items", JSON.stringify(items));
//         }
//     }
// })();

const StorageCtrl = (function () {
    // Private methods
    function getItemsFromLocalStorage() {
        return JSON.parse(localStorage.getItem("items")) || [];
    }

    function setItemsToLocalStorage(items) {
        localStorage.setItem("items", JSON.stringify(items));
    }

    // Public methods
    return {
        storeItem: function (item) {
            let items = getItemsFromLocalStorage();
            items.push(item);
            setItemsToLocalStorage(items);
        },
        getItems: function () {
            return getItemsFromLocalStorage();
        },
        updateItemLs: function (updatedItem) {
            let items = getItemsFromLocalStorage();
            items = items.map(item => (item.id === updatedItem.id ? updatedItem : item));
            setItemsToLocalStorage(items);
        },
        deleteItemLs: function (id) {
            let items = getItemsFromLocalStorage();
            items = items.filter(item => item.id !== id);
            setItemsToLocalStorage(items);
        }
    };
})();


const ItemCtrl = (function(){

    const Item = function(id, name, money){
        this.id = id;
        this.name = name;
        this.money = money;
    }

    // Data Struture 

    const data = {
        // items: [
        //     {id: 0, name: "clothes", money:2000},
        //     {id: 1, name: "Phone", money:1000},
        //     {id: 2, name: "Dinner", money:600}
        // ],
        items: StorageCtrl.getItems(),
        currentItem: null,
        totalMoney: 0
    }

    return {
        getItems: function(){
            return data.items; // Array
        },
        getTotalMoney: function(){

            let total = 0;

            if(data.items.length > 0){
                data.items.forEach(function(item){
                    total += item.money
                    data.totalMoney = total
                })
            } else{
                return data.totalMoney = 0
            }

            return total;
        },
        addItem: function(name, money){
            
           let ID;
           
           // Create a ID
           if(data.items.length > 0){
              ID = data.items[data.items.length - 1].id + 1;
           }else{
             ID = 0;
           }
           
           // Convert String into money
           money = parseInt(money);

           // Create a new item
           const newItem = new Item(ID, name, money);

          // Add to item Array
          data.items.push(newItem);

          return newItem;

        },
        getItemById: function(id){

           let found = null;

           // Loop the items

           data.items.forEach(function(item){
             if(item.id === id){
                found = item
             }
           })

           return found;
        },
        setCurrentItem: function(itemToEdit){
           data.currentItem = itemToEdit;
        },
        getCurrentItem: function(){
            return data.currentItem;
        },
        updateItem: function(name, money){
          money = parseInt(money);

          let found = null;
          
          data.items.forEach(function(item){
            if(item.id === data.currentItem.id){
                item.name = name;
                item.money = money;
                found = item;
            }
          })

          return found;

        },
        deleteItem: function(id){

            // Get IDS
            const ids = data.items.map(function(item){
                return item.id;
            })

           // Get Index
           const index = ids.indexOf(id);

            
           data.items.splice(index, 1);

        }
    }
})();


const UICtrl = (function(){

    return {
        populateItemList: function(items){
            let html = "";

            items.forEach(function(item){
               html += `<li class="collection-item" id="item-${item.id}">
               <strong>${item.name} : <em>${item.money} $</em></strong>
               <a href="#" class="secondary-content edit-item">
                   <i class="fa fa-pencil"></i>
               </a>
             </li>`;

            //  Insert list item into ul
            document.querySelector("#item-list").innerHTML = html;
            })
        },
        clearEditState: function(){
            document.querySelector(".add-btn").style.display = "inline";
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        },
        showEditState: function(){
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        },
        showTotalMoney: function(totalMoney){
          document.querySelector(".total-money").textContent = totalMoney;
        },
        getItemInput: function(){
            return {
                name: document.querySelector("#item-name").value,
                money: document.querySelector("#item-money").value
            }
        },
        addListItem: function(item){

        // Create a list item  
        const li = document.createElement("li");

        // Add class to li
        li.className = "collection-item";

        // Add id
        li.id = `item-${item.id}`;

        // Insert HTML
        li.innerHTML = `<strong>${item.name} : <em>${item.money} $</em></strong>
        <a href="#" class="secondary-content edit-item">
            <i class="fa fa-pencil"></i>
        </a>`;

        // Insert item to ul
        document.querySelector(".collection").appendChild(li);

        },
        clearInputState: function(){
            document.querySelector("#item-name").value = "";
            document.querySelector("#item-money").value = "";
        },
        addItemToForm: function(){
            document.querySelector("#item-name").value = ItemCtrl.getCurrentItem().name;
            document.querySelector("#item-money").value = ItemCtrl.getCurrentItem().money;
        },
        updateListItem: function(item){
          let listItems = document.querySelectorAll("li");

          listItems.forEach(function(listItem){
            
            const itemID = listItem.getAttribute("id");

           if(itemID === `item-${item.id}`){

              const li = document.querySelector(`#${itemID}`);
              
              li.innerHTML = `<strong>${item.name} : <em>${item.money} $</em></strong>
              <a href="#" class="secondary-content edit-item">
                  <i class="fa fa-pencil"></i>
              </a>`
           }

          })
        },
        deleteListItem: function(id){
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        }


    }
})();



const App = (function(ItemCtrl, UICtrl, StorageCtrl){

    const loadEventListeners = function(){

        // Add item Event
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // For edit
        document.querySelector("#item-list").addEventListener("click", itemToEdit);

        // Update Item Event
        document.querySelector(".update-btn").addEventListener("click", itemUpdateSubmit)

        // Delete Item Event
        document.querySelector(".delete-btn").addEventListener("click", itemDeleteSubmit);

        
    }

    const itemAddSubmit = function(e){
        e.preventDefault();
     
        // Get the input from UI
        const input = UICtrl.getItemInput();

        // Validate

        if(input.name === "" || input.money === ""){
            alert("Please fill all the fileds");
        } else{
            
            // Add Item
            const newItem = ItemCtrl.addItem(input.name, input.money);

            // Add Item To UI List
            UICtrl.addListItem(newItem);

            // Store to local Storage
            StorageCtrl.storeItem(newItem);

            // Get Total money
            const totalMoney = ItemCtrl.getTotalMoney();

            // Add Total Money to UI
            UICtrl.showTotalMoney(totalMoney);

            // Clear A ui Input
            UICtrl.clearInputState();
        }
        
    }

    const itemToEdit = function(e){
      if(e.target.parentElement.classList.contains("edit-item")){
        
        // Show All the button
        UICtrl.showEditState();

        const listID = e.target.parentElement.parentElement.id;

        // Beark into An array
        const listArr = listID.split("-");

        // Get the autual ID
        const id = parseInt(listArr[1]);

        // Get the Item
        const itemToEdit = ItemCtrl.getItemById(id);

        // Set Current Item
        ItemCtrl.setCurrentItem(itemToEdit);

        // Add Item To form
        UICtrl.addItemToForm();

      }
    }


    const itemUpdateSubmit = function(e){
        e.preventDefault();

        // Get Item Input
        const input = UICtrl.getItemInput();

        // Update Item
        const updateItem = ItemCtrl.updateItem(input.name, input.money);

        // Update UI
        UICtrl.updateListItem(updateItem);

        // Upadate to Ls
        StorageCtrl.updateItemLs(updateItem);
        

        // GET TOTAL MONEY
        const totalMoney = ItemCtrl.getTotalMoney();

        // Add total money to UI
        UICtrl.showTotalMoney(totalMoney);

        UICtrl.clearEditState();

        // Clear A ui Input
        UICtrl.clearInputState();

    }

    const itemDeleteSubmit = function(e){
        e.preventDefault();

        // Get Current Item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from the data structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from ui
        UICtrl.deleteListItem(currentItem.id);

         // Remove from LS
         StorageCtrl.deleteItemLs(currentItem.id);

        // GET TOTAL MONEY
        const totalMoney = ItemCtrl.getTotalMoney();

        // Add total money to UI
        UICtrl.showTotalMoney(totalMoney);

        UICtrl.clearEditState();

        // Clear A ui Input
        UICtrl.clearInputState();

    }

    return {
       start: function(){

         loadEventListeners();

         UICtrl.clearEditState();

         const items = ItemCtrl.getItems(); // get the data 

         if(items.length > 0){
            UICtrl.populateItemList(items);
            
            // GET TOTAL MONEY
            const totalMoney = ItemCtrl.getTotalMoney();

            // Add total money to UI
            UICtrl.showTotalMoney(totalMoney);
            
    
         }

        
       }
    }
})(ItemCtrl, UICtrl, StorageCtrl);

App.start();

// const arr = [{a:1},{a:2},{a:3},{a:4}];

// console.log(arr.length);

// const getA = arr[arr.length - 1].a + 1;

// console.log(getA);



// function removeElement(nums, val) {
//     let left = 0; // Left pointer
//     let right = nums.length - 1; // Right pointer

//     while (left <= right) {
//         if (nums[left] === val) {
//             // If the left element equals val, swap it with the right element
//             [nums[left], nums[right]] = [nums[right], nums[left]];
//             // Move the right pointer to the left
//             right--;
//         } else {
//             // If the left element is not equal to val, move the left pointer to the right
//             left++;
//         }
//     }

//     // The left pointer indicates the length of the modified array without val
//     return left;
// }

// // Example usage:
// let nums1 = [3, 2, 2, 3];
// let val1 = 3;
// console.log(removeElement(nums1, val1)); // Output: 2, nums1 = [2, 2, _, _]
// explain me im 10 years old


