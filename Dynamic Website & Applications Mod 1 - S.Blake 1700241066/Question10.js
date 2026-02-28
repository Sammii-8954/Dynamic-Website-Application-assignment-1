///10  Change text color of any paragraph on hover html
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (p) {
      p.addEventListener("mouseover", function() {
        p.style.color = "red";
    });

    p.addEventListener("mouseout", function() {
        p.style.color = ""; // resets to original color
    });



     
});
