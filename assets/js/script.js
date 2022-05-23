var score = 0;
var questionCurrent = -1;
var timeRemaining = 0;
var timer;
// questions object array
var questions = [
  {
    question: "Who lives in a pineapple under the sea?",
    choices: ["a. Sponge man round shirt", "b. Jake from State Farm", "c. Tom from 'Tom and Jerry'", "d. SpongeBob Square pants"],
    answer: "d. SpongeBob Square pants"
},
{
  question: "What food is the Krusty Krab known for?",
  choices: ["a. Chop cheese", "b. PB and J", "c. Krabypatty", "d. Orange slices"],
  answer: "c. Krabypatty"
},
{
  question: "What animal does SpongeBob keep as a pet?",
  choices: ["a. Cat", "b. Turtle", "c. Nemo", "d. Snail"],
  answer: "d. Snail"
},
];

function start() {
  timeRemaining = 75;
  document.getElementById("timeRemaining").innerHTML = timeRemaining;

  timer = setInterval(function () {
    timeRemaining--;
    document.getElementById("timeRemaining").innerHTML = timeRemaining;
    if (timeRemaining <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  nextquestion();
}

// call for next question
function nextquestion() {
  questionCurrent++;

  if (questionCurrent > questions.length - 1) {
    endGame();
    return;
  }

  var quizContent = "<h2>" + questions[questionCurrent].question + "</h2>";

  for (var x = 0; x < questions[questionCurrent].choices.length; x++) {
   
    var answerFunction =
      questions[questionCurrent].choices[x] == questions[questionCurrent].answer
        ? "correct()"
        : "incorrect()";
    var html = `<button onclick="${answerFunction}"> ${questions[questionCurrent].choices[x]}</button>`;
    quizContent += html;
  }
  document.getElementById("quizContainer").innerHTML = quizContent;
}

// subtracts time
function incorrect() {
  timeRemaining -= 10;
  nextquestion();
}

// adds score if correct
function correct() {
  score += 1;
  nextquestion();
}

function endGame() {
  clearInterval(timer);

  var quizContent = `
<h2>Game over!</h2>
<h3>You got ${score} questions correct!</h3>
<input type="text" id="name" placeholder="First name"> 
<button onclick="setScore()">Save Highscore</button>`;

  document.getElementById("quizContainer").innerHTML = quizContent;
}

// add to and retrieve score from local storage
function setScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName", document.getElementById("name").value);
  setScore();
}

function getScore() {
  var quizContent =
    `
<h2>` +
    localStorage.getItem("highscoreName") +
    `'s highscore is:</h2>
<h1>` +
    localStorage.getItem("highscore") +
    `</h1><br> 

<button onclick="clearScore()">Clear score!</button><button onclick="restart()">Play Again!</button>

`;

  document.getElementById("quizContainer").innerHTML = quizContent;
}

// end game functions
function clearScore() {
  localStorage.setItem("highscore", "");
  localStorage.setItem("highscoreName", "");

  restart();
}

function restart() {
  clearInterval(timer);
  score = 0;
  questionCurrent = -1;
  timeRemaining = 0;
  timer = null;

  document.getElementById("timeRemaining").innerHTML = timeRemaining;

  var quizContent = `
<h1>
 SpongeBob Quiz!
</h1>
<button onclick="start()">Start!</button>`;

  document.getElementById("quizContainer").innerHTML = quizContent;
}