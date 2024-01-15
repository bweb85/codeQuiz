// variables
var startButton = document.querySelector("#start");
var timer = document.querySelector("#time")
var questionPage = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var buttonChoice = document.createElement("button");

timer = 0

// Questions
var questionList = [
    {
        question: "What does var stand for?",
        choices: ["variable", "variety", "various ", "vart"],
        correctAnswer: "variable"
    },
    {
        question: "Arrays in JavaScript can be used to store...?",
        choices: ["numbers", "strings", "booleans", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "A useful tool when developing and debugging is...",
        choices: ["trial and error", "console.log", "patience", "All of the above"],
        correctAnswer: "console.log"
    }, 
    {
        question: "A data type that gives a value of true or false is ...",
        choices: ["strings", "booleans", "numbers", "All of the above"],
        correctAnswer: "booleans"
    }
]


// start quiz button
// event listener on click
startButton.addEventListener("click", function () {
    timer = 75;
    // display questions - multiple choice 
    questionPage.classList.remove("hide");
    startScreen.classList.add("hide");
    questions.textContent = questionList[0].question;
    for (var i = 0; i < 4; i++) {
      var buttonChoice = document.createElement("button");
      buttonChoice.textContent = questionList[0].choices[i];
      choices.appendChild(buttonChoice)
    };
    
    questions.textContent = "";
    choices.textContent = "";

    questions.textContent = questionList[1].question;
    for (var i = 0; i < 4; i++) {
        var buttonChoice = document.createElement("button");
        buttonChoice.textContent = questionList[1].choices[i];
        choices.appendChild(buttonChoice);
}
});


// display correct or wrong
// timer countdown from 75 seconds
// total score = time remaining
// display highscores on seperate page highest to lowest