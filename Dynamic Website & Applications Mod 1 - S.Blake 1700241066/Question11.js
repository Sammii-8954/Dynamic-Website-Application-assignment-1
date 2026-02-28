/// 11 Change font weight and color on mouse enter/leave
let ps = document.querySelectorAll("p");
ps.forEach(function(p) {
    p.addEventListener("mouseenter", function() {
        this.style.fontWeight = "bold";
        this.style.color = "blue";
    });
    p.addEventListener("mouseleave", function() {
        this.style.fontWeight = "normal";
        this.style.color = "black";
    });
});