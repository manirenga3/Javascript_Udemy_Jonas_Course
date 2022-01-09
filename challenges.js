// Challenge #1
let massMark, massJohn, heightMark, heightJohn;

// Test data 1
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

const BMIMarkData1 = massMark / heightMark ** 2;
console.log(BMIMarkData1);
const BMIJohnData1 = massJohn / (heightJohn * heightJohn);
console.log(BMIJohnData1);

const markHigherBMIData1 = BMIMarkData1 > BMIJohnData1;
console.log(markHigherBMIData1);

// Test data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

const BMIMarkData2 = massMark / (heightMark * heightMark);
console.log(BMIMarkData2);
const BMIJohnData2 = massJohn / heightJohn ** 2;
console.log(BMIJohnData2);

const markHigherBMIData2 = BMIMarkData2 > BMIJohnData2;
console.log(markHigherBMIData2);

// //////////////////////////////////////////////////////////////////////
// Challenge #2
// Test Data 1
if (BMIMarkData1 > BMIJohnData1) {
  console.log(`Marks's BMI is higher than John's!`);
  console.log(
    `Marks's BMI (${BMIMarkData1}) is higher than John's (${BMIJohnData1})!`
  );
} else {
  console.log(`John's BMI is higher than Mark's!`);
  console.log(
    `John's BMI (${BMIJohnData1}) is higher than Mark's (${BMIMarkData1})!`
  );
}

// Test Data 2
if (BMIMarkData2 > BMIJohnData2) {
  console.log(`Marks's BMI is higher than John's!`);
  console.log(
    `Marks's BMI (${BMIMarkData2}) is higher than John's (${BMIJohnData2})!`
  );
} else {
  console.log(`John's BMI is higher than Mark's!`);
  console.log(
    `John's BMI (${BMIJohnData2}) is higher than Mark's (${BMIMarkData2})!`
  );
}

// //////////////////////////////////////////////////////////////////////
// Challenge #3
// Data 1
let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;
let dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;
let koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(dolphinsAvg, koalasAvg);
if (dolphinsAvg === koalasAvg) {
  console.log("Result is draw");
} else if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins is winner");
} else {
  console.log("Koalas is winner");
}
// Bonus 1
dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123;
dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(dolphinsAvg, koalasAvg);
const minScore = 100;
if (dolphinsAvg > koalasAvg && dolphinsAvg >= minScore) {
  console.log("Dolphins is winner");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= minScore) {
  console.log("Koalas is winner");
} else if (dolphinsAvg === koalasAvg) {
  console.log("Result is draw");
} else {
  console.log("No winner");
}
// Bonus 3
dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 106;
dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(dolphinsAvg, koalasAvg);
if (dolphinsAvg > koalasAvg && dolphinsAvg >= minScore) {
  console.log("Dolphins is winner");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= minScore) {
  console.log("Koalas is winner");
} else if (
  dolphinsAvg === koalasAvg &&
  dolphinsAvg >= minScore &&
  koalasAvg >= minScore
) {
  console.log("Result is draw");
} else {
  console.log("No winner");
}

// /////////////////////////////////////////////////////////////////////
// Challenge #4
// Data 1
const bill_1 = 275;
let tip_1;
bill_1 >= 50 && bill_1 <= 300
  ? (tip_1 = bill_1 * 0.15)
  : (tip_1 = bill_1 * 0.2);
console.log(
  `The bill was ${bill_1}, the tip was ${tip_1}, and the total value ${
    bill_1 + tip_1
  }`
);
// Data 2
const bill_2 = 40;
let tip_2;
bill_2 >= 50 && bill_2 <= 300
  ? (tip_2 = bill_2 * 0.15)
  : (tip_2 = bill_2 * 0.2);
console.log(
  `The bill was ${bill_2}, the tip was ${tip_2}, and the total value ${
    bill_2 + tip_2
  }`
);
// Data 3
const bill_3 = 430;
let tip_3;
bill_3 >= 50 && bill_3 <= 300
  ? (tip_3 = bill_3 * 0.15)
  : (tip_3 = bill_3 * 0.2);
console.log(
  `The bill was ${bill_3}, the tip was ${tip_3}, and the total value ${
    bill_3 + tip_3
  }`
);
