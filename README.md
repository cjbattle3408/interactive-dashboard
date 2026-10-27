# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate
interactive JavaScript features.

## Features

### Weekly Task Goal Calculator

Accepts a user's name, daily task goal, and weekly bonus tasks.

The weekly total is calculated as:

Daily Task Goal × 5 + Weekly Bonus Tasks

### Task Manager

Users can:

- Add tasks.
- Edit task names.
- Delete individual tasks.
- Delete the entire task list after confirmation.
- Select High, Medium, or Low priority.
- Mark tasks as important.
- Mark tasks as completed or not completed.

Tasks are stored in an array of objects:

```javascript
{
  id: 1,
  name: "Finish JavaScript project",
  priority: "High",
  isImportant: true,
  isCompleted: false
}
```

#### Visual Indicators

- High priority: red border and pale red background.
- Medium priority: gold border and pale yellow background.
- Low priority: green border and pale green background.
- Important tasks: red task-name text.
- Completed tasks: strikethrough task-name text.

Task rows and controls are dynamically generated using JavaScript DOM nodes.
Conditional task styles are applied with the JavaScript .style property.

Every successful task addition, update, or deletion logs the full task
array using:

```javascript
console.log(JSON.stringify(tasks));
```

Tasks are stored in memory and reset when the page is refreshed.

### Imperial/Metric Converter

Users can enter a numeric value and select a conversion between:

- Inches and centimeters.
- Feet and meters.
- Yards and meters.
- Miles and kilometers.

The converter displays the original value, converted value, and units.

### Magic Eight Ball

Users enter a yes/no question and click the Eight Ball for a random answer.

Users can also:

- Reset the question and answer.
- Add new responses to the answer array.
- Activate the ball using Enter or Space while it is focused.

### Debugging Exercise

The separate debug.html file demonstrates a corrected weekly goal
calculation using numeric variables.

## Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Pages

## Project Structure

```text
interactive-dashboard/
├── index.html
├── debug.html
├── README.md
├── css/
│   ├── style.css
│   └── magic-eight-ball.css
├── js/
│   ├── task-manager.js
│   ├── metric-converter.js
│   └── magic-eight-ball.js
└── img/
    └── magic-eight-ball.png
```

## How to Run

1. Open the project folder in VS Code.
2. Open index.html in a browser or use Live Server.
3. Use the forms to interact with the dashboard.
4. Open the browser console to view task updates.

## Imperial/Metric Converter: Logic and Pseudocode

```text
START

GET the numeric value entered by the user
GET the selected conversion type
CONVERT the entered value into a number

IF the entered value is not a valid number
    DISPLAY "Please enter a valid number."

ELSE IF the conversion type is inches to centimeters
    MULTIPLY the value by 2.54

ELSE IF the conversion type is centimeters to inches
    DIVIDE the value by 2.54

ELSE IF the conversion type is feet to meters
    MULTIPLY the value by 0.3048

ELSE IF the conversion type is meters to feet
    DIVIDE the value by 0.3048

ELSE IF the conversion type is yards to meters
    MULTIPLY the value by 0.9144

ELSE IF the conversion type is meters to yards
    DIVIDE the value by 0.9144

ELSE IF the conversion type is miles to kilometers
    MULTIPLY the value by 1.609344

ELSE IF the conversion type is kilometers to miles
    DIVIDE the value by 1.609344

END IF

DISPLAY the result with the original and converted units

END
```

## Testing Checklist

- [ ] Weekly goal: 5 daily tasks and 2 bonus tasks produces 27.
- [ ] Task names can be added and edited.
- [ ] Priority styling updates correctly.
- [ ] Important task names appear red.
- [ ] Completed task names have a strikethrough.
- [ ] Individual tasks can be deleted.
- [ ] Delete List removes every task after confirmation.
- [ ] Task changes log the full array as JSON.
- [ ] All eight unit conversions work.
- [ ] Magic Eight Ball displays an answer.
- [ ] Magic Eight Ball reset and add-response buttons work.
- [ ] Dashboard layout works on narrow screens.

## Git Workflow

1. Make changes on the development branch.
2. Test the dashboard in the browser.
3. Stage and commit the updated files.
4. Merge development into main.
5. Push the finished main branch to GitHub.

## Future Enhancements

- [ ] Add a live clock.
- [ ] Save tasks between browser sessions.