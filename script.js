/* //////////////////////////////////////////////////////////////
// Variables and values
let js = "amazing";
// if (js === "amazing") alert("Javascript is fun");

console.log(12 + 25 + 35 - 25);

console.log("Mani");
console.log(23);

let firstName = "Manikandan";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let mani_renga = "MR";
let $function = 25;

let PI = 3.1415;

// Use descriptive variables like this
let myFirstJob = "Mechanical Engnr";
let myCurrentJob = "Programmer";
console.log("myCurrentJob");
// Not like this
let job1 = "Mech";
let job2 = "Code";
*/

/* /////////////////////////////////////////////////////////////
// Datatypes
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof "javascriptIsFun");
console.log(typeof javascriptIsFun);
console.log(typeof 23);

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1996;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/* ///////////////////////////////////////////////////////////////////
// Declaring variables
let age = 25;
age = 26;

const birthYear = 1996;
// birthYear = 1997;
// const job;

var job = "Mech";
job = "Code";

lastName = "Renga";
console.log(lastName);
*/

/* ///////////////////////////////////////////////////////////////////
// Operators
// Mathematical or Arithmetic operators
const now = 2021;
const ageMani = now - 1996;
const ageRenga = now - 1998;
console.log(ageMani, ageRenga);

console.log(ageMani * 2, ageMani / 10, 2 ** 3);
// 2**3 = 2 to the power of 3 = 2*2*2

const firstName = "Mani";
const lastName = "Renga";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageMani > ageRenga); //  >, <, >=, <=
console.log(ageRenga >= 18);

const isFullAge = ageRenga >= 18;

console.log(now - 1996 > now - 1998);
*/

/* /////////////////////////////////////////////////////////////////////
// Operator Precedence
// See it in MDN website
let now = 2021;
const ageMani = now - 1996;
const ageRenga = now - 1998;
console.log(ageMani, ageRenga);

console.log(now - 1996 > now - 1998);

let x, y;
// See it in MDN for right to left and left to right
x = y = 25 - 5 - 5; // x = y = 15, then x=15 & y=15
console.log(x, y);

let averageAge = (ageMani + ageRenga) / 2;
console.log(averageAge);
*/

/* //////////////////////////////////////////////////////////////////////
// Strings & Template literals
const firstName = "Mani";
const job = "coder";
const birthYear = "1996";
const year = "2021";

const me =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(me);

const meNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(meNew);

console.log(`Just a regular string`);

console.log("Strings with \n\
multiple\n\
lines");

console.log(`Strings
with
multilines`);
*/

/* /////////////////////////////////////////////////////////////////////
// If-Else statements
const age = 15;
if (age >= 18) {
  console.log(`He can take driving license`);
} else {
  console.log(`He cant take driving licence. Wait for ${18 - age} years`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/* //////////////////////////////////////////////////////////////////////
// Type conversion & Type coercion
// String to number using Number() function
const inputYear = "1996";
console.log(inputYear);
console.log(typeof inputYear);

const inputYear1 = inputYear + 18; //Type Coercion to string because of plus operator
console.log(inputYear1);
console.log(typeof inputYear1);

const inputYear2 = Number(inputYear) + "18"; //Type Coercion to string because of plus operator
console.log(inputYear2);
console.log(typeof inputYear2);

const inputYear3 = Number(inputYear) + 18; //Type Conversion
console.log(inputYear3);
console.log(typeof inputYear3);

const inputYear4 = Number(inputYear); //Type Conversion
console.log(inputYear4);
console.log(typeof inputYear4);

console.log(Number("Mani")); // It gives Nan because we cant this convert this string to a number
console.log(typeof NaN); // Nan stands for Not A Number ie Invalid number

// Number to string using String() function
console.log(String(23), 23); // You can see color difference
// Number is colored ones and Strings are White colored

console.log("23" + "10" + 3); //Type Coercion to strings by +
console.log("23" - "10" - 3); //Type Coercion to number by -
console.log("23" + "10" - 3); //Type Coercion to number by -
console.log("23" - "10" + 3); //Type Coercion to number by -

console.log("23" * "10" * 3); //Type Coercion to number by *
console.log("23" / "10" / 3); //Type Coercion to number by /
console.log(("23" * "10") / 3); //Type Coercion to number by * and /
console.log(("23" / "10") * 3); //Type Coercion to number by * and /

console.log("23" > "11"); //Type Coercion to number by >

let n = "1" + 1; //"11". Type Coercion to string by +
n = n - 1; //10. Type Coercion to number by -
console.log(n);

n = 2 + 3 + 4 - "5"; //4. Type Coercion to number by -
console.log(n);

n = "10" - "4" - "3" - 2 + "5"; //"15". Type Coercion to number by - and then to string by +
console.log(n);

// Truthy and Falsy
// 5 Falsy values : 0, "", undefined, null, NAN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Mani"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("Yous should get a job");
}

let height = 0; //In this case, we didn't account for this. Its an error bug. We only accounted for scenario that height is defined or not. Though we have height defined as zero, its give solution as undefined because of zero is a falsy value. But we can fix this using Logical operators.
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/* //////////////////////////////////////////////////////////////////////
// Equality operators
let age = 18;
if (age == 18) console.log("1 Yes, its 18"); //Loose
if (age === 18) console.log("2 Yes, its 18"); //Strict

age = "19";
if (age == 19) console.log("3 Yes, its 19"); //Type coercion happens here
if (age === 19) console.log("4 Yes, its 19"); //No type coercion
if (age != 19) console.log("5 Yes its 19"); //Type coercion happens
if (age !== 19) console.log("6 Yes its 19"); //No type coercion

let fav = prompt("Enter fav no");
console.log(fav);
console.log(typeof fav);

let fav2 = Number(prompt("Enter fav2 no"));
console.log(fav2);
console.log(typeof fav2);
*/

/* /////////////////////////////////////////////////////////////////////
// Logical Operators
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log("He can drive");
} else {
  console.log("Someone else drive");
}

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && !isTired);
if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("He can drive");
} else {
  console.log("Someone else drive");
}
*/

/* /////////////////////////////////////////////////////////////////////
// Switch statement
const day = "monday";
switch (day) {
  case "monday": // day==="monday" strict equality
    console.log("Plan course");
    break;
  case "tuesday":
    console.log("Go to meeting");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") console.log("Plan course");
else if (day === "tuesday") console.log("Go to meeting");
else if (day === "wednesday" || day === "thursday") console.log("Write code");
else if (day === "friday") console.log("Record videos");
else if (day === "saturday" || day === "sunday") console.log("Enjoy weekend");
else console.log("Not a valid day");
*/

// Conditional || Ternary operator
const age = 23;
age >= 18 ? console.log("He drinks wine") : console.log("He drinks water");

const drink = age >= 18 ? "wine" : "water";
console.log(`He drinks ${drink}`);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(`He drinks ${drink2}`);

// In simple,
console.log(`He drinks ${age >= 18 ? "wine" : "water"}`); // this will work because we use ternary operator inside a placeholder
/*
console.log(`He drinks ${if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}}`); 
// this will not work because we use if else statement inside a placeholder and js expects an expression only there.
*/
