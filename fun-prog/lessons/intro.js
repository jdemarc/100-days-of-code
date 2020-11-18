/**
 * Functional Programming
 * 
 */

// 1. isolated functions: no dependency on state of the program or globals
// 2. pure functions: same input gives same output
// 3. limited side effects: changes/mutations of state are carefully controlled

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

// console.log(tea4TeamFCC);