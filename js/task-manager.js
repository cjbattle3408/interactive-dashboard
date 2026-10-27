// Task objects are stored in this global array.
let tasks = [];
let nextTaskId = 1;

// --------------------------------------------------
// Weekly Task Goal Calculator
// --------------------------------------------------

function weeklyGoal(userName, dailyGoal, bonusTasks) {
  const workdayTotal = dailyGoal * 5;
  const totalGoal = workdayTotal + bonusTasks;

  console.log("Checking status for: " + userName);

  document.getElementById("goal-message").textContent =
    "User: " + userName + ", Total Weekly Goal: " + totalGoal;
}

const goalForm = document.getElementById("goal-form");

goalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = document.getElementById("user-name").value.trim();
  const dailyGoal = Number(document.getElementById("daily-goal").value);
  const bonusTasks = Number(document.getElementById("bonus-tasks").value);

  if (
    userName === "" ||
    !Number.isInteger(dailyGoal) ||
    !Number.isInteger(bonusTasks) ||
    dailyGoal < 0 ||
    bonusTasks < 0
  ) {
    document.getElementById("goal-message").textContent =
      "Enter your name and valid nonnegative whole numbers.";
    return;
  }

  weeklyGoal(userName, dailyGoal, bonusTasks);
});

// --------------------------------------------------
// Task Manager Setup
// --------------------------------------------------

const taskListDiv = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-name");
const priorityInput = document.getElementById("task-priority");
const importantInput = document.getElementById("task-important");
const deleteListButton = document.getElementById("delete-list");
const taskStatus = document.getElementById("task-status");

// Create the list dynamically instead of hard-coding it in HTML.
const userTasksList = document.createElement("ul");
userTasksList.id = "user-tasks";
taskListDiv.appendChild(userTasksList);

function logTasks() {
  console.log(JSON.stringify(tasks));
}

function refreshTasks(message) {
  renderTasks();
  logTasks();
  taskStatus.textContent = message;
}

// --------------------------------------------------
// Create Task DOM Nodes
// --------------------------------------------------

function renderTasks() {
  userTasksList.replaceChildren();

  tasks.forEach(function (task) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = task.id;

    // Apply priority styling with the .style property.
    if (task.priority === "High") {
      taskItem.style.borderLeftColor = "#b91c1c";
      taskItem.style.backgroundColor = "#fff1f2";
    } else if (task.priority === "Medium") {
      taskItem.style.borderLeftColor = "#a16207";
      taskItem.style.backgroundColor = "#fffbeb";
    } else {
      taskItem.style.borderLeftColor = "#15803d";
      taskItem.style.backgroundColor = "#f0fdf4";
    }

    const taskName = document.createElement("span");
    taskName.className = "task-name";
    taskName.textContent = task.name;

    // Important task names are red.
    taskName.style.color = task.isImportant ? "#b91c1c" : "#1f2937";
    taskName.style.fontWeight = task.isImportant ? "700" : "400";

    // Completed task names receive a strikethrough.
    taskName.style.textDecoration =
      task.isCompleted ? "line-through" : "none";

    const details = document.createElement("p");
    details.className = "task-details";
    details.textContent =
      "Priority: " + task.priority +
      " | " + (task.isImportant ? "Important" : "Not important") +
      " | " + (task.isCompleted ? "Completed" : "Not completed");

    const controls = document.createElement("div");
    controls.className = "task-actions";

    // Completion checkbox.
    const completedLabel = document.createElement("label");
    completedLabel.className = "checkbox-label";

    const completedCheckbox = document.createElement("input");
    completedCheckbox.type = "checkbox";
    completedCheckbox.checked = task.isCompleted;

    completedCheckbox.addEventListener("change", function () {
      markTaskComplete(task.id, completedCheckbox.checked);
    });

    completedLabel.appendChild(completedCheckbox);
    completedLabel.appendChild(document.createTextNode("Completed"));

    // Importance checkbox.
    const importantLabel = document.createElement("label");
    importantLabel.className = "checkbox-label";

    const importantCheckbox = document.createElement("input");
    importantCheckbox.type = "checkbox";
    importantCheckbox.checked = task.isImportant;

    importantCheckbox.addEventListener("change", function () {
      task.isImportant = importantCheckbox.checked;
      refreshTasks("Task importance updated.");
    });

    importantLabel.appendChild(importantCheckbox);
    importantLabel.appendChild(document.createTextNode("Important"));

    // Editable priority dropdown.
    const priorityLabel = document.createElement("label");
    priorityLabel.className = "priority-control";
    priorityLabel.appendChild(document.createTextNode("Priority: "));

    const prioritySelect = document.createElement("select");

    ["High", "Medium", "Low"].forEach(function (priority) {
      const option = document.createElement("option");
      option.value = priority;
      option.textContent = priority;
      prioritySelect.appendChild(option);
    });

    prioritySelect.value = task.priority;

    prioritySelect.addEventListener("change", function () {
      task.priority = prioritySelect.value;
      refreshTasks("Task priority updated.");
    });

    priorityLabel.appendChild(prioritySelect);

    // Edit button.
    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.textContent = "Edit";

    editButton.addEventListener("click", function () {
      editTask(task.id);
    });

    // Individual delete button.
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger-button";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      deleteTask(task.id);
    });

    controls.appendChild(completedLabel);
    controls.appendChild(importantLabel);
    controls.appendChild(priorityLabel);
    controls.appendChild(editButton);
    controls.appendChild(deleteButton);

    taskItem.appendChild(taskName);
    taskItem.appendChild(details);
    taskItem.appendChild(controls);

    userTasksList.appendChild(taskItem);
  });

  deleteListButton.disabled = tasks.length === 0;
}

// --------------------------------------------------
// Task Functions
// --------------------------------------------------

function addTask(event) {
  event.preventDefault();

  const name = taskInput.value.trim();

  if (name === "") {
    taskStatus.textContent = "Please enter a task name.";
    taskInput.focus();
    return;
  }

  const newTask = {
    id: nextTaskId++,
    name: name,
    priority: priorityInput.value,
    isImportant: importantInput.checked,
    isCompleted: false
  };

  tasks.push(newTask);

  taskForm.reset();
  refreshTasks("Task added.");
  taskInput.focus();
}

function editTask(id) {
  const task = tasks.find(function (item) {
    return item.id === id;
  });

  if (!task) {
    return;
  }

  const newName = prompt("Edit task name:", task.name);

  if (newName === null) {
    return;
  }

  if (newName.trim() === "") {
    taskStatus.textContent = "The task name cannot be empty.";
    return;
  }

  task.name = newName.trim();
  refreshTasks("Task name updated.");
}

function markTaskComplete(id, isCompleted) {
  const task = tasks.find(function (item) {
    return item.id === id;
  });

  if (!task) {
    return;
  }

  task.isCompleted = isCompleted;

  refreshTasks(
    isCompleted ? "Task marked completed." : "Task marked not completed."
  );
}

function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });

  refreshTasks("Task deleted.");
}

function deleteTaskList() {
  if (tasks.length === 0) {
    return;
  }

  if (!confirm("Delete every task in the list?")) {
    return;
  }

  tasks = [];
  refreshTasks("All tasks deleted.");
}

// --------------------------------------------------
// Event Listeners
// --------------------------------------------------

taskForm.addEventListener("submit", addTask);
deleteListButton.addEventListener("click", deleteTaskList);

renderTasks();