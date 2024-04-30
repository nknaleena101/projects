const color = ['rgb(255, 0, 0)','rgb(0, 255, 0)','rgb(0, 0, 255)','rgb(255, 255, 0)','rgb(255, 0, 255)','rgb(0, 255, 255)','rgb(128, 0, 128)','rgb(255, 165, 0)','rgb(0, 128, 0)','rgb(0, 0, 128)'];

const clickBtn = document.querySelector('.clickBtn');

clickBtn.addEventListener('click', bgChange);

function bgChange() {
  let randomNumber = Math.floor(Math.random() * 10);
  document.body.style.backgroundColor = color[randomNumber]; 
};