let currentQuestion = 0
let correctAnswers = 0



//Events


document.querySelector(".bc").addEventListener('click' , showQuestion)

document.querySelector(".scA button").addEventListener('click' , reset)


//functions
function showQuestion() {
    if(questions[currentQuestion]){
    let q = questions[currentQuestion]
    let pct = Math.floor((currentQuestion/questions.length)*100)
    document.querySelector('.pbar').style.width=`${pct}%`
    document.querySelector(`.bc`).style.display = 'none'
    document.querySelector(`.texttop`).style.display = 'none'
    document.querySelector(`.qA`).style.display = 'block'
    document.querySelector(`.scA`).style.display = 'none'

    document.querySelector(`.q`).innerHTML = q.question
    
 
    let optHtml = ''
    for(let i in q.options){
     optHtml +=`<div data-op="${i}" class="opt"> <span>${parseInt(i)+1}</span> ${q.options[i]}</div>`
    }

    document.querySelector('.opts').innerHTML = optHtml
    
    document.querySelectorAll('.opts .opt').forEach(item =>{
        item.addEventListener('click', optionClickEvent)

    })

    } else{
        finishQuiz()
    }
}

function optionClickEvent(e) {

  let clickedOption = parseInt(e.target.getAttribute('data-op')) 

  if(questions[currentQuestion].answer === clickedOption){
    correctAnswers++
  }
  currentQuestion++
  showQuestion()
}


function finishQuiz(){
    let points = Math.floor((correctAnswers/questions.length)*100)
    document.querySelector(`.scPct`).innerHTML = `Acertou ${points}%`
    if(points > 60){
        document.querySelector(`.starImage`).style.display = 'block'
    }else {
        document.querySelector(`.scT1`).style.color = 'red'
        document.querySelector(`.scT1`).innerHTML  = `Abaixo da Media`
        document.querySelector(`.scT2`).innerHTML  = ``
    }


    document.querySelector(`.qA`).style.display = 'none'
    document.querySelector(`.scA`).style.display = 'block'
    document.querySelector('.pbar').style.width=`100%`
    
}

function reset(){
    currentQuestion = 0 
    correctAnswers = 0

    showQuestion()
}