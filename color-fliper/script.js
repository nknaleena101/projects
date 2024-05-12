const newColourBtnElement = document.getElementById('new-colour-btn');
const currentColourElement = document.getElementById('current-colour');

const hexValues = ['0' , '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHexValue() {
  const randomIndexPosition = Math.floor(
    Math.random() * hexValues.length 
  );
  
  const randomValue = hexValues[randomIndexPosition];

  return randomValue;
};

function getRandomHexString(stringLength){
  let hexString = '';
  for (let i=0; i<stringLength; i++){
    hexString += getRandomHexValue();
  }

  return hexString;
}

newColourBtnElement.addEventListener('click', () => {
  const randomHexString = '#'+getRandomHexString(6);
  document.body.style.backgroundColor = randomHexString;
  currentColourElement.innerText = randomHexString;
  currentColourElement.style.color = randomHexString;
})