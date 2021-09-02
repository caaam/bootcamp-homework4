// selects countdown pane by id
var countdownEl = document.getElementById("countdown");
var startButton = document.getElementById("start-button");
var questionAreaEl = document.getElementById("question-area");
var scoreAreaEl = document.getElementById("score-area");
var saveScoreEl = document.getElementById("save-score-form");
var aButton = document.getElementById("option-a");
var bButton = document.getElementById("option-b");
var cButton = document.getElementById("option-c");
var dButton = document.getElementById("option-d");
var saveScoreButton = document.getElementById("save-score-button");

var secondsLeft = 60;
var score = 0;
var currentQuestion = 0;

let questionsList = [
  {
    question: "Commonly used data types do NOT include:",
    optionOne: "alerts",
    optionTwo: "strings",
    optionThree: "booleans",
    optionFour: "numbers",
    correct: 'a'
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    optionOne: "booleans",
    optionTwo: "numbers and strings",
    optionThree: "other arrays",
    optionFour: "all of the above",
    correct: 'd'
  }
]

function setTime() {
    countdownEl.textContent = secondsLeft + " seconds left to complete the quiz!";
    var timerInterval = setInterval(function() {
      secondsLeft--;
      countdownEl.textContent = secondsLeft + " seconds left to complete the quiz!";
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        countdownEl.textContent = "Time's up!";
        currentQuestion = 0;
      } else {
        // console.log(secondsLeft);
      }


  
    }, 1000);
  }

  function askQuestion(question) {
    console.log(question.question);
    questionAreaEl.textContent = question.question;
    startButton.hidden = true;
    aButton.hidden = false;
    bButton.hidden = false;
    cButton.hidden = false;
    dButton.hidden = false;
    aButton.textContent = question.optionOne;
    bButton.textContent = question.optionTwo;
    cButton.textContent = question.optionThree;
    dButton.textContent = question.optionFour;
    var choice = '';
  }

  function runQuiz() {
    startButton.hidden = true;
    aButton.hidden = false;
    bButton.hidden = false;
    cButton.hidden = false;
    dButton.hidden = false;
    for (var i = 0; i < questionsList.length; i++) {
      alert(questionsList[i].question);
      aButton.textContent = questionsList[i].optionOne;
      bButton.textContent = questionsList[i].optionTwo;
      cButton.textContent = questionsList[i].optionThree;
      dButton.textContent = questionsList[i].optionFour;
    }
  }

  function end() {
    secondsLeft = 1;
    countdownEl.textContent = "Time's up!";
    scoreAreaEl.textContent = "Final Score: " + score;
    aButton.hidden = true;
    bButton.hidden = true;
    cButton.hidden = true;
    dButton.hidden = true;
    questionAreaEl.textContent = "";
    saveScoreEl.hidden = false;
    saveScoreButton.hidden = false;
    populateHighscores();
  }

  function populateHighscores() {

  }

  startButton.onclick = function() {
    setTime();
    scoreAreaEl.textContent = "Current score: " + score;
    if (currentQuestion < questionsList.length) {
      askQuestion(questionsList[currentQuestion]);
    } else {
      clearInterval(timerInterval);
      countdownEl.textContent = "Time's up!";
    }
    // runQuiz();
  };

  aButton.onclick = function() {
    if (questionsList[currentQuestion].correct == 'a') {
      score += 10;
      currentQuestion++;
      console.log('a was right');
      scoreAreaEl.textContent = "Current score: " + score;
      if (currentQuestion < questionsList.length) {
        askQuestion(questionsList[currentQuestion]);
      } else {
        end()
      }
    } else {
      secondsLeft -= 10;
      currentQuestion++;
      console.log('a was wrong');
      scoreAreaEl.textContent = "Current score: " + score;
      if (currentQuestion < questionsList.length) {
        askQuestion(questionsList[currentQuestion]);
      } else {
        end()
      }
    }
  }
  bButton.onclick = function() {
    if (questionsList[currentQuestion].correct == 'b') {
      score += 10;
      currentQuestion++;
      console.log('b was right');
      scoreAreaEl.textContent = "Current score: " + score;
      if (currentQuestion < questionsList.length) {
        askQuestion(questionsList[currentQuestion]);
      } else {
        end()
      }
    } else {
      secondsLeft -= 10;
      currentQuestion++;
      console.log('b was wrong');
      scoreAreaEl.textContent = "Current score: " + score;
      if (currentQuestion < questionsList.length) {
        askQuestion(questionsList[currentQuestion]);
      } else {
        end()
      }
    }
  }
  cButton.onclick = function() {
    if (questionsList[currentQuestion].correct == 'c') {
      score += 10;
      currentQuestion++;
      console.log('c was right');
      scoreAreaEl.textContent = "Current score: " + score;
      if (currentQuestion < questionsList.length) {
        askQuestion(questionsList[currentQuestion]);
      } else {
        end()
      }
    } else {
      secondsLeft -= 10;
      currentQuestion++;
      console.log('c was wrong');
      scoreAreaEl.textContent = "Current score: " + score;
      if (currentQuestion < questionsList.length) {
        askQuestion(questionsList[currentQuestion]);
      } else {
        end()
      }
    }
  }
  dButton.onclick = function() {
    if (questionsList[currentQuestion].correct == 'd') {
      score += 10;
      currentQuestion++;
      console.log('d was right');
      scoreAreaEl.textContent = "Current score: " + score;
      if (currentQuestion < questionsList.length) {
        askQuestion(questionsList[currentQuestion]);
      } else {
        end()
      }
    } else {
      secondsLeft -= 10;
      currentQuestion++;
      console.log('d was wrong');
      scoreAreaEl.textContent = "Current score: " + score;
      if (currentQuestion < questionsList.length) {
        askQuestion(questionsList[currentQuestion]);
      } else {
        end()
      }
    }
  }
saveScoreButton.onclick = function() {
  console.log("saving");
  var previousScores = JSON.parse(localStorage.getItem("scores"));
  if(previousScores == null) previousScores = [];
  var initials = document.getElementById("initials").value;
  var score = score;
  var highscore = {
      "initials": initials,
      "score": score
  };
  localStorage.setItem("highscore", JSON.stringify(highscore));
  previousScores.push(highscore);
  localStorage.setItem("scores", JSON.stringify(previousScores));
}