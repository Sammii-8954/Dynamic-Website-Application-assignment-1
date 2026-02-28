const dropdown = document.getElementById("FoodSelect");
const messagePara = document.getElementById("message"); 
dropdown.onchange = function() {

    const choice = dropdown.value;
    let text = "";
    switch(choice) {
        case "macaroni & Cheese":
        text = "Great choice! The Macaroni & Cheese is amazing.";
        break;
        case "burger":
        text = "Excellent Choice!";
        break;
        case "alfredo Pasta":
        text = "That's one of our best sellers.";
        break;
        case "girl Dinner":
        text = "A glass of water coming right up!";
        break;
        default:
            text = "Please select a food on the menu"


    }

    //Display the message
    messagePara.innerHTML = text;
};