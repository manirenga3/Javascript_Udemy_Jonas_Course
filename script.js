'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// ------------------------------- Data --------------------------------
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// ------------------------- Elements ----------------------------------
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// ---------------------------- Functions -------------------------------
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov} €</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (accs) {
  accs.balance = accs.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${accs.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, inc) => acc + inc, 0);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, out) => acc + out, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interestRate / 100))
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};

const hideUI = function () {
  labelWelcome.textContent = `Log in to get started`;
  containerApp.style.opacity = '0';
};

const clearInputFields = function (field1, field2 = '') {
  if (field2 === '') {
    field1.value = '';
    field1.blur();
  } else {
    field1.value = field2.value = '';
    field1.blur();
    field2.blur();
  }
};

// ------------------------ Event Handlers ----------------------------
let currentAccount;

// -------Login functionality
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  // Finding current accpunt
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // Checking current account pin and then dispay details
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = '100';

    // Update UI
    updateUI(currentAccount);
  } else {
    // Hide UI and message
    hideUI();

    // Alerting
    alert('Wrong Credentials Entered!');
  }

  // Clear input fields
  clearInputFields(inputLoginUsername, inputLoginPin);
});

// -------Transfer functionality
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  // Finding receiver account
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // Clear input fields
  clearInputFields(inputTransferAmount, inputTransferTo);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// ------- Loan functionality
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add loan amount
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  // Clear input field
  clearInputFields(inputLoanAmount);
});

// ------- Close account functionality
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // Finding index of account
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Deleting account
    accounts.splice(index, 1);

    // Hide UI and message
    hideUI();
  }

  // Clear input fields
  clearInputFields(inputCloseUsername, inputClosePin);
});

// ------- Sorting functionality
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* /////////////////////////////////////////////////////////////////////
// Simple array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(`--------Slice----------`);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
console.log(`--------Splice----------`);
arr.splice(-1);
console.log(arr);
const spliced = arr.splice(1, 2);
console.log(arr);
console.log(spliced);

// REVERSE
console.log(`--------Reverse----------`);
let arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2);

// CONCAT
console.log(`--------Concat----------`);
arr = ['a', 'b', 'c', 'd', 'e'];
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(`--------Join----------`);
console.log(letters.join(','));
*/

/* /////////////////////////////////////////////////////////////////////
// AT method
console.log(`--------At----------`);
const arr = [23, 64, 45, 12, 14];
console.log(arr[0]);
console.log(arr.at(0));

// getting last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// works on strings too
console.log('ManiRenga'.at(0));
console.log('ManiRenga'.at(-1));
*/

/* ////////////////////////////////////////////////////////////////////
// For Each loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(`--------FOR OF----------`);
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}. You deposit ${movement}`);
  } else {
    console.log(`${i + 1}. You withdraw ${Math.abs(movement)}`);
  }
}

console.log(`--------FOR EACH----------`);
movements.forEach(function (movement, i, array) {
  console.log(array);
  if (movement > 0) {
    console.log(`${i + 1}. You deposit ${movement}`);
  } else {
    console.log(`${i + 1}. You withdraw ${Math.abs(movement)}`);
  }
});
// 0: function(Element 0,index 0, full array)
// 1: function(Element 1,index 1, full array)
// 2: function(Element 2,index 2, full array) ....
*/

/* ////////////////////////////////////////////////////////////////////
// FOR EACH LOOP
// Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(map);
  console.log(`${key} : ${value}`);
});

// Sets
const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'USD', 'GBP']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(set);
  console.log(value);
});
*/

/* /////////////////////////////////////////////////////////////////////
// Map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});

// const movementsUsdArr = movements.map(mov => mov * eurToUsd);
// console.log(movementsUsdArr);

console.log(movements);
console.log(movementsUsd);

const movementsUsdfor = [];
for (const mov of movements) movementsUsdfor.push(mov * eurToUsd);
console.log(movementsUsdfor);

const movementsDescription = movements.map(
  (mov, i) =>
  `${i + 1}. You ${mov > 0 ? 'deposit' : 'withdraw'} ${Math.abs(mov)}`
  );
  console.log(movementsDescription);
*/

