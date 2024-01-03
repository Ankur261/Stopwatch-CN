

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const display = document.getElementById('time') ;
let isRunning = false ;
let second = 0, hour = 0, minute = 0 ;


function update() {
    second++ ;
    displayUpdate() ;
    if(second == 60) {
        second = 0 ;
        minute++ ;
    }
    if(minute == 60) {
        minute = 0 ;
        hour++
    }
}




function displayUpdate() {
    let stirngSecond = second.toString().padStart(2,0) ;
    let stirngMinute = minute.toString().padStart(2,0) ;
    let stirngHour = hour.toString().padStart(2,0) ;
    display.innerHTML = `${stirngHour} : ${stirngMinute} : ${stirngSecond}` ;
}


setInterval(() => {
    if(isRunning) {
        update() ;
    }
}, 1000) ;


startButton.addEventListener('click', () => {
    isRunning = true ;
    
});

stopButton.addEventListener('click', () => {
    isRunning = false ;
});

resetButton.addEventListener('click', () => {
    isRunning = false ;
    hour = 0 ;
    minute = 0 ;
    second = 0 ;
    displayUpdate() ;
});

