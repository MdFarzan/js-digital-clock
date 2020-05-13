//getting time variables

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const greetings = document.querySelector(".greetings");

//setting all things only first time
(function(){
    console.log("Anonymous self calling function is working");  
    setSeconds();
    setMinutes(new Date());
    setHours(new Date());
}());

//calling second function in 1 second
setInterval(setSeconds,1000);



function setSeconds(){
    var date = new Date();
    let sec = date.getSeconds();

    if(sec<=9)
    sec = ('0'+sec);

    // and displaying seconds
    seconds.innerHTML = sec;

    //calling minutes function
    if(sec==0)
    setMinutes(date);
}

//setting minutes
function setMinutes(date){
    let min = date.getMinutes();
    if(min<=9)
    min = ('0'+min);
    
    //displaying minutes;
    minutes.innerText = min;

    //calling hours function
    if(min==0)
    setHours(date);
}

//setting hours
function setHours(date){
    let hour = date.getHours();
    
    if(hour>12)
    hour-=12;

    if(hour<=9)
    hour = ('0'+hour)
    //displaying hours
    hours.innerText = hour;

  //setting greeting line
  setGreetings(new Date().getHours());  
}

function setGreetings(hour){
    console.log(hour);
    if(hour<12)
        greetings.innerText = "Good Morning.";

    else if((hour>=12) && (hour<=18))
        greetings.innerText = "Good Afternoon.";
    
    else if((hour>18) && (hour<=20))
    greetings.innerText = "Good Evening.";

    else
    greetings.innerText = "Good Night.";

}

