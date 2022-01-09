"use strict";

/* //////////////////////////////////////////////////////////////////////
// Functions
function describeCountry(country, population, capitalCity) {
  const result = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return result;
}

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);
const india = describeCountry("India", 130, "Delhi");
console.log(india);
const america = describeCountry("America", 30, "Washington");
console.log(america);
*/

/* //////////////////////////////////////////////////////////////////////
// Functions declarations and expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const china = percentageOfWorld1(1441);
const india = percentageOfWorld1(130);
const america = percentageOfWorld1(45);
console.log(china, india, america);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const russia = percentageOfWorld2(100);
const germany = percentageOfWorld2(95);
const spain = percentageOfWorld2(67);
console.log(russia, germany, spain);

// Arrow functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const japan = percentageOfWorld3(75);
const africa = percentageOfWorld3(110);
const uae = percentageOfWorld3(35);
console.log(japan, africa, uae);

// Functions calling other functions
const describePopulation = function (country, population) {
  const percent = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percent}% of the world`;
};
console.log(describePopulation("China", 1441));
console.log(describePopulation("India", 130));
console.log(describePopulation("America", 45));
*/

/* /////////////////////////////////////////////////////////////////////
// Arrays
const populations = [1441, 130, 45, 34];
console.log(populations);
console.log(populations.length);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// Basic array operations
const neighbours = ["India", "Bangladesh", "Pakistan", "Sri Lanka"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country");
}

console.log(neighbours.indexOf("India"));
neighbours[0] = "Republic of India";
console.log(neighbours);
*/

/* /////////////////////////////////////////////////////////////////////
// Objects
const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Tamil",
  population: 130,
  neighbours: ["Pakistan", "Sri Lanka"],
};
console.log(myCountry);

// Dot vs Bracket notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry["neighbours"].length} neighbouring countries and a capital called ${myCountry["capital"]}.`
);

myCountry.population = 132;
console.log(myCountry);

myCountry["population"] = 130;
console.log(myCountry);
*/

/* //////////////////////////////////////////////////////////////////////
// Object methods
const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Tamil",
  population: 130,
  neighbours: ["Pakistan", "Sri Lanka"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this["neighbours"].length} neighbouring countries and a capital called ${this["capital"]}.`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // this.isIsland = !Boolean(this.neighbours.length); //Simpler version

    return this.isIsland;
  },
};
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);
*/

/* //////////////////////////////////////////////////////////////////////
// For loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// Looping arrays, Breaking and Continuing
const populations = [1441, 130, 45, 34];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push((populations[i] / 7900) * 100);
}
console.log(percentages2);
*/

/* //////////////////////////////////////////////////////////////////////
// Looping backwards and Loops in loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  // if (listOfNeighbours[i].length === 1) continue;
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
*/

/* //////////////////////////////////////////////////////////////////////
// While loop
const populations = [1441, 130, 45, 34];
const percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push((populations[i] / 7900) * 100);
  i++;
}
console.log(percentages3);
*/
