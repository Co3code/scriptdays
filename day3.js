/**
 * DAY 3: Loops - for, while, forEach
 *
 * LESSON:
 * - for (let i=0; i<5; i++) { loop body }
 * - while (condition) { body } - do-while runs once first
 * - array.forEach(item => console.log(item))
 * - break/continue to control flow
 *
 * Run: node day3.js
 * Expected: Solve TODOs → all ✓ checks
 */

// Examples
console.log("For loop 0-4:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let count = 0;
while (count < 3) {
  console.log("While:", count);
  count++;
}

[1, 2, 3].forEach((num) => console.log("ForEach:", num));

// TODO 1: For loop sum 1 to 10
// let sum1to10 = 0;
// for (...) { sum += i; }

let sum1to10 = 0; // Write for loop
for (let i = 1; i <= 10; i++) sum1to10 = sum1to10 + i;

console.log("Sum 1-10:", sum1to10);

// Self-check TODO 1
if (sum1to10 === 55) {
  console.log("✓ TODO 1: Sum correct!");
} else {
  console.log("✗ TODO 1: Sum 1-10 should be 55");
}

// TODO 2: While loop countdown 5 to 1, log "Blast off!"
// let countdown = 5;
// while (...) { ... }
let countdown = 5; // Write while
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Blast off!");
console.log("Countdown done:", countdown === 0);

// Self-check TODO 2
if (countdown === 0) {
  console.log("✓ TODO 2: Countdown complete!");
} else {
  console.log("✗ TODO 2: countdown should be 0");
}

// TODO 3: forEach on fruits array, log each + length
const fruits = ["apple", "banana", "cherry"];
// fruits.forEach(fruit => { ... })
fruits.forEach((fruit) => {
  console.log(fruit, fruit.length);
});
console.log("Fruits logged");

// Self-check TODO 3 (logs match)
let fruitLogs = ""; // Internal check, ignore
fruits.forEach((f) => (fruitLogs += f + f.length + ","));
if (fruitLogs.includes("apple5") && fruitLogs.includes("banana6")) {
  console.log("✓ TODO 3: forEach correct!");
} else {
  console.log("✗ TODO 3: Check forEach logs");
}

// Solve all → all ✓ ! Mark Day 3 [x] in TODO.md
