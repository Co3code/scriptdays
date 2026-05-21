// Day 12: Events & Event Listeners
// LESSON REVIEW: addEventListener, click/key/mousemove events, event.target/event.key

// TODO 1: Click event (change text + background)
// - When user clicks #clickBtn:
//   - Change #status text to "Status: clicked!"
//   - Toggle #box background between blue and green
let todo1Toggle = false;
function initTodo1() {
  const box = document.getElementById("box");
  const status = document.getElementById("status");
  const clickBtn = document.getElementById("clickBtn");

  //waits for button click
  clickBtn.addEventListener("click", () => {
    //changes text
    status.textContent = "clinked";

    if (todo1Toggle) {
      box.style.backgroundColor = "blue";
    } else {
      box.style.backgroundColor = "green";
    }

    todo1Toggle = !todo1Toggle;
  });
}

// TODO 2: Keydown event (press Enter to add to list)
// - When user presses Enter in #taskInput, create a new <li> with input value
// - Clear the input after adding
// - Ignore empty input (trim)
function initTodo2() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addBtn = document.getElementById("addBtn");

  function addTaskFromInput() {
    const text = taskInput.value.trim();
    if (!text) return; // if way task dili mag result ug naa mag result

    const li = document.createElement("li"); // Create a new <li> element in memory.
    li.textContent = text; //Put the task text inside the new <li> element.
    taskList.appendChild(li); // Add the new <li> to the task list on the page. add someting

    taskInput.value = ""; // clear the input fielt so the user can type a new task
    taskInput.focus(); // Purpose: Move the cursor back into the input field so the user can start typing immediately.
  }
  // Listen for any key press while the user is typing in the input field.
  // keydown listens for any keyboard key being pressed.
  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTaskFromInput(); // calls your function to add the task if enter was pressed
    }
  });

  addBtn.addEventListener("click", addTaskFromInput); // → calls addTaskFromInput when the button is clicked.

  // The user can either press Enter or click the Add button to add a task.
}

// TODO 3: Mouse move event (update coordinates)
// - Listen for mousemove over #trackArea
// - Update #x and #y with event.clientX/clientY
function initTodo3() {
  const trackArea = document.getElementById("trackArea");
  const xSpan = document.getElementById("x");
  const ySpan = document.getElementById("y");

  trackArea.addEventListener("mousemove", (event) => {
    xSpan.textContent = String(event.clientX);
    ySpan.textContent = String(event.clientY);
  });
}

// Initialize when the script loads (browser only)
if (typeof document !== "undefined") {
  initTodo1();
  initTodo2();
  initTodo3();
  console.log("Day 12 loaded: events initialized");
}
