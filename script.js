'use strict';

/*//////////////////////////////////////////////////////////////////////
// SCOPING
let birthYear;
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'ManiRenga';

      // Reassigning value to outer scope's variable
      output = 'NEW OUTPUT!!';

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(1, 2));
    }

    // console.log(add(1, 2));
    // console.log(str);
    console.log(millenial);
    console.log(output);
  }
  printAge();

  console.log(firstName);
  console.log(birthYear);
  return age;
}
// console.log(millenial);

const firstName = 'Mani';
calcAge(1996);
console.log(birthYear);
*/

/* /////////////////////////////////////////////////////////////////////
// HOISTING AND TDZ
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Mani';
let job = 'Coder';
const year = 1996;

// Functions
console.log(addDec(1, 2));
// console.log(addEXp(1, 2));
console.log(addArr);
// console.log(addArr(1, 2));

function addDec(a, b) {
  return a + b;
}

const addEXp = function (a, b) {
  return a + b;
};

var addArr = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteCart();

var numProducts = 10;

function deleteCart() {
  console.log('All products deleted');
}

// For window object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/* /////////////////////////////////////////////////////////////////////
// THIS KEYWORD
console.log(this);

const calcAge = function (birthYear) {
  console.log(this);
  console.log(2021 - birthYear);
};
calcAge(1996);

const calcAgeArr = birthYear => {
  console.log(this);
  console.log(2021 - birthYear);
};
calcAgeArr(1998);

const mani = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};
mani.calcAge();

const renga = {
  year: 2002,
};
renga.calcAge = mani.calcAge;
renga.calcAge();

const func = mani.calcAge;
console.log(func);
func();
*/

/* //////////////////////////////////////////////////////////////////////
// REGULAR VS ARROW FUNCTIONS

// THIS KEYWORD
// var firstName = 'Renga';
const mani = {
  firstName: 'Mani',
  year: 1996,

  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);

    // Solution 1 (Pre ES6) (Using variable)
    // const self = this;
    // const isMillenial = function () {
    // console.log(self);
    // console.log(this.year >= 1981 && this.year <= 1996);
    // console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // Solution 2 (ES6) (Using Arrow function)
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // Arrow function (It has no self this keyword)
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
mani.greet();
mani.calcAge();

// ARGUMENTS KEYWORD
function addDec(a, b) {
  console.log(arguments);
  return a + b;
}
addDec(1, 2);
addDec(1, 2, 3, 4);

const addEXp = function (a, b) {
  console.log(arguments);
  return a + b;
};
addEXp(10, 20);

// Arrow functions dont have arguments keyword
const addArr = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArr(100, 200);
*/

/* //////////////////////////////////////////////////////////////////////
// PRIMITIVES VS OBJECTIVES
// Primitive types
let lastName = 'Renga';
let oldLastName = lastName;
lastName = 'Mani';
console.log(lastName, oldLastName);

// References types
const mani = {
  firstName: 'Mani',
  lastName: 'Renga',
  age: 25,
};
const renga = mani;
renga.lastName = 'Mani';
console.log('Mani', mani);
console.log('Renga', renga);
// renga = {};

// Copying object and changing its value (Array excluded)
const mani2 = {
  firstName: 'Mani',
  lastName: 'Renga',
  age: 25,
  friends: ['Alagu', 'Siva'],
};
const mani2Copy = Object.assign({}, mani2);

mani2Copy.lastName = 'Mani';
mani2Copy.friends.push('Annish');

console.log('Original', mani2);
console.log('Changed', mani2Copy);
*/
