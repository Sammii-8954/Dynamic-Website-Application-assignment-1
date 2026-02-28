const target = document.getElementById("targetparagraph");
//add a clock event 
target.onclick = function(){

    //change tect color
    this.style.color = "red";

    //change its background color
    this.style.backgroundColor = "green";
};