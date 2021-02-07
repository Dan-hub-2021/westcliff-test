 //Create a time data function
 function currentTime(){
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or Pm

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
     //Add 0 to single digits for minutes
        if (min < 10) {
        min = "0" + min;
    }
    
    //Determine Am or Pm string
    if (hr == 12) {
        ampm = "PM" // Set to PM                    
    } else if (hr > 12) {
        hr -= 12; // Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //Set to PM
    } else {
        ampm = "AM"; //Set to AM
    }
    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm;

    var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
    var timeDiff; //To store time difference between GMT hour and Local hour

    timeDiff = utchr - hr;
    
    var adjTimeDiff; //To store time difference converted to positive nunmber 
    
    adjTimeDiff = Math.abs(timeDiff);

    var timeZone; //To store the 4 timezones (PM, MT, CT, ET)
    if (adjTimeDiff == 5) {
        timeZone = "ET"; 
    } else if (adjTimeDiff == 7) {
        timeZone = "MT";
    } else if (adjTimeDiff == 6) {
        timeZone = "CT";
    } else {
        timeZone = "PT";
    }
    
    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; //adding time

    //Run time data functon every 1 second
    setInterval(currentTime, 1000); //setting timer   
} 
//Inital run of time data function
currentTime();