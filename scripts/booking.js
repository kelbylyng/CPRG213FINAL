/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
window.onload = function(){
var day_select;

var cost = 0;
var rate = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function clicked(){
    document.getElementById("monday").addEventListener("click", function() {
        day_select = day_select + 1;
    });
    document.getElementById("tuesday").addEventListener("click", function() {
        day_select = day_select + 1;
    });

    document.getElementById("wednesday").addEventListener("click", function() {
        day_select = day_select + 1;
    });

    document.getElementById("thursday").addEventListener("click", function() {
        day_select = day_select + 1;
    });
    document.getElementById("friday").addEventListener("click", function() {
        day_select = day_select + 1;
    });

    document.getElementById("saturday").addEventListener("click", function() {
        day_select = day_select + 1;
    });


    document.getElementById("sunday").addEventListener("click", function() {
        day_select = day_select + 1;
    });
    }


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function removed() {
    var remove_monday = document.getElementById("monday");
    remove_monday.classList.remove("click");
  
    var remove_tuesday = document.getElementById("tuesday");
    remove_tuesday.classList.remove("click");
    var remove_wednesday = document.getElementById("wednesday");
    remove_wednesday.classList.remove("click");
    var remove_thursday = document.getElementById("thursday");
    remove_thursday.classList.remove("click");
    var remove_friday = document.getElementById("friday");
    remove_friday.classList.remove("click");
    var remove_saturday = document.getElementById("saturday");
    remove_saturday.classList.remove("click");
    var remove_sunday = document.getElementById("sunday");
    remove_sunday.classList.remove("click");

  }






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

if (document.getElementById("full").addEventListener("click")) {
    rate = 35;
    }
else {
    rate = 20;
    }





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
var total = document.getElementById("calculated-cost");
function calculate(){
    cost = rate * day_select;
    total.innerHTML = cost;
}

total.addEventListener("click", removed, clicked, calculate);
};