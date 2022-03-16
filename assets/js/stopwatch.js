var secondsLabel = document.getElementById("seconds");
var milisecondsLabel = document.getElementById("miliseconds");
var totalSeconds = 0;
var timeInterval;
  var buttonStart = document.getElementById('start');
  var buttonStop = document.getElementById('stop');
  var buttonReset = document.getElementById('reset');


  buttonStart.onclick = function(){
    timeInterval = setInterval(setTime, 10);
  
    function setTime()
    {
        ++totalSeconds;
        
        milisecondsLabel.innerHTML = pad(totalSeconds%100);
     
            secondsLabel.innerHTML = pad(parseInt(totalSeconds/60));
        
        
    }
    
    function pad(val)
    {
        var valString = val + "";
        if(valString.length < 2)
        {
            return "0" + valString;
        }
        else
        {
            return valString;
        }
    }
  }

 
  buttonStop.onclick = function (){
    clearInterval(timeInterval);
   }

   buttonReset.onclick = function() {
    clearInterval(timeInterval);
    totalSeconds = 0;
    secondsLabel.innerHTML = '00';
    milisecondsLabel.innerHTML = '00';
   }