// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submit = document.getElementById("submit-button");
var new_message = ("Thank you for your message");

function text() {
    document.getElementsByTagName("body").style.fontSize = "24px";
  }



function message(){
    document.getElementsByTagName('body')[0].innerHTML = new_message; 


}
submit.addEventListener('click', message, text);

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

