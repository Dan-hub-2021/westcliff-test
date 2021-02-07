
document.getElementById("demo").innerHTML = "Hello World!";

function changeText(){
  document.getElementById("demo").innerHTML = "Hello! test"
}
function displayDate(){
  document.getElementById("demo").innerHTML = Date();
}
document.getElementById("myBtn").onclick = displayDate;
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function insertText(){
  document.getElementById("demo").innerHTML = "Hello!";
}

function insertText(){
  document.getElementById("demo").innerHTML = "Hello! test"
}


function myFunction(){
  var x = document.getElementById("myForm").elements[0].value;
  document.getElementById("demo").innerHTML = "Hello" + x;
}


function myFunction() {
  var ref = document.getElementById("myForm");
  var txt = ""; 
  
  for (var i = 0; i < ref.length; i++){
    txt = txt + ref.elements[i].value + "<br>";
    
}

  document.getElementById("demo").innerHTML = txt;
}


function ShowHideDiv(){
  var checkYes = document.getElementById("yes");
  var sample = document.getElementById("example");
  if (checkYes.checked){
    sample.style.display = "block";
    
  }else {
    sample.style.display = "none";
  }
  
}




document.getElementById("heading1").style.color = "#ccc";
document.getElementById("heading1").style.fontFamily = "Impact";
document.getElementById("heading1").style.fontsize = "2em";
  
  function changeStyle(){
    document.getElementById("heading1").style.letterSpacing = "0.2em";
}


document.getElementById("heading1").style.color = "#ccef48";
document.getElementById("heading1").style.fontFamily = "Impact";
document.getElementById("heading1").style.fontsize = "2em";
  
  function changeStyle(){
    document.getElementById("heading1").style.letterSpacing = "0.2em";
}

var btn = document.getElementById("cBtn");
btn.addEventListener("click", changeStyle);


