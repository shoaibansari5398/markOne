var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Shoaib",
    score: 5,
  },

  {
    name: "Ansari",
    score: 4,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "Mumbai"
}, {
  question: "My favorite superhero would be? ",
  answer: "Doctor Strange"
},
{
  question: "Where do I work? ",
  answer: "Marsh Mclennan"
},
{
  question: "How old I am? ",
  answer: "24"
},
{
  question: "What is my full name? ",
  answer: "Shoaib Akhtar Ansari"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + "  DO YOU KNOW Shoaib?");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are Right!");
    score = score + 1;

  } else {
    console.log("You are Wrong!");

  }

  console.log("current score: ", score);
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You Scored: ", score);

  console.log("Check out the high scores");

  for (i = 0; i < highScores.length; i++) {
    console.log(highScores[i].name, " : ", highScores[i].score);
  }
}


welcome();
game();
showScores();
