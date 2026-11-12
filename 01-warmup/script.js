// =============================================
// 01 · JavaScript Warm-up
// Open the browser console to see your output!
// =============================================

console.log("Warm-up loaded! 👋");

// ---------------------------------------------
// 1. VARIABLES
// A variable is a labeled box that holds a value.
// Use `const` when the value won't change, `let` when it will.

// TODO: Create a const called `myName` and set it to your name (a string).
const myName = "Rich"

// TODO: Create a let called `snacksEaten` and set it to 0 (a number).
let snacksEaten = 0
let mealsEaten = 1

// TODO: Add 1 to snacksEaten, then console.log it.
// Hint: snacksEaten = snacksEaten + 1;  (or snacksEaten++)
snacksEaten++;
console.log(snacksEaten);
mealsEaten = mealsEaten + 1;
console.log(mealsEaten);

// ---------------------------------------------
// 2. FUNCTIONS
// A function is a reusable recipe: give it ingredients (parameters),
// it does some steps, and can hand something back (return).

// TODO: Write a function called `greet` that takes a `name`
// and RETURNS the string "Hi, <name>!"
// Hint: use a template literal: `Hi, ${name}!`
function greet(name) {
    return `Hi, ${name}, have a nice day!`;
}
// TODO: Call greet with myName and console.log the result.
console.log(greet(myName))

// ---------------------------------------------
// 3. CONDITIONALS
// if / else lets your code make decisions.

const temperature = 60;
// TODO: If temperature is above 80, log "It's hot! 🥵"
// Otherwise, if it's above 60, log "Nice out! 😎"
// Otherwise, log "Grab a jacket 🧥"
if (temperature >= 80) {
        console.log("It's hot!");
}   else if (temperature > 60) {
        console.log("Nice out!");
}   else {
        console.log("Grab a jacket!");
}

// ---------------------------------------------
// 4. ARRAYS
// An array is a list of values, in order. Positions start at 0.

const favoriteFoods = ["pizza", "tacos", "sushi"];
// TODO: console.log the FIRST food in the array.
console.log(favoriteFoods[0]);

// TODO: Add a new food to the end of the array with .push(), then log the array.
favoriteFoods.push("bacon");

// TODO: console.log how many foods are in the array.
// Hint: arrays have a .length property
console.log(favoriteFoods.length);
console.log(favoriteFoods[3]);

// ---------------------------------------------
// 5. LOOPS (bonus!)
// forEach runs a function once for every item in an array.

// TODO: Use favoriteFoods.forEach to log "I love <food>!" for each food.
favoriteFoods.forEach(function(food) { 
        console.log(`I love ${food}!`);
});
//So "food" is an arbitrary parameter - could have been dirt...
//...as long as the function parameter matches the output call ${}.
//Lessons learned:
//1. Work from simplest possible solution to more complex.
//2. Argument parameter names are arbitrary, but once set, must be referenced exactly.
//3. "Stacking" requires punctuation, e.g. ([{}]), to follow LIFO principle exactly...
//...note bracket-then-closeParen on last code line.
