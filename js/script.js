//getting time variables

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

//setting all things only first time
(function(){
    console.log("Anonymous self calling function is working");  
}());

//calling second function in 1 second
setInterval(setSeconds,1000);



function setSeconds(){
    var date = new Date();
    let sec = date.getSeconds();

    if(sec<=9)
    sec = ('0'+sec);

    seconds.innerHTML = sec;
}


