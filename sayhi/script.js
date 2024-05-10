const btnElement = document.querySelector('button');
const spanElement = document.querySelector('span');

document.addEventListener('click', () =>{
  const yourName = prompt("What is you'r name:");
  spanElement.textContent = yourName;
})