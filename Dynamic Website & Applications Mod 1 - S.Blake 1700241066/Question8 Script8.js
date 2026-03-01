window.onload = function () {

    const myImage = document.getElementById("image");
    if (myImage) {
        myImage.src = "mountain.jpg";
        console.log("image source has been changed to mountain.jpg");
    }
};