// Variables and values
// let country = "India";
// let continent = "Asia";
let population = 130;
// console.log(country, continent, population);

// Datatypes
// let isIsland = "India";
const isIsland = false;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Declaring variables
language = "Tamil";
const country = "India";
const continent = "Asia";

// Basic Operators
const halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

const finlandPop = 6;
console.log(population > finlandPop);

const averagePop = 33;
console.log(population < averagePop);

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// Template literals
const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);

// If-Else statements
if (population > 33) {
  console.log(`${country}'s poulation is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

// Type conversion & coercion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //"617"
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

/*
// Equality Operators
let numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) console.log("Only 1 border");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");
*/

// Logical Operators
// Test case 1
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
// Test case 2
language = "english";
population = 45;
if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

// Switch statement
console.log(language);
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers");
    break;
  case "spanish":
    console.log("2nd place");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("4th place");
    break;
  case "arabic":
    console.log("5th place");
    break;
  default:
    console.log("Great language too");
}

// Conditional or Ternary operator
population >= 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
