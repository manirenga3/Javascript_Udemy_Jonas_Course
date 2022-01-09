'use strict';

/*
// Challenge #1
const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
console.log(car1, car2);

car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();

// Challenge #2
class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car3 = new CarCl('Ford', 120);
console.log(car3);

car3.accelerate();
car3.brake();

console.log(car3.speedUS);
car3.speedUs = 50;
console.log(car3);

// Challenge #3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const car4 = new EV('Tesla', 120, 23);
console.log(car4);

car4.accelerate();
car4.accelerate();
car4.brake();
car4.chargeBattery(90);
car4.accelerate();
car4.accelerate();
car4.brake();

// Challenge #4
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge += chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const car5 = new EVCl('Rivian', 120, 23);
console.log(car5);
car5.accelerate().accelerate().brake().chargeBattery(90).accelerate().brake();
*/
