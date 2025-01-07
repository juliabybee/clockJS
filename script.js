setInterval(setClock, 1000)//tells the browser to run this function every second

//The querySelector is a JavaScript method that plays a vital role in the searching of elements.
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
//add the secondHand variable here

function setClock() {
// returns the hour at which the code is being executed (return a string representing the current time)
//getting seconds from the actual time setting the ratio
//getting seconds from the actual time setting the ratio
// //getting seconds from the actual time setting the ratio
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)//grabbing from the css file
}

//call setClock function
