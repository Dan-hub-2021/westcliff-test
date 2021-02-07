function displayContactFields() {
  var x = document.getElementById("mySelect").selectedIndex;
  var contactChoice = document.getElementsByTagName("option")[x].value;
  var emailElements = document.getElementById("emailFields");
  var phoneElements = document.getElementById("phoneFields");

  if (contactChoice == "email") {
    emailElements.style.display = "block";
    phoneElements.style.display = "none";
  }
  else if (contactChoice == "phone") {
    phoneElements.style.display = "block";
    emailElements.style.display = "none";
  }
  else {
    phoneElements.style.display = "none";
    emailElements.style.display = "none";  
  }
}
//function myFunction() {
    //var x = document.getElementById("mySelect").value;
    //document.getElementById("demo").innerHTML = "Enter your " + x;
    //if (x.style.display === "none") {
      //x.style.display = "";
   // } else {
      //x.style.display = "left";
    //}
  //}