var partnersImages = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class='partner'>";
var closeList = "</li>";

for (var i=0; i<6; i++) {
    fileNames.push("partner-"+(i+1));
    partnersImages.push("<img src='images/partners/" + fileNames[i] + ".png'"+ "'>");
    image = openList + partnersImages[i] + closeList;
    imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList.join(" ");

/* ------- RANDOM CODES ------ */

//NOTE: submit button is initially disabled upon loading of this page - see <body> in html

var code = ' '; //initialize to null value
var getCode = ' '; //to store entered code
var btnvalue; //for button boolean value
//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
