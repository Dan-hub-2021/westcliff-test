function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "Enter your " + x;
    if (x.style.display === "none") {
      x.style.display = "";
    } else {
      x.style.display = "left";
    }
  }