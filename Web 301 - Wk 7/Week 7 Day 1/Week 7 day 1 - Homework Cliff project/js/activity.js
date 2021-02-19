$(document).ready(function(){
    $("td").not(".NA").click(function() {
        var content = $(this).text();
        $(this).closest("td").toggleClass("selected");

   
     if ($(this).hasClass("selected")){ //check if selected cell has class
        $('#displaySelected').css("visibility","visible"); //make display box visible
        $('#displaySelected').css("margin-top","2em"); //add space above display box
        var indexPoint = $(this).index();
        var indexLocation;

        if (indexPoint == 1) {
            indexLocation = " at West Cliff";
          } else if (indexPoint == 2) {
            indexLocation = " at North Cliff";
          } else if (indexPoint == 3) {
            indexLocation = " at East Cliff";
          } else {
            indexLocation = " at South Cliff";
          }

        $('#result').append("<p>" + content + indexLocation + "</p>");  //add child element with contents of cell

         } else {//if selected cell don't have class
            $('#result p:contains(' + content + ')').remove(); //remove child element
            
        if ($('result').has('p').length == false) { //check if there are any child elements within parent
            $('#displaySelected').css("visibility","hidden"); //make display box hidden
            $('#displaySelected').css("margin-top","0"); //remove space above display box
            }
        }


    });
});
    

