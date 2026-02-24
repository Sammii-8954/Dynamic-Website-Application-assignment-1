//Create a new paragraph 
const newParagrph = document.createElement("p");

//Define a variavle to use inside the Template Literal
const techName = "JavaScript";

//Use Template Literals to set the paragrapgh's text
newParagrph.innerText = 'This paragraph was dynamiclly created using ${techName} Template Literals!';

//Append the paragrapgh to the body of the page
document.body.appendChild(newParagrph);