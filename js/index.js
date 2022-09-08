import Sounds from './sounds.js'

const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');



let minutes = 0;
let seconds = 0;
let timerTimeout;

const sounds = Sounds();

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function reset() {
  minutesDisplay.textContent = "00";
  secondsDisplay.textContent = "00";
  minutes = 0;
  seconds = 0;
}

function countdown() {
  timerTimeout = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if(seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")

      if(minutes <= 0) {
        reset()
        return
      }
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    countdown()
  }, 1000)
}

buttonPlus.addEventListener('click', () => {
  minutes += 5;
  updateTimerDisplay(minutes, seconds);
  sounds.pressButton();
})

buttonMinus.addEventListener('click', () => {
  minutes -= 5;
  if(minutes < 0) {
    minutes = 0
  }
  updateTimerDisplay(minutes, seconds);
  sounds.pressButton();
})

buttonStop.addEventListener('click', () => {
  reset();
  sounds.pressButton();
  sounds.timeEnd();
})

buttonPlay.addEventListener('click', () => {
  countdown();
  sounds.pressButton();
  sounds.handleCardForrest;
  sounds.handleCardRain;
  sounds.handleCardCoffeShop;
  sounds.handleCardFirePlace;
})

sounds.handleSoundOff;

export {
  minutes,
  seconds
}

