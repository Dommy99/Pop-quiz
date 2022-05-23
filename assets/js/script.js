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

  
}

var questions = [
  {
    question: "Who lives in a pineapple under the sea?",
    choices: ["a. Sponge man round shirt", "b. Jake from State Farm", "c. Tom from 'Tom and Jerry'", "d. SpongeBob Square pants"],
    answer: "d. SpongeBob Square pants"
},
{
  question: "What food from Philadelphia is known for its then slices of beef and melted cheese?",
  choices: ["a. Chop cheese", "b. PB and J", "c. Cheesesteak", "d. Orange slices"],
  answer: "c. Cheesesteak"
},
{
  question: "Which animal(s) was/were let out?",
  choices: ["a. Cats", "b. Turtles", "c. Nemo", "d. Dogs"],
  answer: "d. Dogs"
},
];