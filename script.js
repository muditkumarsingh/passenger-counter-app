// let myAge = 20;
// console.log(myAge)

// let bonusPoint = 50;

// console.log(bonusPoint);


// bonusPoint = bonusPoint + 50;
// console.log(bonusPoint);

// bonusPoint = bonusPoint - 75 ;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 45 ;
// console.log(bonusPoint);

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let str = count + " - ";
    saveEl.textContent += str;

    count = 0
    countEl.textContent = 0
    console.log(count)
}


 