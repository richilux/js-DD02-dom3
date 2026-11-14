// =============================================
// 02 · DOM Playground
// The DOM is the browser's "live map" of your HTML.
// JavaScript can FIND things on the map, CHANGE them,
// and LISTEN for things the user does.
// =============================================

// ---------------------------------------------
// STEP 0: Find elements on the page
// document.querySelector("css-selector") returns the FIRST match.
// "#something" finds by id, ".something" finds by class.

const title = document.querySelector("#title");
console.log(title); // 👀 Try it! Hover the logged element in the console.
//RG result: hovering shades the associated area on the web page.

// TODO: Grab the <p id="message"> element and store it in a const called `message`.
const message = document.querySelector("#message");
console.log(message);

// ---------------------------------------------
// A · CHANGE THE TEXT
// element.textContent = "new words" replaces what an element says.

const changeTextBtn = document.querySelector("#change-text-btn");

// TODO: When changeTextBtn is clicked, change message's text to
// "JavaScript was here! ✨"
// Hint:
// changeTextBtn.addEventListener("click", function () {
//   ...your code here...
// });
changeTextBtn.addEventListener("click", function () {
    message.textContent = "JavaScript was here!";
})
//RG: observe that function does not take an input parameter in order to change message...
//...because message.textContent uses the subsequent string as the input!

// ---------------------------------------------
// B · CHANGE THE STYLE
// element.style.someProperty = "value" changes one CSS property.
// element.classList.toggle("name") adds a class if it's missing,
// removes it if it's there. (Like a light switch!)

const colorBox = document.querySelector("#color-box");
const colorBtn = document.querySelector("#color-btn");
const themeBtn = document.querySelector("#theme-btn");

const colors = ["#f472b6", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa"];

// TODO: When colorBtn is clicked, set colorBox's background color
// to a RANDOM color from the `colors` array.
// Hint: Math.floor(Math.random() * colors.length) gives a random index.
// Hint: colorBox.style.backgroundColor = ...
// #1a Attempt: create a random number variable
let rand = Math.random();
console.log(rand);
// #1b Attempt: use .length property(?) to find array length
let col = colors.length;
console.log(col);
// #1c Attempt: combine #1a & #1b 
let randCol = Math.floor(Math.random() * colors.length);
console.log(randCol);
// #2a Attempt: change something inside colorBtn when it is clicked
//  const changeColorBtn = document.querySelector("#color-btn");
//  changeColorBtn.addEventListener("click", function () {
//      colorBtn.textContent = "Change the color of the box above";
// })
//Attempt works, so commented out to leave room for next step.
//  #2b Attempt: change ColorBox to fixed color when ColorBtn clicked
//  colorBtn.addEventListener("click", function () {
//      colorBox.style.backgroundColor = "#f472b6";
// })
// Attempt works, so commented out to leave room for full ToDo
// #2c Attempt: full ToDo
colorBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})
// Attempt works: key points are (1) composite function analogy,
//     (2) array[n] calls nth item in array, (3) need library list of properties
 
// TODO: When themeBtn is clicked, toggle the class "dark" on document.body.
// themeBtn.classList.toggle("dark")
// Attempt #1: straight copy, what does it do?
themeBtn.classList.toggle("dark");
// Does nothing: not referencing document body anyway
// Attempt #2: use previous ToDo structure
// themeBtn.addEventListener("click", function () {
//    document.body.toggle("dark");
// });
// Break: "document.body.toggle is not a function"
// Attempt #3: toggle is method, so need classlist.toggle (still not solving function issue)
themeBtn.addEventListener("click", function () {
   document.body.classList.toggle("dark");
});
// This works! So "not a function" break was merely that function was mis-stated
// Drilldown = element>subelement>classes applied to sub>specific method>(state)

// ---------------------------------------------
// C · CLICK COUNTER
// Combine everything: a variable that changes + updating the page.

const countDisplay = document.querySelector("#count");
const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn");

let count = 0;

// TODO: Write a function called `updateDisplay` that sets
// countDisplay's textContent to the current `count`.
function updateDisplay() {
    countDisplay.textContent = count;
//    console.log(count); runs when called below, so can comment out
//    Bonus task: add conditional trigger & resulting event
    if (count < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black';
    }
}
// Function and bonus conditional work.
// Need else fork because red shift embeds red as default color...
//...so JS needs to turn it black when nonnegativity state occurs

// TODO: When plusBtn is clicked: add 1 to count, then call updateDisplay().
plusBtn.addEventListener("click", function () {
    count++;
    updateDisplay();
})
// TODO: When minusBtn is clicked: subtract 1 from count, then call updateDisplay().
minusBtn.addEventListener("click", function () {
    count--;
    updateDisplay();
})
// TODO: When resetBtn is clicked: set count back to 0, then call updateDisplay().
resetBtn.addEventListener("click", function () {
    count=0;
    updateDisplay();
})
// BONUS: Make the number turn red when count is below 0.
// Hint: inside updateDisplay, use an if/else and countDisplay.style.color
