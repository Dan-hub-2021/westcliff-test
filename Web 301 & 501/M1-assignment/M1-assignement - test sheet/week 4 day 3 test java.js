<script language="javascript" type="text/javascript" >

  function openpopup(){
  
  var popper=window.open('popup.htm','_blank','width=400,height=400');
  popper.focus();
  
  }

</script>

<body>

<iframe src="iframe.htm" width="200" height="200" style="border:solid 1px #990000;"></iframe>


<p onclick="openpopup();" style="color:#ff0000;cursor:pointer;text-decoration:underline;">Open Popup using JavaScript</p>

<html><head><title>iframe closer</title>

</head><body>

<p>

  <input type="button" onclick="parent.window.close();" value="Close [x]" />

</p>

</body></html>
</html>

<a href="popup.htm" target="_blank">More info</a>