/* //////////////////////////////////////////////////////////////////////
 // Filter method
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 
 const deposits = movements.filter(function (mov) {
   return mov > 0;
  });
  console.log(movements);
  console.log(deposits);
  
  const withdrawals = movements.filter(mov => mov < 0);
  console.log(withdrawals);
  
  const depositsFor = [];
  for (const mov of movements) if (mov > 0) depositsFor.push(mov);
  console.log(depositsFor);
*/

/* //////////////////////////////////////////////////////////////////////
 // Reduce method
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 console.log(movements);
 
 const balance = movements.reduce(function (acc, mov, i) {
   console.log(`Iteration ${i} : ${acc}`);
   return acc + mov;
  }, 0);
  console.log(balance);
  
  const balanceArr = movements.reduce((acc, mov) => acc + mov, 0);
  console.log(balanceArr);
  
  let balanceFor = 0;
  for (const mov of movements) balanceFor += mov;
  console.log(balanceFor);
  
  // Maximum value
  const max = movements.reduce(function (acc, mov) {
    if (acc > mov) return acc;
    else return mov;
  }, movements[0]);
  console.log(max);
*/

/* ////////////////////////////////////////////////////////////////////
// Chaining methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const eurToUsd = 1.1;

const totalDepositUSD = movements
.filter(mov => mov > 0)
.map((mov, i, arr) => {
  console.log(arr);
  return mov * eurToUsd;
})
// .map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);
*/

/* /////////////////////////////////////////////////////////////////////
// Find method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const firstWithdraw = movements.find(mov => mov < 0);
console.log(firstWithdraw);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let accountFor = 0;
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') accountFor = acc;
}
console.log(accountFor);
*/

/* /////////////////////////////////////////////////////////////////////
// Some and Every method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

console.log(`--------SOME----------`);
// Equality
console.log(movements.includes(-130));
console.log(movements.some(mov => mov === -130));

// Condition
const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

console.log(`--------EVERY----------`);
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

console.log(`--------Seperate Callback----------`);
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/* /////////////////////////////////////////////////////////////////////
// Flat Method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
console.log(arr);

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// Flat and map seperately
const overallBalance = accounts
  .map(accs => accs.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Mapflat (Flat and map together)
const overallBalance2 = accounts
  .flatMap(accs => accs.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/

/* /////////////////////////////////////////////////////////////////////
// Sort Method
const str = ['a', 'd', 's', 'e', 'p', 'f'];
console.log(str);
console.log(str.sort());
console.log(str.reverse());

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Ascending
// return < 0, A,B (keep order)
// return > 0, B,A (switch order)
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// return > 0, A,B (keep order)
// return < 0, B,A (switch order)
movements.sort((a, b) => b - a);
console.log(movements);
*/

/* /////////////////////////////////////////////////////////////////////
// Creating and filling arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + Fill method
const x = new Array(7);
console.log(x);
console.log(x.fill(1, 3, 5)); // Like a slice method
console.log(x.fill(1));

// Array + Fill method
console.log(arr);
arr.fill(23, 2, 5);
console.log(arr);

// Array.from method
console.log(Array.from({ length: 7 }, () => 1));
console.log(Array.from({ length: 7 }, (_, i) => i + 1));

const randomDiceRolls100 = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 6 + 1)
);
console.log(randomDiceRolls100);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});
*/

/* //////////////////////////////////////////////////////////////////////
// Array methods practice
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);
console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, mov) => (mov >= 1000 ? count + 1 : count), 0);
  // .reduce((count, mov) => (mov >= 1000 ? count++ : count), 0);
  .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// Prefixed ++ Operator (Pre increment)
let a = 10;
console.log(++a);
console.log(a);
// Postfixed ++ operator (Post increment)
let b = 10;
console.log(b++);
console.log(b);

// 3.
const { deposits, withdraws } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, mov) => {
      // mov > 0 ? (sum.deposits += mov) : (sum.withdraws += mov);
      sum[mov > 0 ? 'deposits' : 'withdraws'] += mov;
      return sum;
    },
    { deposits: 0, withdraws: 0 }
  );
console.log(deposits, withdraws);

// 4.
const convertTitileCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTitileCase('this is a nice title'));
console.log(convertTitileCase('this is a LONG tiTle But not Too long'));
console.log(convertTitileCase('and here Is anOTHer title with An EXAMple'));
*/
