'use strict';

/* //////////////////////////////////////////////////////////////////////
// Constructor functions and New operator
// 1. New {} is created
// 2. function is called and this = {}
// 3. {} linked to prototype
// 4. function automatically returns ()

const Person = function (firstName, birthYear) {
  // Instance properties
  (this.firstName = firstName), (this.birthYear = birthYear);

  // Never do this
  // this.calcAge = function () {
  //   console.log(2021-this.birthYear);
  // }
};

const mani = new Person('Mani', 1996);
console.log(mani);

const alagu = new Person('Alagu', 1997);
const annish = new Person('Annish', 2001);
console.log(alagu, annish);

console.log(mani instanceof Person);

Person.hey = function () {
  console.log('Hey there..................');
  console.log(this);
};
Person.hey();

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};
Person.prototype.lastName = 'Renga';

console.log(mani.lastName);
mani.calcAge();

console.log(Person.prototype.__proto__);
console.log(mani.__proto__);
console.log(mani.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.isPrototypeOf(mani));

console.log(mani.hasOwnProperty('firstName'));
console.log(mani.hasOwnProperty('lastName'));

console.log(mani.__proto__);
// Object prototype (Top of prototype chain)
console.log(mani.__proto__.__proto__);
console.log(mani.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 4, 5, 7, 4, 5, 4, 8, 8, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);
console.log(Object.prototype);
*/

/* ///////////////////////////////////////////////////////////////////
// ES6 Classes
// Class expression
// const Person = class {};

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(n) {
    if (n.includes(' ')) this._fullName = n;
    else alert(`${n} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods
  static hey() {
    console.log('Hey there.............');
    console.log(this);
  }
}

const mani2 = new PersonCl('Mani Renga', 1996);
console.log(mani2);
const alagu2 = new PersonCl('Alagu', 1997);
console.log(alagu2);

mani2.calcAge();
console.log(mani2.age);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
mani2.greet();

console.log(mani2.__proto__ === PersonCl.prototype);

PersonCl.hey();

// Setters and Getters
const account = {
  owner: 'Mani',
  movements: [200, 450, 600, 120],

  get latest() {
    return this.movements.pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account);

console.log(account.latest);
account.latest = 700;
console.log(account.movements);
*/

/* ////////////////////////////////////////////////////////////////////
// object.create
const personProto = {
  calcAge() {
    console.log(2021 - this.birthyear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthyear = birthYear;
  },
};

const mani3 = Object.create(personProto);
console.log(mani3);
mani3.fullname = 'Mani Renga';
mani3.birthyear = 1996;
console.log(mani3);

mani3.calcAge();

console.log(mani3.__proto__);
console.log(mani3.__proto__ === personProto);

const alagu3 = Object.create(personProto);
alagu3.init('Alagu', 1997);
alagu3.calcAge();
*/

/* /////////////////////////////////////////////////////////////////////
// Iheritance between classes: Constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 1995, 'CSE');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/* /////////////////////////////////////////////////////////////////////
// Iheritance between classes: ES6 classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  
  set fullName(n) {
    if (n.includes(' ')) this._fullName = n;
    else alert(`${n} is not a full name`);
  }
  
  get fullName() {
    return this._fullName;
  }
  
  static hey() {
    console.log('Hey there.............');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always first
    super(fullName, birthYear);
    
    this.course = course;
  }
  
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  
  calcAge() {
    console.log(`I'm ${2021 - this.birthYear} years old`);
  }
}

const martha = new StudentCl('Martha Jones', 1997, 'CSE');
martha.introduce();
martha.calcAge();
*/

/* /////////////////////////////////////////////////////////////////////
// Iheritance between classes: Object.create
const personProto = {
  calcAge() {
    console.log(2021 - this.birthyear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthyear = birthYear;
  },
};

const StudentProto = Object.create(personProto);
StudentProto.init = function (firstName, birthyear, course) {
  personProto.init.call(this, firstName, birthyear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'CSE');
jay.introduce();
jay.calcAge();
*/

/* /////////////////////////////////////////////////////////////////////
// Encapsulation
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// There are static versions like this

class Account {
  // 1. Public fields (Instances)
  locale = navigator.language;

  // 2. Private fields (Instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thank you for opening an account ${owner}`);
  }

  // 3. Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4. Private methods
  // Protected method
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'INR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(1000));

Account.helper();

// Chaining methods
acc1.deposit(300).deposit(1000).requestLoan(25000).withdraw(15000);
console.log(acc1.getMovements());
*/
