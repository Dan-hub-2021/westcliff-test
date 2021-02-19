var photos = []; // Decalre an empty array to store image element
var fileNames = [] // Declare an empty element to store image file names 
var imageList = [] //Declare an empty element to store html list that contain an image
var image;
var openList = "<li class = 'partner'>";
var closeList = "</li>";
for (var i=0; i<6; i++) {
    fileNames.push("partner-bustour" + (i+1));
    photos.push("<img src='images/partners/" + fileNames[i]+".png'>");
    image = openList + photos[i] + closeList;
    imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList;



            


