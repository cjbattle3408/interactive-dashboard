let answers = [
 development
  "Seems unlikely.",
  "Not a chance.",
  "Ask again later.",
  "Signs point to yes.",
  "No.",
  "Yes.",
  "Nope."
];

let question = document.getElementById("question");
let ball = document.getElementById("ball");
let reset = document.getElementById("reset");
let circle = document.getElementById("circle");

ball.addEventListener("mousedown", function () {
  if (question.value === "") {
    alert("Please enter a question!");
  } else {
    displayAnswer();
  }
});

reset.addEventListener("click", function () {
  circle.style.display = "none";
});

function displayAnswer() {
  let index = Math.floor(Math.random() * answers.length);
  let answer = answers[index];

  circle.style.display = "inline-block";
  circle.innerHTML = "<br><br><br>" + answer;
}

let addResponse = document.getElementById("addResponse");

addResponse.addEventListener("click", function () {
  let newResponse = prompt("Enter a new 8-ball response:");

  if (newResponse) {
    answers.push(newResponse);
    console.log("New response added: " + newResponse);
    console.log("There is a total of: " + answers.length + " responses.");
  }
});

    "It is certain",
    "Without a doubt",
    "Reply hazy, try again",
    "Cannot predict now",
    "Don't count on it",
    "My sources say no",
    "Outlook not so good",
    "Signs point to yes"
];
function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    let circle = document.getElementById("circle");
    circle.style.display = "block";
    circle.innerHTML = answers[index];
}
document.getElementById("ball").addEventListener("mousedown", function() {
    let question = document.getElementById("question").value;
    if (question.trim() === "") {
        alert("Please enter a question first!");
    } else {
        displayAnswer();
    }
});
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("circle").style.display = "none";
});
function addAnswer() {
    let newAnswer = prompt("Enter a new Magic Eight Ball response:");
    if (newAnswer !== null && newAnswer.trim() !== "") {
        answers.push(newAnswer.trim());
        alert("New response added! There are now " + answers.length + " possible answers.");
    }
}
 main
