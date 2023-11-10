var min = 0;
var sec = 0 ;
var milliSec = 0 ;
var timerMinute = 4;
var timerSecond = 59;
var interval = false ;
var timerInterval = false;

var milliSecond =  document.getElementById("milli-sec");
var second =  document.getElementById("second");
var minute =  document.getElementById("minute");
var timerMinuteDiv =  document.getElementById("timer-minute");
var timerSecondDiv =  document.getElementById("timer-second");
var lapMinute =  document.getElementById("lap-minute");
var lapSecond =  document.getElementById("lap-second");
var lapMilliSecond =  document.getElementById("lap-millisecond");
var lapMinuteSecond =document.getElementById("lap-minute-second")
var lapMinuteSecondName =document.getElementById("lap-minute-second-name")
var starts =document.getElementById("start")
var stops =document.getElementById("stop")
var stopWatchDiv =document.getElementById("stop-watch-div")
var timerDiv = document.getElementById("timer-div")
var editValueInput = document.getElementById ("edit-value")
var numSecond ;

timerMinuteDiv.innerHTML = timerMinute;
timerSecondDiv.innerHTML = timerSecond +"s";

function stopWatch(){
   timerDiv.style.display = "none"
   stopWatchDiv.style.display = "block"
}


function start (){
interval = true ;
stops.style.display = "block"
starts.style.display = "none"
}
function stop (){
    starts.style.display = "block"
    stops.style.display = "none"
    interval = false ;
//    clearInterval(timer)
}
function reset (){ 
    min = 0;
     sec = 0 ;
     milliSec = 0;
    interval = false;
    var milliSecond =  document.getElementById("milli-sec");
    var second =  document.getElementById("second");
    var minute =  document.getElementById("minute");
    
    milliSecond.innerText = "00"; 
    second.innerText = "00";
    minute.innerText = "00";
    
}
 let timer = setInterval (function (){
 
    if(interval === true) {
          
   
     milliSecond.innerText = milliSec++ ; 
    
    if(milliSec > 99 ){
        milliSec = 0;
        minute.innerText = sec++ ;
        // console.log(sec)
    }
     if (milliSec < 10) {
       let a  = "0"  + milliSec;
         milliSecond.innerText = a;
    }

    if( sec > 60){
        sec = 0;
        second.innerText = min++ ;
    }
    if (sec < 10) {
      let b   = "0"  +  sec; 
         minute.innerText = b ;
    }
        if (min < 10) {
       let c  = "0" +  min;
         second.innerText = c ;
    }
 }
}
,10)

function lap(){
     lapMinuteSecondName.style.display = "flex";
    lapMinuteSecond.innerHTML +=`
    <div class="second-minute border" id="lap-number">
    <div id="lap-minute">${min}</div>
    <div id="lap-second">${sec}</div>
    <div id="lap-millisecond">${milliSec}</div>
    </div>
    ` 
    var lapNumber = document.getElementById("lap-number")
    console.log(lapNumber);
}

 function editValue(){

    editValueInput.style.display = "block";
    alert("edit value")
 }

function timers(){
   stopWatchDiv.style.display = "none"
   timerDiv.style.display = "block";
   console.log(stopWatchDiv)
   lapMinuteSecondName.style.display = "none";
//    lapNumber.style.display = "none";
}
function timerStop(){
    timerInterval = false;
}
function timerStart(){
   timerInterval = true ; 
   if (editValueInput.value.trim() === ""){
      alert("input not filled")
   }
   else{
      for (var i = 0 ; i < editValueInput.value.length ; i++){
         if (editValueInput.value[i] === ":"){
            var firstValue =  editValueInput.value.slice(i + 1, i.length)
            var secondValue  = editValueInput.value.slice(0 , i)
            timerSecond = secondValue ;
            timerMinute = firstValue ;
            console.log(firstValue)
            console.log(secondValue)
         }
         else{
            console.log(editValueInput.value)
         }
      }
   }
   editValueInput.style.display = "none";
}

setInterval(function (){
  if ( timerInterval === true){ 
       timerSecond--
       console.log(timerSecond)
       timerSecondDiv.innerHTML = timerSecond +"s";
       timerMinuteDiv.innerHTML = timerMinute;
       if (timerSecond < 1){
          timerSecond = 59
          timerMinute--
          timerMinuteDiv.innerHTML = timerMinute;
       if ( timerMinute < 0 ){
        alert("timer compelete")
           timerMinute = 4 ;
           timerSecond = 59;
           timerSecondDiv.innerHTML = timerSecond;
           timerMinuteDiv.innerHTML = timerMinute;
           timerStop()
       }
       }  
   }
}
,1000)
// function timerReset(){
    
// }
