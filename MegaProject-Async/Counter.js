// declaring global variables that are necessary for the counter funtionality

const decreaseCounterButton = document.querySelector(
  ".decrease_counter_button",
);
const increaseCounterButton = document.querySelector(
  ".increase_counter_button",
);
const resetCounterButton = document.querySelector(".reset_counter_button");

const counterDisplay = document.querySelector(".count");

// setting counters initial value to 0
let counter = 0;

increaseCounterButton.addEventListener("click", increaseOne);

decreaseCounterButton.addEventListener("click", decreaseOne);

resetCounterButton.addEventListener("click", resetCounter);

// this funtion increases the value of counter by 1
function increaseOne() {
  counter += 1;
  counterDisplay.textContent = counter < 10 ? `0${counter}` : `${counter}`;
}

// this funtion decreases the value of counter by 1

function decreaseOne() {
  counter -= 1;
  if (counter < 0) {
    counterDisplay.textContent = counter > -10 ? `${counter}` : `${counter}`;
  } else {
    counterDisplay.textContent = counter < 10 ? `0${counter}` : `${counter}`;
  }
}
// this funtion resets the counter

function resetCounter() {
  counter = 0;
  counterDisplay.textContent = "00";
}
