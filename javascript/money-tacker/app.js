
// STORAGE CONTROLLER, ITEM CONTROLLER, UI CONTROLLER

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
        this.dateAdded = new Date().toLocaleDateString();; // Current date and time when the item is added
        this.lastModified = new Date().toLocaleDateString();; // Initially set to the creation time
    }

    // Data Struture or state

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
                item.lastModified = new Date();
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

    let categoryChart;

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
        li.innerHTML = `<strong>${item.name} : <em>${item.money} $</em> Date - ${item.dateAdded}</strong>
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
              
              li.innerHTML = `<strong>${item.name} : <em>${item.money} $</em> Date - ${item.lastModified}</strong>
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
        },
        validateInput:function(input){
            const name = input.name.trim();
            const money = input.money.trim();

            // Check if name and money are not empty
            if (name === '' || money === '') {
                alert('Please fill out all fields.');
                return false;
            }

            // Check if money is a positive number
            if (!/^[1-9]\d*$/.test(money)) {
                alert('Money must be a positive number.');
                return false;
            }

            // Validation passed
            return true;
        },
        filterItems: function(searchText, filterBy) {
            // Get items from the data controller
            const items = ItemCtrl.getItems();

            // Filter items based on searchText and filterBy (name or money)
            const filteredItems = items.filter(function(item) {
                if (filterBy === 'name') {
                    return item.name.toLowerCase().includes(searchText.toLowerCase());
                } else if (filterBy === 'money') {
                    return item.money.toString().includes(searchText);
                }
            });

            // Update the UI with filtered items
            UICtrl.populateItemList(filteredItems);

            // Hide or show items based on filter
            const listItems = document.querySelectorAll('.collection-item');
            listItems.forEach(function(item) {
                const itemId = item.id.split('-')[1]; // Extract item ID from element ID
                if (filteredItems.some(filteredItem => filteredItem.id === parseInt(itemId))) {
                    item.classList.remove('hidden'); // Show items that match the filter
                } else {
                    item.classList.add('hidden'); // Hide items that do not match the filter
                }
            });
        },
        renderCategoryChart: function(categoriesTotal){
            const ctx = document.getElementById('category-chart').getContext('2d');

            if (categoryChart) {
                categoryChart.destroy(); // Destroy the existing chart if it exists
            }

            categoryChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(categoriesTotal),
                    datasets: [{
                        label: 'Total Money Spent',
                        data: Object.values(categoriesTotal),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
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

        // Filter items event listener
        document.querySelector('#search').addEventListener('input', function(e){
            console.log("Hello")
            const searchText = e.target.value;
            const filterBy = document.querySelector('input[name="filter"]:checked').value;

            if (filterBy === 'money' && isNaN(searchText)) {
                // Clear the input if non-numeric value is entered when filtering by money
                e.target.value = '';
                return;
            }
            UICtrl.filterItems(searchText, filterBy);
        });

        
    }

    const itemAddSubmit = function(e){
        e.preventDefault();
     
        // Get the input from UI
        const input = UICtrl.getItemInput();

        // Validate

        if(UICtrl.validateInput(input)){
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

            UICtrl.renderCategoryChart(totalMoney);

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


