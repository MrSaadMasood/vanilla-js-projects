// declaring some global variables

const resetButton = document.querySelector(".reset_button");
const starttButton = document.querySelector(".start_button");
const stopButton = document.querySelector(".stop_button");

const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// setting event listeners on the buttons

starttButton.addEventListener("click", starStopWatch);

stopButton.addEventListener("click", stopStopWatch);

resetButton.addEventListener("click", resetStopWatch);

// starting stop watch functionality
let timer;
let minutesCounter = 0;
let secondsCounter = 0;

// the funtion uses an asynchorous funtion and executes ever 1 second and increases the value of seconds counter by 1
// and if the seconds reach 59 it increases the minutes counter by one and sets the second counter to 0 again
function starStopWatch() {
  timer = setInterval(() => {
    if (secondsCounter >= 59) {
      secondsCounter = 0;
      minutesCounter += 1;
      minutes.textContent =
        minutesCounter < 10 ? `0${minutesCounter}` : `${minutesCounter}`;
    }
    secondsCounter += 1;
    seconds.textContent =
      secondsCounter < 10 ? `0${secondsCounter}` : `${secondsCounter}`;
  }, 1000);
}

// this funtion stop the execution of the setTImeInterval funtion responsible for the execution every second to its current/
// latest value
function stopStopWatch() {
  clearInterval(timer);
}

// this funtion resets the value of the seconds and minutes counter to 0.

function resetStopWatch() {
  clearInterval(timer);
  minutesCounter = 0;
  secondsCounter = 0;
  seconds.textContent = "00";
  minutes.textContent = "00";
}
