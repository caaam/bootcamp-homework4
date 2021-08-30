// selects countdown pane by id
var countdownEl = document.getElementById("countdown");
var startButton = document.getElementById("start-button");

var secondsLeft = 60;

function setTime() {
    countdownEl.textContent = secondsLeft + " seconds left to complete the quiz!";
    var timerInterval = setInterval(function() {
      secondsLeft--;
      countdownEl.textContent = secondsLeft + " seconds left to complete the quiz!";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        countdownEl.textContent = "Time's up!";
      }
  
    }, 1000);
  }

  startButton.onclick = function() { setTime() };