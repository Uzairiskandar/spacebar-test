let count = 0;
let timeLeft = 0;
let isRunning = false;

const countDisplay = document.getElementById("count");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const timeButtons = document.querySelectorAll(".time-btn");

// Select timer
timeButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    timeLeft = parseInt(this.dataset.time);
    timeDisplay.innerText = timeLeft;
    startBtn.disabled = false;

    // Highlight selected button
    timeButtons.forEach(b => b.style.opacity = 0.6);
    this.style.opacity = 1;
  });
});

// Start test
startBtn.addEventListener("click", startTest);

function startTest() {
  if(timeLeft <= 0) return;

  count = 0;
  isRunning = true;
  countDisplay.innerText = count;
  startBtn.disabled = true;

  let timer = setInterval(() => {
    timeLeft--;
    timeDisplay.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endTest();
    }
  }, 1000);
}

// Spacebar event
document.addEventListener("keydown", function(event) {
  if(event.code === "Space" && isRunning) {
    count++;
    countDisplay.innerText = count;
  }
});

// End test
function endTest() {
  isRunning = false;
  startBtn.disabled = false;

  let message = "";
  
  if(count < 15) {
    message = "🐢 Lazy! Try faster!";
  } else if(count < 30) {
    message = "🐢 Turtle speed!";
  } else if(count < 50) {
    message = "🏃 Beginner level!";
  } else {
    message = "🚀 Excellent Pro! Amazing!";
  }

  alert(`Time Over!\nYour total clicks: ${count}\n${message}`);
}