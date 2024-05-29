const flashQuestions =[
  {
    question: "what is the capital of sri lanka?",
    answer: "Colombo",
  },
  {
    question: "is c language is a low level language?",
    answer: "yes",
  }
];

const mainElement = document.querySelector("main");

const makeFlashCard = data => {
  return `
  <h2>${data.question}</h2>
  <h3 class="answerText">${data.answer}</h3>
  
  <div class="buttons">
  <button class="back" onclick="previousQuestion()">Back</button>
  <button class="show" onclick="showAnswer()">show</button>
  <button id="next" onclick="nextQuestion()">Next</button>
  </div>
  `
};

function showAnswer() {
  const h3Element = document.querySelector('.answerText');
  const showbtn = document.querySelector('.show');
  
  if(h3Element.classList.contains('active')){
    h3Element.classList.remove('active');
    showbtn.textContent=('Show');
  }else{
    h3Element.classList.add('active');
    showbtn.textContent=('Hide');
  }
};

let currentQuestion = 0;

function nextQuestion() {
  currentQuestion += 1;
  updatePage();
};
function previousQuestion() {
  currentQuestion -= 1;
  updatePage();
};

const updatePage = () => {
  let markup = makeFlashCard(flashQuestions[currentQuestion]);
  mainElement.innerHTML = markup;
};

updatePage();