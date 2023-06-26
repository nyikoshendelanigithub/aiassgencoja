var taskList = [];

function addTask() {
  var task = prompt("Enter a new task:");
  taskList.push(task);
  console.log("Task added successfully!");
}

function removeFirstTask() {
  if (taskList.length > 0) {
    var removedTask = taskList.shift();
    console.log("Removed Task: " + removedTask);
  } else {
    console.log("Task list is empty!");
  }
}

function removeLastTask() {
  if (taskList.length > 0) {
    var removedTask = taskList.pop();
    console.log("Removed Task: " + removedTask);
  } else {
    console.log("Task list is empty!");
  }
}

function removeTaskAtPosition() {
  var position = prompt("Enter the position of the task to remove:");
  position = parseInt(position) - 1;

  if (position >= 0 && position < taskList.length) {
    var removedTask = taskList.splice(position, 1);
    console.log("Removed Task: " + removedTask);
  } else {
    console.log("Invalid position or task list is empty!");
  }
}

function displayTaskList() {
  if (taskList.length > 0) {
    console.log("Task List:");
    for (var i = 0; i < taskList.length; i++) {
      console.log((i + 1) + ". " + taskList[i]);
    }
  } else {
    console.log("Task list is empty!");
  }
}

// Test the task list program
while (true) {
  var operation = prompt(
    "Enter the operation you want to perform:\n1. Add task\n2. Remove first task\n3. Remove last task\n4. Remove task at position\n5. Display task list\n6. Exit"
  );

  switch (operation) {
    case "1":
      addTask();
      break;
    case "2":
      removeFirstTask();
      break;
    case "3":
      removeLastTask();
      break;
    case "4":
      removeTaskAtPosition();
      break;
    case "5":
      displayTaskList();
      break;
    case "6":
      console.log("Exiting the program...");
      return;
    default:
      console.log("Invalid operation! Please try again.");
  }
}
