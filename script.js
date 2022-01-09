// Strict Mode
"use strict"; // Always use this code in first line of js to enable strict mode

/* /////////////////////////////////////////////////////////////////////
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "audio"; // Strict mode reserve this variable for future purposes
// const private = 123; // Same as before
*/

/* ////////////////////////////////////////////////////////////////////
// Functions
function logger() {
  console.log("Hi there");
}
// calling/running/invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor("five", "two");
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice); // Actually console.log() is also a built-in function

const num = Number("23"); //Number() is also a built-in function
console.log(num);
*/

/* //////////////////////////////////////////////////////////////////////
// Function declaration
function calcAge1(birthYear) {
  return 2021 - birthYear;
}
const age1 = calcAge1(1996);

// Function Expressions
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age2 = calcAge2(1996);
console.log(age1, age2);
*/

/* //////////////////////////////////////////////////////////////////////
// Arrow functions
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement1 = (birthYear) => {
  const age4 = 2021 - birthYear;
  const retirement1 = 65 - age4;
  return retirement1;
};
console.log(yearsUntilRetirement1(1996));

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age5 = 2021 - birthYear;
  const retirement2 = 65 - age5;
  return `${firstName} retires in ${retirement2} years`;
};
console.log(yearsUntilRetirement2(1996, "Mani"));
*/

/* //////////////////////////////////////////////////////////////////////
// Functions calling another function
function fruitCutter(fruit) {
  return fruit * 4;
};
function fruitProcessor(apples, oranges) {
  const applePieces = fruitCutter(apples);
  const orangePieces = fruitCutter(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
};
console.log(fruitProcessor(3, 4));
*/

/* //////////////////////////////////////////////////////////////////////
// Reviewing functions
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1996, "Mani"));
console.log(yearsUntilRetirement(1945, "Renga"));
*/

/* /////////////////////////////////////////////////////////////////////
// Arrays
const friends = ["Alagu", "Siva", "Manda"];
const y = new Array(1996, 1998, 2021);
console.log(friends);
console.log(friends.length);
console.log(friends[0]);
console.log(friends[friends.length - 1]);
friends[2] = "Arun";
console.log(friends);
// friends = ["Rex", "Annish"]; // We cant change whole array

const firstName = "Mani";
const mani = [firstName, "Renga", 2021 - 1996, "coder", friends];
console.log(mani);

// Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1965, 1973, 1985, 1996, 1998];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 2]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 2]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/* //////////////////////////////////////////////////////////////////////
// Basic array operations/methods
const friends = ["Alagu", "Siva", "Manda"];
console.log(friends);

// Add elements
const newLength = friends.push("Annish"); // Add to last
console.log(friends);
console.log(newLength);

friends.unshift("Rex"); // Add to beginning
console.log(friends);

// Remove elements
const popped = friends.pop(); // Last element
console.log(popped);
console.log(friends);

friends.shift(); // First element
console.log(friends);

// To find index
console.log(friends.indexOf("Alagu"));
console.log(friends.indexOf("Siva"));
console.log(friends.indexOf("siva")); //It does strict equality

// To find whether an element is there or not
friends.push(23);
console.log(friends.includes("Alagu"));
console.log(friends.includes("Annish"));
console.log(friends.includes("23")); // It does strict equality
console.log(friends.includes(23));

if (friends.includes("Alagu")) {
  console.log("You have a friend called Alagu");
}
*/

/* //////////////////////////////////////////////////////////////////////
// Objects
const maniArray = ["Mani", "Renga", 2021 - 1996, "coder", ["Alagu", "Siva"]];

const mani = {
  firstName: "Mani",
  lastName: "Renga",
  age: 2021 - 1996,
  job: "coder",
  friends: ["Alagu", "Siva"],
};
console.log(mani);

// Dot vs Bracket notation
console.log(mani.firstName);
console.log(mani["lastName"]);

const nameKey = "Name";
console.log(mani["first" + nameKey]);
console.log(mani[`last${nameKey}`]);
// console.log(mani."last"+nameKey);

const interestedIn = prompt(
  "What do u want to know abt Mani? Choose between firstName, lastName, age, qualification, friends, location and twitter. These are case sensitive"
);
mani[interestedIn] = "BE";
console.log(mani.interestedIn);
console.log(mani["interestedIn"]);
console.log(mani[interestedIn]);

if (mani[interestedIn]) {
  console.log(mani[interestedIn]);
} else {
  console.log("Wrong request");
}

mani.location = "India";
mani["twitter"] = "@manirenga3";
console.log(mani);

// Small challenge
console.log(
  `${mani.firstName} has ${mani.friends.length} friends and his best friend is called ${mani["friends"][0]}`
);
*/

/* //////////////////////////////////////////////////////////////////////
// Object methods
const mani = {
  firstName: "Mani",
  lastName: "Renga",
  birthYear: 1996,
  job: "coder",
  friends: ["Alagu", "Siva"],
  hasDriversLiense: true,

  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2021 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary1: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()}-year old ${
        this.job
      }, and he has ${this.hasDriversLiense ? "a" : "no"} driver's license`
    );
  },

  getSummary2: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLiense ? "a" : "no"} driver's license`;
  },
};

console.log(mani.calcAge());

console.log(mani.age);
console.log(mani.age);
console.log(mani.age);

// console.log(mani["calcAge"](1996));

// Small challenge
// console.log(
//   `${mani.firstName} is a ${mani.age}-year old ${mani.job}, and he has ${
//     mani.hasDriversLiense ? "a" : "no"
//   } driver's license`
// );
mani["getSummary1"]();
console.log(mani["getSummary2"]());
*/

/* /////////////////////////////////////////////////////////////////////
// Loops
// For loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Loop repetition number ${rep}`);
}
*/

/*///////////////////////////////////////////////////////////////////////
// Looping arrays
const mani = [
  "Mani",
  "Renga",
  2021 - 1996,
  "coder",
  ["Alagu", "Siva", "Arun"],
  true,
];
const types = [];

// console.log(mani[0])
// console.log(mani[1])
// ...
// console.log(mani[5])

for (let i = 0; i < mani.length; i++) {
  // Reading array
  console.log(mani[i], typeof mani[i]);

  // Filling types array
  // types[i] = typeof mani[i];
  types.push(typeof mani[i]);
}
console.log(types);

const birthYears = [1965, 1973, 1996, 1998];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(2021 - birthYears[i]);
}
console.log(ages);

// Continue and Break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < mani.length; i++) {
  if (typeof mani[i] !== "string") continue;
  console.log(mani[i], typeof mani[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < mani.length; i++) {
  if (typeof mani[i] === "number") break;
  console.log(mani[i], typeof mani[i]);
}
*/

/* //////////////////////////////////////////////////////////////////////
// Looping backwards
const mani = ["Mani", "Renga", 2021 - 1996, "coder", ["Alagu", "Siva", "Arun"]];

for (let i = mani.length - 1; i >= 0; i--) {
  console.log(i, mani[i]);
}

// Loops inside loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---Starting Exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Repetition ${rep}`);
  }
}
*/

/* //////////////////////////////////////////////////////////////////////
// While loop
let rep = 1;
while (rep <= 10) {
  console.log(`Repetition number ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You rolled ${dice}`);
}
*/
