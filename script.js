const incrementBtn = document.querySelector('.incrementBtn');
const decrementBtn = document.querySelector('.decrementBtn');
const output = document.querySelector('.js-output');

let value = JSON.parse(localStorage.getItem('value'));
output.innerHTML = value;

function increment(){
  value++;
  output.innerHTML=value;
  localStorage.setItem('value',JSON.stringify(value));
};

function decrement(){
  value--;
  output.innerHTML=value;
  localStorage.setItem('value',JSON.stringify(value));
};