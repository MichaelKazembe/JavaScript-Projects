// display the time in the format of HH:MM:SS
// display the start, stop, and reset buttons
//start button should start the timer
//stop button should stop the timer
//reset button should reset the timer


let hours = 0;
let minutes = 0;
let seconds = 0;
let timeRef = document.getElementById('timer');

let timer = null;

//start button
document.getElementById('start-btn').onclick = () => {
    if(timer != null) {
        clearInterval(timer);//
    }
    timer = setInterval(displayTimer, 1000);//displayTimer function will be called every 1000ms
}

//
document.getElementById('stop-btn').onclick = () => {
    clearInterval(timer);//
}

//reset button
document.getElementById('reset-btn').onclick = () => {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    timeRef.innerHTML = '00:00:00';//reset the timer to 00:00:00
}

//display the time in the format of HH:MM:SS
function displayTimer() {
    seconds++;
    //if seconds is equal to 60, reset seconds to 0 and increment minutes by 1
    if(seconds == 60){
        seconds = 0;
        minutes++;
        //if minutes is equal to 60, reset minutes to 0 and increment hours by 1
        if(minutes == 60) {
            minutes = 0;
            hours++;
            //if hours is equal to 12, reset hours to 0
            if(hours == 12) {
            hours = 0;
            }
        }
    }

let hoursString = hours < 10 ? '0' + hours : hours;//if hours is less than 10, add a 0 in front of it
let minutesString = minutes < 10 ? '0' + minutes : minutes; //if minutes is less than 10, add a 0 in front of it
let secondsString = seconds < 10 ? '0' + seconds : seconds; //if seconds is less than 10, add a 0 in front of it

//display the time in the format of HH:MM:SS
timeRef.innerHTML = `${hoursString} : ${minutesString} : ${secondsString}`;
}