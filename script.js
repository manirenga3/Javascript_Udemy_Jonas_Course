'use strict';

/* /////////////////////////////////////////////////////////////////////
// Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1, //ES6 way
  price = 199 * numPassengers //ES6 way
) {
  // ES5 way
  // numPassengers ??= 1;
  // price ??= 199;

  const booking = {
    flightNum, //ES6 way
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
console.log(bookings);
*/

/* //////////////////////////////////////////////////////////////////////
// How passing arguments works
const flight = 'LH123';
const mani = {
  names: 'Mani Renga',
  passport: 1234567,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.names = 'Mr.' + passenger.names;

  if (passenger.passport === 1234567) {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, mani);
// This is happening when calling
// const flightNum = flight;
// const passenger = mani;

// console.log(flight);
// console.log(mani);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(mani);
checkIn(flight, mani);
*/

/* ////////////////////////////////////////////////////////////////////
// Functions accepting Callback functions
// Generic functions (First class functions)
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higer Order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// Javascript uses callbacks all the time
// First class function
const high5 = function () {
  console.log('👋');
};

// Higher Order function
document.body.addEventListener('click', high5);
['Mani', 'Renga', 25].forEach(high5);
*/

/* /////////////////////////////////////////////////////////////////////
// Functions returning functions
const greet = function (greeting) {
  return function (names) {
    console.log(`${greeting} ${names}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Mani');
greeterHey('Renga');

greet('Hello')('Mani Renga');

// Using arrow function
const greet2 = greeting2 => name2 => console.log(`${greeting2} ${name2}`);
greet2('Hello')('Mani');
*/

/* //////////////////////////////////////////////////////////////////////
// Call, Apply and Bind methods
const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  book(flightNum, names) {
    console.log(
      `${names} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, names });
  },
};

lufthansa.book(239, 'Mani');
lufthansa.book(135, 'Renga');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  code: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book('123', 'Mani');

// Call method
book.call(eurowings, 123, 'Mani');
console.log(eurowings);

book.call(lufthansa, 239, 'Renga');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  code: 'LX',
  bookings: [],
};

book.call(swiss, 586, 'Manirenga');

// Apply method
const flightData = [583, 'Alagu'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(845, 'Arun');

// We can bind arguments too
const bookEW23 = book.bind(eurowings, 23);

bookEW23('Mani');
bookEW23('Renga');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = vlaue => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Using function return function
const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/* /////////////////////////////////////////////////////////////////////
// Immediately Invoked Function Expression (IIFE)
const runOnce = function () {
  console.log('This will run once');
};

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// console.log(isPrivate);
(() => console.log('This will also never run again'))();

// After ES6
{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

/* /////////////////////////////////////////////////////////////////////
// Closures
const secureBooking = function () {
  let passagengerCount = 0;
  return function () {
    passagengerCount++;
    console.log(`${passagengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 100;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 100;
boardPassengers(180, 3);
*/
