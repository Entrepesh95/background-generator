var css = document.querySelector("h3");  // here we user query selector to get hold of the h3 to manipulate it as a text content
var color1 = document.querySelector(".color1");  // here we user query selector to get the element input with the name class color1
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// IT IS IMPORTANT TO MATCH THE CLASS NAMES AS THIS CAN AFFECT THE JS

function setGradient() {  // here we are using this function to manipulate the background of the body
    body.style.background = 
    "Linear-gradient(to right, "
    + color1.value
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";  // here we are manipulating h3 to add text 
}


color1.addEventListener("input", setGradient)  // herewe are triggering the function

color2.addEventListener("input", setGradient)

//----------- IMPORTANT ---------------------------

// YOU CAN CHECK IN PAGES LIKE CANIUSE.COM TO CHECK IF THE FEATURES OF THE 
// WEBSITE  WILL WORK ON ANY BROWSER AS WELL, SOME ELEMENTS CANT BE DISPLAYED
// IN OTHER WEBSITES AND IMPORTANT TO CHECK FIRST IF THEY WILL WORK!!!!!!!!!