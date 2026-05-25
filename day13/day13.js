// Day 13: Selecting & Manipulating Elements

// Guard for Node usage.
if (typeof document !== "undefined") {
  const output = document.getElementById("output"); // ReferenceError: document is not defined

  // TODO 1: querySelectorAll
  // - Select all elements with class "tag"
  // - For each: set textContent to uppercase
  // - Add a blue border via inline style
  const tagsBtn = document.getElementById("tagsBtn");
  tagsBtn.addEventListener("click", () => {
    const tags = document.querySelectorAll(".tag");
    tags.forEach((tag) => {
      tag.textContent = tag.textContent.toUpperCase();
      tag.style.border = "2px solid #007acc";
      tag.style.padding = "6px 10px";
      tag.style.marginRight = "8px";
      tag.style.display = "inline-block";
    });

    if (output) output.textContent = "✓ TODO 1 complete (styled tags)";
  });

  // TODO 2: classList toggle visibility
  // - Clicking Toggle button toggles #box hidden state
  // - Also update #toggleStatus
  const toggleBtn = document.getElementById("toggleBtn");
  const box = document.getElementById("box");
  const toggleStatus = document.getElementById("toggleStatus");

  toggleBtn.addEventListener("click", () => {
    box.classList.toggle("hidde n");// aad or remove  "hidden" class  - classList means access element classes
    if (toggleStatus) {
      const isHidden = box.classList.contains("hidden");
      toggleStatus.textContent = `Status: ${isHidden ? "hidden" : "visible"}`; //Ternary Operator
    }
  });

  // TODO 3: remove first list item
  // - On click, remove the first <li> inside #list
  // - If list becomes empty, output a message
  const removeBtn = document.getElementById("removeBtn");
  const list = document.getElementById("list");

  removeBtn.addEventListener("click", () => {
    if (!list) return;
    const firstLi = list.querySelector("li");
    if (firstLi) {
      firstLi.remove();
      if (output) output.textContent = "✓ TODO 3 complete (removed first item)";
    } else {
      if (output) output.textContent = "List is already empty";
    }
  });
}
