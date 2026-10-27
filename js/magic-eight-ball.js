let answers = [
  "Seems unlikely.",
  "Not a chance.",
  "Ask again later.",
  "Signs point to yes.",
  "No.",
  "Yes.",
  "Nope."
];

const question = document.getElementById("question");
const ball = document.getElementById("ball");
const circle = document.getElementById("circle");
const eightBallForm = document.getElementById("eight-ball-form");
const addResponse = document.getElementById("addResponse");

function askQuestion() {
  if (question.value.trim() === "") {
    alert("Please enter a question!");
    question.focus();
    return;
  }

  displayAnswer();
}

function displayAnswer() {
  const index = Math.floor(Math.random() * answers.length);

  circle.textContent = answers[index];
  circle.style.display = "flex";
}

ball.addEventListener("mousedown", askQuestion);

ball.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    askQuestion();
  }
});

eightBallForm.addEventListener("submit", function (event) {
  event.preventDefault();
  askQuestion();
});

eightBallForm.addEventListener("reset", function () {
  circle.style.display = "none";
  circle.textContent = "";
});

addResponse.addEventListener("click", function () {
  const newResponse = prompt("Enter a new 8-ball response:");

  if (newResponse && newResponse.trim() !== "") {
    answers.push(newResponse.trim());

    console.log("New response added: " + newResponse.trim());
    console.log("There is a total of: " + answers.length + " responses.");
  }
});