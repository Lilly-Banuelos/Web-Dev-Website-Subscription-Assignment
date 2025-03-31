/*
Name: Lilly Jarvis
Date: 02/15/23
*/

// This gets the button element object from its id
var subBtn = document.getElementById('subBtn');

// Runs after the subscribe button is clicked
function clicked()
{
    // This gets the text box element object's entered value by user from id
    var fName = document.getElementById('firstName').value;
    // This gets the text box element object's entered value by user from id
    var lName = document.getElementById('lastName').value;
    // This gets the select element object's chosen value by user from id
    var prefContact = document.getElementById('prefContact').value;

    if (fName == "" && lName != "")
    {
        // This gets the div element object from its id and concatenates all the user entered values and displays it
        document.getElementById('display').innerHTML = "<br>Subscribed! <br><br><img src='chef.gif' id='chef'><br><br>Welcome to the Spice Nation fam " + lName + "! <br> Check your " + prefContact + " to see this week's lit recipe!";
    }
    else if (fName != "" && lName == "")
    {
        // This gets the div element object from its id and concatenates all the user entered values and displays it
        document.getElementById('display').innerHTML = "<br>Subscribed! <br><br><img src='chef.gif' id='chef'><br><br>Welcome to the Spice Nation fam " + fName + "! <br> Check your " + prefContact + " to see this week's lit recipe!";
    }
    else if (fName == "" && lName == "")
    {
        // This gets the div element object from its id and concatenates all the user entered values and displays it
        document.getElementById('display').innerHTML = "<br>Subscribed! <br><br><img src='chef.gif' id='chef'><br><br>Welcome to the Spice Nation fam! <br> Check your " + prefContact + " to see this week's lit recipe!";
    }
    else
    {
        // This gets the div element object from its id and concatenates all the user entered values and displays it
        document.getElementById('display').innerHTML = "<br>Subscribed! <br><br><img src='chef.gif' id='chef'><br><br>Welcome to the Spice Nation fam " + fName + " " + lName + "! <br> Check your " + prefContact + " to see this week's lit recipe!";
    }





    // This gets the div element object from its id and concatenates all the user entered values and displays it
    //document.getElementById('display').innerHTML = "Welcome to the Spice Nation fam " + fName + " " + lName + "! <br> Check your " + prefContact + " to see this week's lit recipe!";
}

// Adds an event listener to the button object that runs the clicked function when clicked
subBtn.addEventListener("click", clicked);