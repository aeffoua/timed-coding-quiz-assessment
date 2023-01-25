let start= document.querySelector("#startQuiz");
let timeLeft = 60; 
let current = 0;
let timerId;
let score = 0;
start.addEventListener('click', startQuiz );
let questionsDiv = document.getElementById("questionMsg")
let answerDiv = document.getElementById("answers")
let text= document.getElementById("text");


let questions= [
    {
        message: "commonly used data types DO NOT include:",
        choices: ["Strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        message: "Arrays in JavaScript can be used to store: ",
        choices: ["numbers", "other arrays", "booleans ", "all of the above"],
        answer: "all of the above"
    },
    {
        message: "Avery useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
    {
        message: "The condition of an if/else statement is enclosed within:",
        choices: ["Quotes", "curly brackets ", "parenthesis ", " square brackets"],
        answer: "curly brackets"
    },
    {
        
        message: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["Quotes", "Curly Brackets", "Commas", "Parentheses"],
        answer: "Quotes"
    },

   
];

function startQuiz(){
    timerId = setInterval(countdown, 1000); 
    displayQuestions(current);
    start.style.display = 'none';
    text.style.display = "none";
    console.log("hello world")
    function countdown() {
        if (timeLeft == 0) {
          clearInterval(timerId);
          
        } else {
          document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
          timeLeft--;
        }
    }
    
}
function displayQuestions(id) {
    
    if(questions.length - 1  <  current){
        reset();
        return 0;
    }
    console.log("value of id :" + id);
    document.getElementById("answers").innerHTML = "";
    if (questions.length <= 0) {
        // Display the question and answers
        return 0;
    } 
    let currentQuestions = questions[id]
    questionsDiv.innerHTML = currentQuestions.message;
    for( let choice of currentQuestions.choices) {
        let choiceBtn = document.createElement("button");
        choiceBtn.innerHTML = choice;
        answerDiv.appendChild(choiceBtn);
        choiceBtn.addEventListener("click", (e) => {userChoice(e)})
    }
}
function userChoice(e){
    if(e.target.innerText == questions[current].answer){
        score++;
    }
    current++;
    displayQuestions(current);
    
}
function reset(){
    start.style.display = 'block';
    answerDiv.innerHTML = "";
    questionsDiv.innerHTML = "";
    clearInterval(timerId);
    document.getElementById("timer").innerHTML = "your final score is " + score + " over " + questions.length;
    current = 0;
    score = 0;
}