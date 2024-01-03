
//start button element
const startButton = document.getElementById('start');
//stop button element
const stopButton = document.getElementById('stop');
//reset button element
const resetButton = document.getElementById('reset');
// time display element
const display = document.getElementById('time') ;

// bool to check if clock is running or not
let isRunning = false ;

// varibale to store current second, minute and hour
let second = 0, hour = 0, minute = 0 ;


// update the value of second, minute and hour varibale
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



// function that update the screen
function displayUpdate() {
    let stirngSecond = second.toString().padStart(2,0) ;
    let stirngMinute = minute.toString().padStart(2,0) ;
    let stirngHour = hour.toString().padStart(2,0) ;
    display.innerHTML = `${stirngHour} : ${stirngMinute} : ${stirngSecond}` ;
}


//  calling update function every second
setInterval(() => {
    if(isRunning) {
        update() ;
    }
}, 1000) ;


// event listeners for start button, stop button and reset button

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

