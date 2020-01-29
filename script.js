const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')

let currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    showQuestion(currentQuestionIndex)
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.showQuestion.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is JavaScript',
        answers: [
            { text: 'the same as Java', correct: false},
            { text: 'a dynamic language', correct: true}
        ]
    }
]


