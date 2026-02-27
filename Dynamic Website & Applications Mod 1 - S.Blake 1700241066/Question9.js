///9. Retrieve and display style properties html Correct!!!
function myFunction() {
     const paragraph = document.getElementById("demo");
      if (paragraph.textContent === "") {
        ///Display text
          paragraph.textContent = "This is a style element"
      } else {
        //Display untext
        paragraph.textContent = "";
      }
     
    }