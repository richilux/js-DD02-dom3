// =============================================
// 03 · To-Do App
// Put it all together: find elements, listen for events,
// CREATE new elements, and update the page.
// =============================================

// Claude suggested line below is a VS code import and not needed here
// It just gets in the way of step #8
// const { Children } = require("react");

// ---------------------------------------------
// STEP 1: Grab the elements we need

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const countText = document.querySelector("#todo-count");

// ---------------------------------------------
// STEP 2: Listen for the form being submitted
// A form "submits" when you click its button OR press Enter.
// By default the page reloads — event.preventDefault() stops that.
// (Sample code below)
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//}
// (End sample code)

// TODO (#1): Get what the user typed. 
// Hint: input.value.trim() removes extra spaces from beginning and end.
form.addEventListener("submit", function (event) {
    event.preventDefault();
  if (input.value.trim() === "") {
     return; 
  } else {
    console.log(input.value.trim());
    addTodo(input.value.trim());
    input.value = "";
  }
})
  // #1 pure grab works: (1) outputs to console, (2) more entries output on lower rows
  
  // TODO (#2): If text is empty, stop here (don't add a blank to-do).
  // Hint: if (text === "") { return; }
  // (Insert conditional above, before console output)
  // (Remember to put opening if condition in parentheses)

  // TODO (#3): Call addTodo(text)
  // (An addTodo function is recognized by JavaScript - it's actually further down)

  // TODO (#4): Clear the input box so it's ready for the next one.
  // Hint: set input.value to an empty string
  // (Empty string indicated by "", as in Excel)

// ---------------------------------------------
// STEP 3: Build a new to-do and put it on the page
// We want each to-do to look like this in the HTML:
//
//   <li class="todo-item">
//     <span class="todo-text">Buy milk</span>
//     <button class="delete-btn">🗑️</button>
//   </li>

function addTodo(text) {
  // TODO (#5): Create an <li> and give it the class "todo-item"
  // Hint: document.createElement("li") and li.classList.add(...)
  let li = document.createElement("li");
    li.classList.add("todo-item");
  // TODO (#6): Create a <span>, give it the class "todo-text",
  // and set its textContent to `text`
  let span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = text;
  // console.log(span.textContent); >>>> Added for debugging
  // TODO (#7): Create a <button>, give it the class "delete-btn",
  // and set its textContent to "🗑️"
  let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "🗑️";
  // TODO (#8): Put the span and button INSIDE the li,
  // then put the li inside the list.
  // Hint: parent.appendChild(child)
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
    updateCount();

  // ---------------------------------------------
  // STEP 4: Make it interactive ----

  // TODO (#9): When the span is clicked, toggle the class "done" on the li.
  // Then call updateCount().
  span.addEventListener("click", function () {
    li.classList.toggle("done");
    updateCount();
  });
  // TODO (#10): When the delete button is clicked, remove the li.
  // Hint: li.remove()
  // Then call updateCount().
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCount();
  });
}

// ---------------------------------------------
// STEP 5: Show how many tasks are left

function updateCount() {
  // TODO (#11): Count the to-dos that are NOT done.
  // Hint: document.querySelectorAll(".todo-item:not(.done)").length
  const remaining = document.querySelectorAll(".todo-item:not(.done)").length;
  // TODO (#12): Update countText. Bonus: say "1 task left" (not "1 tasks left").
  countText.textContent = `Tasks left: ${remaining}`;
}

// ---------------------------------------------
// STRETCH GOALS (see README.md)
// 1. (#13) Add a "Clear completed" button
// 2. (#14) Show a message when the list is empty
// 3. (#15) Save to-dos in localStorage so they survive a refresh
// ---------------------------------------------
