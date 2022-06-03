const wrapper = document.querySelector(".wrapper")
// windows
const helloWindow = document.querySelector(".hello")
const questionsWindow = document.querySelector(".questions")
const resultWindow = document.querySelector(".result")
// buttons
const helloButton = document.querySelector(".hello__button")
const nextButton = document.querySelector(".questions__button")
const resultButton = document.querySelector(".result__button")

// dinamic
const list = document.querySelector(".questions__questions")
const numbersBox = document.querySelector(".questions__header-numbers")
const header = document.querySelector(".questions__header")
const currentQuestion = document.querySelector(
  ".questions__header-numbers__current"
)
const allQuestions = document.querySelector(".questions__header-numbers__all")
const resultNumbersBlock = document.querySelector(".result__numbers")
const resultUser = document.querySelector(".result__numbers-current")

let index = 0
let userScore = 0

resultButton.onclick = () => {
  window.location.reload()
}

helloButton.addEventListener("click", () => {
  helloWindow.classList.add("close")
  questionsWindow.classList.remove("close")
  addInfo(0)
})

nextButton.onclick = () => {
  if (index < arrayQuestions.length - 1) {
    index++
    addInfo(index)
  } else {
    console.log("End")
    showResult()
  }
}

let addInfo = (idx) => {
  let newQuestion = `<span class="questions__header-question">${arrayQuestions[idx].number} из ${arrayQuestions.length}. ${arrayQuestions[idx].question}</span>`
  header.innerHTML = newQuestion

  let newAnswers =
    `<li class="questions__questions-item">${arrayQuestions[idx].options[0]}</li>` +
    `<li class="questions__questions-item">${arrayQuestions[idx].options[1]}</li>` +
    `<li class="questions__questions-item">${arrayQuestions[idx].options[2]}</li>` +
    `<li class="questions__questions-item">${arrayQuestions[idx].options[3]}</li>`
  list.innerHTML = newAnswers

  let answers = list.querySelectorAll(".questions__questions-item")
  for (let i = 0; i < answers.length; i++) {
    answers[i].setAttribute("onclick", "optionSelected(this)")
  }
}

function optionSelected(answer) {
  let allAnswers = list.children.length
  let userAnswer = answer.textContent
  let correctAnswer = arrayQuestions[index].answer
  if (userAnswer === correctAnswer) {
    userScore += 1
    console.log(userScore)
    answer.classList.add("true")
  } else {
    answer.classList.add("false")
    for (let i = 0; i < allAnswers; i++) {
      if (list.children[i].textContent == correctAnswer) {
        list.children[i].setAttribute("class", "questions__questions-item true")
      }
    }
  }
  for (let i = 0; i < allAnswers; i++) {
    list.children[i].classList.add("disabled")
  }
}

function showResult() {
  helloWindow.classList.add("close")
  questionsWindow.classList.add("close")
  resultWindow.classList.remove("close")
  let scoreUserTag = `<p class="result__numbers-current">${userScore} из <span class="result__numbers-all">${arrayQuestions.length}</span></p>`
  resultNumbersBlock.innerHTML = scoreUserTag
  // resultButton.addEventListener("click", () => {
  //   helloWindow.classList.remove("close")
  //   resultWindow.classList.add("close")
  // })
}
