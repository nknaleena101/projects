const flashQuestions =[
  {
    question: "What is computer architecture?",
    answer: "Computer architecture refers to the design and structure of computer systems, including hardware components and how they interact to execute instructions.",
  },
  {
    question: "What are the primary components of a computer system?",
    answer: "The primary components of a computer system include the central processing unit (CPU), memory (RAM), input/output devices (keyboard, mouse, monitor), storage devices (hard drive, SSD), and the motherboard.",
  },
  {
    question: "What is the role of the CPU in a computer system?",
    answer: "The CPU (Central Processing Unit) is the primary component responsible for executing instructions. It performs arithmetic, logic, and control operations as directed by the software.",
  },
  {
    question: "What is the difference between RAM and a hard drive?",
    answer: "RAM (Random Access Memory) is volatile memory used by the CPU to temporarily store data and instructions that are actively being used. A hard drive is non-volatile storage used for long-term data storage, retaining data even when the computer is turned off.",
  },
  {
    question: "What is the purpose of the motherboard in a computer system?",
    answer: "The motherboard is the main circuit board of a computer. It houses the CPU, memory, and other essential components, providing connections for communication between them.",
  },
  {
    question: "What is the difference between RISC and CISC architectures?",
    answer: "RISC (Reduced Instruction Set Computer) architectures use a simpler set of instructions, each typically executing in a single clock cycle. CISC (Complex Instruction Set Computer) architectures support a more extensive set of instructions, some of which may require multiple clock cycles to execute.",
  },
  {
    question: "What is pipelining in computer architecture?",
    answer: "Pipelining is a technique used to increase CPU throughput by overlapping the execution of multiple instructions. It divides instruction execution into several stages, allowing multiple instructions to be processed simultaneously.",
  },
  {
    question: "What is cache memory, and why is it used?",
    answer: "Cache memory is a small, high-speed memory located on the CPU or between the CPU and main memory. It stores frequently accessed data and instructions, reducing the average time to access memory and improving overall system performance.",
  },
  {
    question: "What is the role of the operating system in computer architecture?",
    answer: "The operating system manages computer hardware and software resources, providing a platform for running applications and facilitating communication between hardware components.",
  },
  {
    question: "What is parallel processing in computer architecture?",
    answer: "Parallel processing involves performing multiple tasks simultaneously by dividing them among multiple processing units or cores. It can significantly improve performance for tasks that can be divided into smaller sub-tasks that can be executed independently.",
  },
];

const mainElement = document.querySelector("main");

const makeFlashCard = data => {
  return `
  <h2>${data.question}</h2>
  <p class="answerText">${data.answer}</p>
  
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
const questionLimit = flashQuestions.length;

function nextQuestion() {
  if(currentQuestion<questionLimit){
    currentQuestion += 1;
  }else{
    currentQuestion==0; 
  };
  updatePage();
};
function previousQuestion() {
  const backBtn = document.querySelector('back');
  if(!currentQuestion<=0){
    currentQuestion -= 1;
  };
  updatePage();
};

const updatePage = () => {
  let markup = makeFlashCard(flashQuestions[currentQuestion]);
  mainElement.innerHTML = markup;
  console.log(currentQuestion);
};

updatePage();
