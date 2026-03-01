const button = document.getElementById("button1");
button.onclick = function(){
    const tutorialDivs = document.getElementsByClassName("tutorial");
    for (let i = 0; i < tutorialDivs.length; i++) {
        tutorialDivs[i].style.backgroundColor = "pink";
    }
};