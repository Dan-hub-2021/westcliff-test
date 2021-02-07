/*-- RANDOM CODE --*/
//Function to generate combination of characters
function generateCode() {
    //Create variable to store generated codes and the type of characters we want to show as codes
    var code = ' '; // initialize to null value
    var str =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //Generate character multiple tiumes using a loop
    for (i = 1; i <= 8; i++) {
        var char = Math.random()* str.length; //random select a chatracter from the variable and then store in a new variable
        code += str.charAt(char) //accumulate the gernerated character into a string of 8 characters   
}
return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Display Button
function disableButton(){
    document.getElementById("submit").diabled = true;
}

//Activate function
disableButton();