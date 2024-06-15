const initialQuestions = [
  {
    label: 'Friendliness',
    rating: 0,
  },
];

const storedQuestions = JSON.parse(localStorage.get("storedQuestions"));  

const questions = storedQuestions || initialQuestions;

const makeStarRating = questions => {
  const container = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = questions.label;
  container.appendChild(label);
  container.appendChild(makeStars(5, questions));

  return container;
}

const makeStars = (maxValue, questions) =>{
  const starContainer = document.createElement('div');

  for(let starPosition = 1; starPosition <= maxValue; starPosition++){
    const starElement = document.createElement('span');
    starContainer.appendChild(starElement);

    if(starPosition<=questions.rating){
      starElement.classList.add('filled');
    }else{
      starElement.classList.add('empty');
    }
  }
  return starContainer;
}

//2.23.25
