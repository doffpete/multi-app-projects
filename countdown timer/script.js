const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');




const newYears = '1 jan 2024';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds % 60);

    const minutes = Math.floor(totalSeconds/60 % 60);

    const hours = Math.floor(totalSeconds / 3600 % 24);

    const days = Math.floor(totalSeconds / 86400);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
    
}

//if you want to add 0 to always keep your hours and minutes time in double digits;
function formatTime(time){
    return time < 10 ? (`0${time}`) : time ;
}

// initial call;
countdown();

setInterval(countdown, 1000);