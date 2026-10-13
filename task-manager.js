// Weekly Goal: Calculate the total weekly task goal for a user.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
  console.log("Checking status for: " + userName);

  let weeklyGoal = dailyGoal * 5;
  let totalGoal = weeklyGoal + bonusTasks;

  let output =
    "User: " +
    userName +
    ", Total Weekly Goal: " +
    totalGoal;

  document.getElementById("goal-message").innerHTML = output;
}

// Get form values and call weeklyGoal function
const goalForm = document.getElementById("goal-form");

goalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let userName = document.getElementById("user-name").value;
  let dailyGoal = parseInt(document.getElementById("daily-goal").value);
  let bonusTasks = parseInt(document.getElementById("bonus-tasks").value);

  weeklyGoal(userName, dailyGoal, bonusTasks);
});

// Weekly Task List: Add tasks using DOM manipulation
let myTasks = [];

const taskListDiv = document.getElementById("task-list");
const taskInput = document.getElementById("task-name");
const addTaskButton = document.getElementById("add-task");

const userTasksList = document.createElement("ul");
userTasksList.id = "user-tasks";

taskListDiv.appendChild(userTasksList);

addTaskButton.addEventListener("click", function () {
  const taskName = taskInput.value;

  if (taskName === "") {
    alert("Please enter a task.");
    return;
  }

  myTasks.push(taskName);

  const taskItem = document.createElement("li");
  taskItem.textContent = taskName;

  userTasksList.appendChild(taskItem);

  taskInput.value = "";
});