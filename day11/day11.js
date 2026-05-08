// Day 11: DOM Intro
// i will continue this tomorrow cause  im very busy
// LESSON REVIEW: document.getElementById, querySelector, textContent, style, classList

// ─────────────────────────────────────────────
// TODO 1: Select elements & change text
// Select #greeting and change to "Hello, DOM!"
// Select the h3 and add " (COMPLETE)" to its text
function runTodo1() {
  // your code here

  // select element with id = "greeting"
  let greeting = document.getElementById("greeting");
  //change text
  greeting.textContent = "Hello, DOM!   ";

  // select  h3
  let heading = document.querySelector("h3"); // quarySelector the "search" command.  the h3 is the selector in this case it is looking for the fisrr h3 tag it find on the page

  //add text
  heading.textContent += "(COMPLETE)";
}

// ─────────────────────────────────────────────
// TODO 2: Style manipulation
// Select #box and toggle between blue and red background "toggle switch back and fort"
// your code here

let toggleState = false;
function runTodo2() {
  let box = document.getElementById("box");

  if (toggleState) {
    box.style.backgroundColor = "blue";
  } else {
    box.style.backgroundColor = "red";
  }
  toggleState = !toggleState;
}

// ─────────────────────────────────────────────
// TODO 3: Create element dynamically
// Select #dynamic-list and add a new <li> "Dynamic item #X" (increment counter)
let count = 1;
function runTodo3() {
  let list = document.getElementById("dynamic-list");
  // your code here

  //creates new HTML element
  let li = document.createElement("li");
  li.textContent = `Dynamic item #${count}`; // inside the ` is the normal txst`
  list.appendChild(li);
  count++;
}

// Self-checks will be added after you complete TODOs
// Open index.html in browser to test!
