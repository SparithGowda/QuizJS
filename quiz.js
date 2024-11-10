const questions = [

    {
        question:"Which is largest animal in the World?",
        answers: [
            {text:"Shark",correct: false},
            {text:"Blue Elephant",correct: true},
            {text:"Elephant",correct: false},
            {text:"Giraffe",correct: false},

            
        ]

    },
    {
        question: "Which is the tallest animal in the World?",
        answers: [
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: true},
            {text: "Lion", correct: false},
            {text: "Blue Whale", correct: false}
        ]
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        answers: [
            {text: "Elephant", correct: false},
            {text: "Tiger", correct: false},
            {text: "Lion", correct: true},
            {text: "Leopard", correct: false}
        ]
    },
    {
        question: "Which bird is known for its ability to mimic sounds?",
        answers: [
            {text: "Eagle", correct: false},
            {text: "Parrot", correct: true},
            {text: "Penguin", correct: false},
            {text: "Owl", correct: false}
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            {text: "Cheetah", correct: true},
            {text: "Lion", correct: false},
            {text: "Tiger", correct: false},
            {text: "Leopard", correct: false}
        ]
    },
    {
        question: "Which animal is known to have the longest lifespan?",
        answers: [
            {text: "Elephant", correct: false},
            {text: "Blue Whale", correct: false},
            {text: "Galápagos Tortoise", correct: true},
            {text: "Dolphin", correct: false}
        ]
    }
    


];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click",selectAnswer);
    
    });


}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild)
        answerButton.removeChild(answerButton.firstChild);

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";


        }

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }else{
        showScore();

    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();

    }
})

    


startQuiz();


