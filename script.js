var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

//Start Quiz
function startQuiz() {
  var startScreen = document.getElementById("start-screen");
  if (startScreen.style.display === "none") {
    startScreen.style.display = "block";
  } else {
    startScreen.style.display = "none";
  }
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

//Time counter for quiz.
var timeCounter = document.querySelector(".time");

//Seconds for timer.
var secondsLeft = 60;

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

setTime();
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
  showQuestion(currentQuestionIndex);
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children);
}

var questions = [
  {
    question: "1. Scott Tells Ramona That Pac-Man Was Originally Called ?",
    answer: [
      { text: "Dot-Man", correct: false },
      { text: "Muck-Man", correct: false },
      { text: "Get-Man", correct: false },
      { text: "Puck-Man", correct: true }
    ]
  },
  {
    question: "2. Scott’s ‘Zero’ T-Shirt Is A Reference To A Song By ?",
    answer: [
      { text: "The Smashing Pumpkins", correct: true },
      { text: "Radiohead", correct: false },
      { text: "Sex Bob-Omb", correct: false },
      { text: "The Cranberries", correct: false }
    ]
  },
  {
    question: "3. When Did Scott Date Kim ?",
    answer: [
      { text: "They never dated", correct: false },
      { text:  "College", correct: false },
      { text:  "Highschool", correct: true },
      { text: "Elementary School", correct: false }
    ]
  },
  {
    question: "4. What Tea Does Ramona Choose For Herself And Scott ?",
    answer: [
      { text: "Blueberry", correct: false },
      { text: "Raspberry", correct: false },
      { text: "Ginseng", correct: false },
      { text: "Sleepy Time", correct: true }
    ]
  },
  {
    question: "5. Who Is The Lead Singer Of The Band <i>The Clash at Demonhead<i> ?",
    answer: [
      { text: "Knives Chau", correct: false },
      { text: "Envy Adams",correct: true },
      { text: "Gideon",  correct: false },
      { text: "Todd Ingram", correct: false }
    ]
  }
];

var nextButton = document.getElementById("next-btn");
var currentQuestionIndex = questions[0];

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
