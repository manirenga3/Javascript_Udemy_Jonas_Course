'use strict';

// Data needed for first part of the section
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // After ES6, we can compute property names too in object like this
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Before ES6
  // openingHours: openingHours,
  // After ES6
  openingHours,

  // Before ES6, we can write functions inside an object like this
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '21.00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // After ES6, we can write functions inside object like this
  orderPasta(i1, i2, i3) {
    console.log(`Here is ur delicious pasta with ${i1},${i2} and ${i3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

/* //////////////////////////////////////////////////////////////////////
// ARRAY DESTRUCTURING
// Retrieving elements without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// Using destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr); // Original array won't change

// Switching elements
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// Using temp
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
// Using destructuring trick
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Destructuring an return array coming from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// In Nested arrays
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [k, l, [m, n]] = nested;
console.log(k, l, m, n);

// Default values to variables if we dont know array length and it is shorter
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // r will get 1 because it is undefined in the array
*/

/* //////////////////////////////////////////////////////////////////////
// OBJECT DESTRUCTURING
const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);

// To set different variable name
const {
  names: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// To set defauult values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 999,
  b = 888;
const obj = { a: 1, b: 2, c: 3 };
({ a, b } = obj); // Use paranthesis
console.log(a, b);

// Nested Objects
const { fri } = openingHours;
console.log(fri);
// Even further
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Destructing object in the function parameter when we call the function using an object as arguments (For multiple parameters)
restaurant.orderDelivery({
  time: '21.30',
  address: 'Kamaraj Nagar, Maruthamputhur',
  starterIndex: 2,
  mainIndex: 2,
});
restaurant.orderDelivery({
  address: 'Kamaraj Nagar, Maruthamputhur',
  mainIndex: 2,
});
*/

/* //////////////////////////////////////////////////////////////////////
// SPREAD OPERATOR
// Arrays
const arr = [7, 8, 9];
console.log(...arr); // To retrive all elements
// To expand in normal way
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// Using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // It doesn't change the old array
console.log(newMenu);

// To copy array
const mainMenuCopy = [...restaurant.mainMenu];

// To merge arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables are arrays, strings, maps, sets but not objects
const firstName = 'Mani';
console.log(...firstName);
const letters = [...firstName, ' ', 'S'];
console.log(letters);
// console.log(`${...firstName} Renga`); // This wont work because spread operotor works inside an array or in function arguments

// Using spread operator when we want to pass multiple values as arguments
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
// In normal way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// Using spread operator
restaurant.orderPasta(...ingredients);

// Objects
// To expand
const newRestaurant = { foundedIn: 1996, ...restaurant, founder: 'Mani' };
console.log(newRestaurant);

// To copy and changing its value
const newRestaurantCopy = { ...newRestaurant };
newRestaurantCopy.founder = 'Renga';
console.log(newRestaurantCopy.founder);
console.log(newRestaurant.founder);
*/

/* /////////////////////////////////////////////////////////////////////
// REST PATTERN AND REST PARAMETERS

// 1) Rest pattern with destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4, 5]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);

// 2) Rest parameters in Functions
const add = function (...numbers) {
  // Collecting elements into a numbers array in the paramters using Rest Parameters
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(1, 2);
add(4, 5, 3, 5);
add(7, 5, 6, 9, 7, 1, 5, 6, 2);

const x = [1, 2, 3];
add(...x); // Spreading elements of x array as arguments here using spread operator
add(4, 5, ...x);

restaurant.orderPizza('mushrooms', 'olive', 'onion', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/* /////////////////////////////////////////////////////////////////////
// SHORT CIRCUITING
// Logucal operators can use ANY datatype, return ANY datatype and do short circuiting
console.log('-------- OR ----------');
console.log(3 || 'Mani');
console.log('' || 'Mani');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || false || 0 || '' || 'Mani' || 23 || null);

// Practical example
restaurant.numGuests = 0;
// In normal way
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// Using short circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------- AND ----------');
console.log(0 && 'Mani');
console.log(7 && 'Mani');
console.log('Mani' && 23 && null && 'hello');

// Practical example
// In normal way
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// Using short circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/* //////////////////////////////////////////////////////////////////////
// NULLISH COALESCING OPERATOR
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// NULLISH VALUES : null & undefined ( Not 0 & '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

/* //////////////////////////////////////////////////////////////////////
// LOGICAL ASSIGNMENT OPERATORS
const rest1 = {
  names: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  names: 'La Piazza',
  owner: 'Mani',
};

// 1) OR asignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// 2) NULLISH assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// 3) AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/* /////////////////////////////////////////////////////////////////////
// FOR OF LOOP
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
  console.log(item[0]);
  console.log(`${item[0] + 1} : ${item[1]}`);
}
// In simple way,
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}

// console.log([...menu.entries()]);
*/

/* //////////////////////////////////////////////////////////////////////
// ENHANCED OBJECT LITERALS
*/

/* //////////////////////////////////////////////////////////////////////
// OPTIONAL CHAINING OPERATOR

// In normal way
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// Using Optional chaining operator
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// On Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// On Arrays
const users = [{ name: 'Mani', age: 25 }];
// const users = [];
// let users;

// In normal way
if (users.length > 0) console.log(users[0].name);
else console.log('Users array empty');
// Using Optional chaining operator
console.log(users[0]?.name ?? 'Users array empty');
*/

/* /////////////////////////////////////////////////////////////////////
// LOOPING OBJECTS
// Looping object property names
const keys = Object.keys(openingHours);
console.log(keys);

let str = `We are open on ${keys.length} days : `;
for (const day of keys) {
  str += `${day} `;
}
console.log(str);

// Looping object values
const values = Object.values(openingHours);
console.log(values);

// Looping entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
*/

/* //////////////////////////////////////////////////////////////////////
// SETS
const newSets = new Set('Mani');
console.log(new Set('Mani Renga').size);
console.log(newSets);
console.log(new Set('Mani'));

const orderSets = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSets);

console.log(orderSets.size);
console.log(orderSets.has('Pizza'));
console.log(orderSets.has('Bread'));
orderSets.add('Garlic bread');
orderSets.add('Garlic bread');
orderSets.delete('Risotto');
// orderSets.clear();
console.log(orderSets);

for (const order of orderSets) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);
const staffSet = new Set(staff);
console.log(staffSet);
const staffUniqueArr = [...new Set(staff)];
console.log(staffUniqueArr);
console.log(new Set(staff).size);
*/

/* //////////////////////////////////////////////////////////////////////
// MAPS
const rest = new Map();
rest.set('names', 'Classico Italiano');
rest.set(1, 'Italy');
console.log(rest.set(2, 'Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest);

console.log(rest.get('names'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

// Maps : Iteration
const question = new Map([
  ['question', 'What is the best programmiong language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object into map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app example
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
const answer = Number(prompt('Enter your answer:'));
console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);

// To get keys and values
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/* /////////////////////////////////////////////////////////////////////
// STRINGS - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// Example
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got middle seat');
  else console.log('You are lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Mani'));
console.log(typeof new String('Mani'));

console.log(typeof new String('Mani').slice());
*/

/* ////////////////////////////////////////////////////////////////////
// STRINGS - Part 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Example
// Fix capitalization in name
const capitalization = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};
console.log(capitalization('mAnIreNGa'));

// Comparing email
const compareEmail = function (email, loginEmail) {
  // const loginLower = loginEmail.toLowerCase();
  // const normalizedEmail = loginLower.trim();
  const normalizedEmail = loginEmail.toLowerCase().trim();
  return email === normalizedEmail;
};
console.log(compareEmail('manirenga3@gmail.com', ' maNIreNga3@Gmail.com \n'));

// Replacing
const priceUS = '288,97$';
const priceIn = priceUS.replace('$', 'Rs').replace(',', '.');
console.log(priceIn);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate')); // Old way to replace all same words using this function expression (/xxx/g)

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));
console.log(plane.endsWith('eo'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the Airbus Family');
}

// Example
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are nort allowed to board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a GUN for protection');
*/

/* //////////////////////////////////////////////////////////////////////
// STRINGS - Part 3
// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Mani Renga'.split(' '));

const [firstName, lastName] = 'Mani Renga'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Example
// Fix capitalization in name
const capitalizeName = function (name) {
  const namesLower = name.toLowerCase();
  const names = namesLower.split(' ');
  let namesCorrect = [];

  for (const n of names) {
    // namesCorrect.push(n[0].toUpperCase() + n.slice(1));
    namesCorrect.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesCorrect.join(' '));
};

capitalizeName('jessica aNN smITh davis');
capitalizeName('mani renga');

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(25, '+'));
console.log('Mani'.padStart(20, '+').padEnd(25, '+'));

// Example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(45178624));
console.log(maskCreditCard(5089252792082141));
console.log(maskCreditCard('4571265348756231547'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

// Example
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/* /////////////////////////////////////////////////////////////////////
// STRING METHODS PRACTICE
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} ${time.replace(
    ':',
    'h'
  )}`.padStart(50);
  console.log(output);
}
*/
