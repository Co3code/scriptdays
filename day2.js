/**
 * DAY 2: Control Flow - if/else, switch
 *
 * LESSON:
 * - if/else: condition ? do this : else that
 * - else if: multiple conditions
 * - switch: exact match cases for values
 * - Logical: && (and), || (or), ! (not)
 *
 * Run: node day2.js
 * Expected: After solving TODOs, all checks pass ✓
 */

// Examples
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// Switch example
let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  default:
    console.log("Other day");
}

// TODO 1: Nested if/else for grade letter
// Input score = 92 → "A", 85 → "B", 78 → "C", <70 → "F"
let studentScore = 92; // Test value
let grade;
// Write if/else chain here:

if (studentScore >= 90) {
  grade = "A";
} else if (studentScore >= 85) {
  grade = "B";
} else if (sutdentScore >= 78) {
  grade = "C";
} else {
  grade = "F";
}

if (grade === "A") {
  // Self-check TODO 1
  console.log("✓ TODO 1: Grade correct!");
} else {
  console.log("✗ TODO 1: Fix grade logic (expected A for 92)");
}

// TODO 2: switch for weekday message
// dayNum 1=Mon "Start week!", 5=Fri "TGIF!", 6/7=Sat/Sun "Weekend!", else "Midweek"
let dayNum = 5; // Test value
let dayMessage;

// switch(dayNum) { cases... }
switch (dayNum) {
  case 1:
    dayMessage = "Start of the week!";
    break;

  case 5:
    dayMessage = "TGIF";
    break;

  case 6:
  case 7:
    dayMessage = "weekend";
    break;

  default:
    dayMessage = "Midweek";
}

console.log("Day message:", dayMessage);

// Self-check TODO 2
if (dayMessage === "TGIF!") {
  console.log("✓ TODO 2: Switch correct!");
} else {
  console.log("✗ TODO 2: Expected TGIF for day 5");
}

// TODO 3: Traffic light if/else
// "red" → "STOP", "yellow" → "SLOW", "green" → "GO", else "Invalid"
let light = "red"; // Test value
let action;
// if (light === "red") ...

console.log("Light action:", action);

// Self-check TODO 3
if (action === "STOP") {
  console.log("✓ TODO 3: Traffic logic correct!");
} else {
  console.log("✗ TODO 3: Expected STOP for red");
}

// All TODOs solved? All ✓ above. Mark Day 2 [x] in TODO.md!
