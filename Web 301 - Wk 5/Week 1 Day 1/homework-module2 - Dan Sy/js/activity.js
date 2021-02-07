$(document).ready(function(){
    $("td").not(".NA").bind("click", function(e){
     $(e.target).closest("td").toggleClass("highlight");
    })

});
    
