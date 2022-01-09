// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const calcAge = birthYear => 2021 - birthYear;

console.log(calcAge(1996));

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcAmp = function (arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const tempAmplitude = calcAmp(temperatures);
console.log(tempAmplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcAmpNew = function (a1, a2) {
  const arr = a1.concat(a2);
  console.log(arr);

  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const tempAmplitudeNew = calcAmpNew([14, 2, 4, -4], [-6, -7, 23, 7]);
console.log(tempAmplitudeNew);

///////////////////////////////////////
// Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C] Fix
    // value: Number(prompt('Enter celsius:')),
    value: 10,
  };

  // B] Find
  console.table(measurement);

  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A] Identify
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

/* //////////////////////////////////////////////////////////////////////
// Coding challenge #1
// 1) Understanding the problem
// - Array transformed to strings & seperated by three dots
// - What is X days?

// 2) Breaking up into sub-problems
// - Transform array to string
// - Strings needs to contains day and three dots

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = `... `;

  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  return forecast;
};
console.log(printForecast(data1));
console.log(printForecast(data2));
*/
