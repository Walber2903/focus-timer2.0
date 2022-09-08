import { minutes, seconds } from './index.js'
export default function() {

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const buttonSoundOn = document.querySelector('.sound-on');
  const buttonSoundOff = document.querySelector('.sound-off');

  const cardForrest = document.querySelector('#forrest');
  const cardRain = document.querySelector('#rain');
  const cardCoffeShop = document.querySelector('#coffeShop');
  const cardFirePlace = document.querySelector('#firePlace');

  const forrest = new Audio("../sounds/Floresta.wav")
  const rain = new Audio("../sounds/Chuva.wav")
  const coffeShop = new Audio("../sounds/Cafeteria.wav")
  const firePlace = new Audio("../sounds/Lareira.wav")
  let soundPage;
  let muted = false;
  let forrestClicked = false;
  let rainClicked = false;
  let coffeShopClicked = false;
  let firePlaceClicked = false;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
    forrest.pause();
    rain.pause();
    coffeShop.pause();
    firePlace.pause();
  }

  function playAndStopAudio(bgAudio) {
    let audioArray = [forrest, rain, coffeShop, firePlace];

    audioArray.forEach((audio) => {
      if(audio == bgAudio){
        bgAudio.loop = true;
        bgAudio.paused ? bgAudio.play() : bgAudio.pause();
      }else {
        audio.pause();
      }
    })
  }

  const handleSoundOff = buttonSoundOff.addEventListener('click', () => {

    if(muted == false) {
      muted = true;
      buttonSoundOff.classList.add('hide');
      buttonSoundOn.classList.remove('hide');
      forrest.pause();
      rain.pause();
      coffeShop.pause();
      firePlace.pause();
    }
  }); 

  const handleCardForrest  = cardForrest.addEventListener('click', () => {
    if(forrestClicked == false) {
      cardForrest.classList.toggle('active');
      cardRain.classList.remove('active');
      cardCoffeShop.classList.remove('active');
      cardFirePlace.classList.remove('active');
      soundPage = forrest;
      playAndStopAudio(soundPage);
      forrestClicked = true;
      rainClicked = false;
      coffeShopClicked = false;
      firePlaceClicked = false;
    }

    if(muted == true) {
      muted = false;
      buttonSoundOff.classList.remove('hide');
      buttonSoundOn.classList.add('hide');
      
    }
  })

  const handleCardRain  = cardRain.addEventListener('click', () => {
    if(rainClicked == false) {
      cardForrest.classList.remove('active');
      cardRain.classList.toggle('active');
      cardCoffeShop.classList.remove('active');
      cardFirePlace.classList.remove('active');
      soundPage = rain;
      playAndStopAudio(soundPage);
      rainClicked = true;
      forrestClicked = false;
      coffeShopClicked = false;
      firePlaceClicked = false;
    }

    if(muted == true) {
      muted = false;
      buttonSoundOff.classList.remove('hide');
      buttonSoundOn.classList.add('hide');
    }
  })

  const handleCardCoffeShop  = cardCoffeShop.addEventListener('click', () => {
    if(coffeShopClicked == false){
      cardForrest.classList.remove('active');
      cardRain.classList.remove('active');
      cardCoffeShop.classList.toggle('active');
      cardFirePlace.classList.remove('active');
      soundPage = coffeShop;
      playAndStopAudio(soundPage);
      rainClicked = false;
      forrestClicked = false;
      coffeShopClicked = true;
      firePlaceClicked = false;
    }

    if(muted == true) {
      muted = false;
      buttonSoundOff.classList.remove('hide');
      buttonSoundOn.classList.add('hide');
    }
  })

  const handleCardFirePlace  = cardFirePlace.addEventListener('click', () => {
    if(firePlaceClicked == false) {
      cardForrest.classList.remove('active');
      cardRain.classList.remove('active');
      cardCoffeShop.classList.remove('active');
      cardFirePlace.classList.toggle('active');
      soundPage = firePlace;
      playAndStopAudio(soundPage);
      rainClicked = false;
      forrestClicked = false;
      coffeShopClicked = false;
      firePlaceClicked = true;
    }
    if(muted == true) {
      muted = false;
      buttonSoundOff.classList.remove('hide');
      buttonSoundOn.classList.add('hide');
    }
  })

  return {
    pressButton,
    timeEnd,
    forrest,
    rain,
    coffeShop,
    firePlace,
    handleSoundOff,
    handleCardForrest,
    handleCardRain,
    handleCardCoffeShop,
    handleCardFirePlace
  }
}