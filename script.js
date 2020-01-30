const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const buttonBtn = document.getElementsByClassName('btn')
const nextButton = document.getElementById('next-btn')
const timerDisplay = document.getElementById('timerDisplay');
const scoreDiv = document.getElementById('scoreContainer');

startButton.addEventListener('click', startQuiz)


function startQuiz() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

var score = 0;
// Create the questions array
var questions = [
['What is my favorite color?']
['What is my prefered bevarage choice?'],
['What is my favorite way of eating avocados?'],
['Which of the following is NOT a past job?'],
['Which of the following is my dream travel destination?']
];

var answers = [
    ['green','blue','red','black']
    ['water','tequila','beer','soda']
    ['toast', 'guac','baked','all']
    ['optician','receptionist','fast food','home improvement']
    ['Vietnam','Portugal','Spain','Canada']
]

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('TimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
timer.addEventListener('click', startQuiz)




// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// Caclulate score
  function scoreTest(answer, questions) {
  var score = (answer/questions) * 100;
  return score;
  }