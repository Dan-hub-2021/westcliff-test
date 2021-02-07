$(document).ready(function(){
    $(document).bind("click", function (e) {   
    $(e.target).closest("td").toggleClass("highlight");
    })
    
});
    //change the size and backgroud of any element ie box in table ex 18
    $(document).ready(function() {
        $("div:first").width(150);
        $("div:first").css("background-color", "green");     
  });
 
  $(document).ready(function() {
     $("p").css("background-color", "yellow");
  });
  
  //puts a border around each table td
  $(document).ready(function() {
     $("table").attr("border", function(index) {
     return "4px";
  });
  
  //click on function with pointer on over text ex 12
  $(document).ready(function() {
      $("td").click(function () {
      $(this).toggleClass("red");
   });
  
   //toggle on or off box highlight ex 17
$(document).ready(function(){
    $(document).bind("click", function (e) {   
    $(e.target).closest("li").toggleClass("highlight");
    })
});
