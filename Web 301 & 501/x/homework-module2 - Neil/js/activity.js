$(document).ready(function() {  
  $("td").not(".notAvailable").bind("click", function(e) {
      $(e.target).closest("td").toggleClass("selected");
  })
})