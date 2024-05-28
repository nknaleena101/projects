const hoursInputElement = document.getElementById("hoursInput");
const minutesInputElement = document.getElementById("minutesInput");
const secondsInputElement = document.getElementById("secondsInput");

const hoursOutputElement = document.getElementById("hoursOutput");
const minutesOutputElement = document.getElementById("minutesOutput");
const secondsOutputElement = document.getElementById("secondsOutput");

const startTimerButton = document.getElementById("startTimer");

let targetTime;
let timerInterval;

const updateTimer = () => {
  if(targetTime){
    const differenceInSeconds = Math.floor( targetTime - Date.now() )/1000;     

    const hours = Math.floor(differenceInSeconds / 3600);
    const minutes = Math.floor(differenceInSeconds / 60) % 60;
    const seconds = Math.floor(differenceInSeconds / 60);
    //watch 1.59.00
  }
}
