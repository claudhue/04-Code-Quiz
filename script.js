var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
//Time counter for quiz.
var timeCounter = document.querySelector(".time");
//Seconds for timer.
var secondsLeft = 60;
var currentQuestionIndex = 0;

//Start Quiz
function startQuiz() {
  var startScreen = document.getElementById("start-screen");
  if (startScreen.style.display === "none") {
    startScreen.style.display = "block";
  } else {
    startScreen.style.display = "none";
  }

  setTime();
}

function quizQuestions() {
  var quizScreen = document.getElementById("quiz-screen");
  if (quizScreen.style.display === "none") {
    quizScreen.style.display = "block";
  } else {
    quizScreen.style.display = "none";
  }
  setNextQuestion();
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeCounter.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timeout();
    }
  }, 1000);
}

// setTime();
//When timer reaches 0.
function timeout() {
  var timeOutHTML = "<h1><center>Results</center></h1>";
  var element = document.getElementById("quiz-screen");
  element.innerHTML = timeOutHTML;
}
//Questions
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  console.log(selectedButton)
  const userGuess = selectedButton.innerText;
  const answer = questions[currentQuestionIndex].correctAns;
  // Array.from(answerButtonsElement.children);
  console.log(userGuess, answer)
  if(userGuess === answer){
    currentQuestionIndex++;
    setNextQuestion();
  }
}

var questions = [
  {
    question: "1. Scott Tells Ramona That Pac-Man Was Originally Called ?",
    answer: [
      { text: "Dot-Man", correct: false },
      { text: "Muck-Man", correct: false },
      { text: "Get-Man", correct: false },
      { text: "Puck-Man", correct: true }
    ],
    correctAns: "Puck-Man"
  },
  {
    question: "2. Scott’s ‘Zero’ T-Shirt Is A Reference To A Song By ?",
    answer: [
      { text: "The Smashing Pumpkins", correct: true },
      { text: "Radiohead", correct: false },
      { text: "Sex Bob-Omb", correct: false },
      { text: "The Cranberries", correct: false }
    ],
    correctAns: "The Smashing Pumpkins"
  },
  {
    question: "3. When Did Scott Date Kim ?",
    answer: [
      { text: "They never dated", correct: false },
      { text:  "College", correct: false },
      { text:  "Highschool", correct: true },
      { text: "Elementary School", correct: false }
    ],
    correctAns: "Highschool"
  },
  {
    question: "4. What Tea Does Ramona Choose For Herself And Scott ?",
    answer: [
      { text: "Blueberry", correct: false },
      { text: "Raspberry", correct: false },
      { text: "Ginseng", correct: false },
      { text: "Sleepy Time", correct: true }
    ],
    correctAns: "Sleepy Time"
  },
  {
    question: "5. Who Is The Lead Singer Of The Band The Clash At Demonhead ?",
    answer: [
      { text: "Knives Chau", correct: false },
      { text: "Envy Adams",correct: true },
      { text: "Gideon",  correct: false },
      { text: "Todd Ingram", correct: false }
    ],
    correctAns: "Envy Adams"
  }
];


