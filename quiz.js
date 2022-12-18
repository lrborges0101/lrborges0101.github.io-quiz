const data = [
    {
        id:1,
        question:"De quem é a famosa frase “Penso, logo existo”?",
        answers:[
            {answer:"Platão", isCorrect:false},
            {answer:"Galileu Galilei", isCorrect:false},
            {answer:"Descartes", isCorrect:true},
            {answer:"Sócrates", isCorrect:false},
            
        ]
    
    
    },
    {
        id:2,
        question:"Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",
        answers:[
            {answer:"Tem entre 2 a 4 litros. São retirados 450 mililitros", isCorrect:false},
            {answer:"Tem entre 4 a 6 litros. São retirados 450 mililitros", isCorrect:true},
            {answer:"Tem 10 litros. São retirados 2 litros", isCorrect:false},
            {answer:"Tem 7 litros. São retirados 1,5 litro", isCorrect:false},
        ]
    
    
    },
    {
        id:3,
        question:"De onde é a invenção do chuveiro elétrico?",
        answers:[
            {answer:"França", isCorrect:false},
            {answer:"Inglaterra", isCorrect:false},
            {answer:"Austrália", isCorrect:false},
            {answer:"Brasil", isCorrect:true},
        ]
    
    
    },
    {
        id:4,
        question:"Quais o menor e o maior país do mundo?",
        answers:[
            {answer:"Vaticano e Rússia", isCorrect:true},
            {answer:"Nauru e China", isCorrect:false},
            {answer:"Mônaco e Canadá", isCorrect:false},
            {answer:"Malta e Estados Unidos", isCorrect:false},
        ]
    
    
    },
]

const gameScreen = document.querySelector('.game')
const resultScreen = document.querySelector('.result')
const answerContainer = document.querySelector('.respostas')
const submit = document.querySelector('.enviar')
const play = document.querySelector('.play')
const question = document.querySelector('.pergunta')

let qIndex = 0;
let currentCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;




const showResult = () =>{
    resultScreen.style.display ='block'
    gameScreen.style.display= 'none'

    resultScreen.querySelector('.corretas').textContent = `Respostas Corretas ${currentCount}`;
    resultScreen.querySelector('.erradas').textContent = `Respostas Erradas ${wrongCount}`;
    resultScreen.querySelector('.pontos').textContent = `Pontuação Total ${(currentCount - wrongCount) * 12.5}`;
}

const showQuestion = (qNumber) =>{
    if(qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answerContainer.innerHTML =data[qNumber].answers.map((item, index)=>
        `<div class="resposta">
                        <input  name="answer" type="radio" id=${index} value=${item.isCorrect} >
                        <label for="resposta4">${item.answer}</label>
                    </div>`
    ).join("")
    
};

const selectAnswer = ()=>{
    answerContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener('click', (e)=>{
            selectedAnswer = e.target.value
            console.log(selectedAnswer)
        })
    })
    
};


const submitAnswer = () =>{
    submit.addEventListener('click',()=>{
        if(selectedAnswer !== null){
             selectedAnswer === 'true' ? currentCount++ : wrongCount ++;
        qIndex++
        showQuestion(qIndex)
        selectAnswer();
        }else {alert ('Escolha uma Alternativa')} 
       
    })
}

const playAgain = ()=>{
    qIndex = 0;
    currentCount = 0;
    wrongCount = 0;
    total = 0;
    selectedAnswer;
  showQuestion(qIndex)
  selectAnswer();

}

 play.addEventListener('click', ()=>{
   resultScreen.style.display ='none'
   gameScreen.style.display= 'block'
   playAgain();
   
 })

showQuestion(qIndex);
submitAnswer();
selectAnswer();