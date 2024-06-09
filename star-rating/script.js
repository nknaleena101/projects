const initialQuestions = [
  {
    label: 'Friendliness',
    rating: 0,
  },
];

const storedQuestions = JSON.parse(localStorage.get("storedQuestions"));  

const questions = storedQuestions || initialQuestions;

const ratingsElemant = document.getElementById("ratings");
