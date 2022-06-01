/******LEV 1_6*****/
let option = document.getElementById("option-selected");


document.body.addEventListener("change", (e) => {
    option.innerHTML = " Sie haben " + e.target.value + " ausgewählt! "
})

/*****LEV 3_1*****/

let select = document.getElementById("my-select")