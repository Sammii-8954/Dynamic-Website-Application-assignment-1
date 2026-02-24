//Find he button element by its ID 
const btn = document.getElementById("button1");

//Create a function that runs when the button is clicked 
btn.onclick = function(){

    //Find all <textarea> and <p> elements in the documents
    const elements = document.querySelectorAll("textarea, p");

    //Loop through each element and set border to the color red 
    elements.forEach(function(el) {
        el.style.border = "2px solid red";
    });
};