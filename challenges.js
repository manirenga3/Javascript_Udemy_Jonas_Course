'use strict';

/* //////////////////////////////////////////////////////////////////////
// Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Task 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
// Task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
// Task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// Task 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// Task 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1);
console.log(draw);
console.log(team2);
// Task 6
const printGoals = function (...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    console.log(`${playerNames[i]} scored a goal`);
  }
  console.log(`Number of goals scored : ${playerNames.length}`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// Task 7
team1 < team2 && console.log('Team 1 is likely to win');
team2 < team1 && console.log('Team 2 is likely to win');

/////////////////////////////////////////////////////////////////////////
// Challenge #2
// Task 1
for (const [goalNumber, playerName] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1} : ${playerName}`);
}
// Task 2
const oddValues = Object.values(game.odds);
let average = 0;
for (const x of oddValues) {
  average += x;
}
average /= oddValues.length;
console.log(`Average of odds : ${average}`);
// Task 3
for (const [team, values] of Object.entries(game.odds)) {
  let teamStr = team === 'x' ? 'draw :' : `victory ${game[team]} :`;
  console.log(`Odd of ${teamStr} ${values}`);
}
// Bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

/* /////////////////////////////////////////////////////////////////////
// Challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// Task 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2
gameEvents.delete(64);

// Task 3
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened on average, every ${time / gameEvents.size} minutes`
);

// Task 4
for (const [min, event] of gameEvents) {
  let str = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${str} HALF] ${min} : ${event}`);
}
*/

/* //////////////////////////////////////////////////////////////////////
// Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const singleText = text.split('\n');
  for (const [i, item] of singleText.entries()) {
    if (item.includes('_')) {
      const [first, last] = item.toLowerCase().trim().split('_');
      const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
      console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
  }
});

// Input data to this challenge
// THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/
