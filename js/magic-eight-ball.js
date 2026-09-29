let answers = [
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