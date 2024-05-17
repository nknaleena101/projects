// document.getElementById('blinkButton').addEventListener('click', function() {
//   let box = document.getElementById('box');
//   box.classList.add('blink');

//   setTimeout(function() {
//       box.classList.remove('blink');
//   }, 500); // Blinking duration (500ms)
// });


const inputElement = document.querySelector('input');
const qKey = document.querySelector('.q');

inputElement.addEventListener("keydown", (e) => {
  console.log(e.key);
  if(e.key===q){
    document.body.style.setProperty('background-color',rgb(23, 64, 0));
  }
});
