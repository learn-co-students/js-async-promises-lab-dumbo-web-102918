const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(quest){
  let el = document.querySelector(".question-container")
  el.innerText = quest.questionText
  return quest
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  let promise = new Promise(function(resolve, reject){

    setTimeout(function(){resolve(question)},time)
  })

  return promise
}

function removeQuestion(){
  let npromise = new Promise(function(resolve,reject){
    let el = document.querySelector(".question-container")
    el.innerText = ""
  })
  return npromise
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  return document.querySelectorAll('.true-false-list .btn')
}

function toggleTrueAndFalseButtons(){
  let btns = trueAndFalseButtons()

  btns.forEach(function (btn){

    if (btn.classList.contains('hide')){
      btn.classList.remove('hide')
    }
    else{
      btn.classList.add('hide')
    }
  })
}

function displayQuestionOnClick (){
    let btn = document.querySelector(".waves-effect")
    return btn.addEventListener("click",()=>{
      toggleTrueAndFalseButtons()
      askQuestionThenRemoveQuestion(5000)
    })
}
