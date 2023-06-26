let inputFood = document.getElementById('input-food');
let inputBtn = document.getElementById('input-btn');
let foodContainer = document.getElementById('food-container');
let noListEL = document.getElementById("no-list");
let foodListStatistics = document.getElementById("food-list-statistics");

document.addEventListener("DOMContentLoaded", () => {
    //localStorage fetch, draw ui

    const fetchedFoodItems = [...JSON.parse(localStorage.getItem("foodItems"))];

    fetchedFoodItems.forEach(item => {
        const newFoodItemEl = document.createElement("li");
        const divItem = document.createElement("div");
        const divRemoveBtn = document.createElement("div");

        newFoodItemEl.append(divItem, divRemoveBtn);

        divRemoveBtn.parentElement.setAttribute('onclick', "removeItem(event)");

        divRemoveBtn.innerHTML = `X`;



        // const text = document.createTextNode();

        newFoodItemEl.innerText = item.foodItem;
        // // Assigning ClassName 
        newFoodItemEl.className = 'food-item'

        // // append
        foodContainer.append(newFoodItemEl);
        //divItem.append(fetchedFoodItems);
        newFoodItemEl.append(divItem);

        newFoodItemEl.append(divRemoveBtn);

    });

    refreshUI();

})



inputBtn.addEventListener('click', () => {
    const newFoodItemEl = document.createElement("li");
    const divItem = document.createElement("div");
    const divRemoveBtn = document.createElement("div");

    newFoodItemEl.append(divItem, divRemoveBtn);

    divRemoveBtn.parentElement.setAttribute('onclick', "removeItem(event)");
    divRemoveBtn.innerHTML = `X`;



    // const text = document.createTextNode();

    newFoodItemEl.textContent = inputFood.value;
    // // Assigning ClassName 
    newFoodItemEl.className = 'food-item'

    // // append
    foodContainer.append(newFoodItemEl);
    newFoodItemEl.append(divItem);
    newFoodItemEl.append(divRemoveBtn);


    //set localStorage
    localStorage.setItem("foodItems", JSON.stringify([...JSON.parse(localStorage.getItem("foodItems") || "[]"),
    { foodItem: inputFood.value },
    ])
    );
    refreshUI();
});

// removeing Element.
function removeItem(event) {
    let existinglist = event.target.parentNode  
    //remove
    existinglist.remove();

    //remove from localStorage
    const fetchedFoodItems = [...JSON.parse(localStorage.getItem("foodItems"))];
    
   

    fetchedFoodItems.forEach((item) => {

        console.log(item.foodItem );
           console.log(event.target);
           
    
        // if (item.foodItem === existinglist.innerText) {
        //     console.log("going to reomove")
             fetchedFoodItems.splice(fetchedFoodItems.indexOf(item), 1);
        // }
    });
    localStorage.setItem("foodItems", JSON.stringify(fetchedFoodItems));

    refreshUI();
};


// Image hide in front of input fild.
function refreshUI() {
    if (foodContainer.children.length > 0) {

        //Children exist, so don't show 'no-list(image)' div
        noListEL.hidden = true;
        foodListStatistics.innerText = `Your have ${foodContainer.children.length} Lists`;
    }
    else {
        //Children not Exist, so show 'no-list(image)' div
        noListEL.hidden = false;
    }
    // your can write better


}

