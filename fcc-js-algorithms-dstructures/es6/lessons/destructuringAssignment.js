/**
 * Destructuring assignment
 */

// Used for neatly assigning variables taken directly from an object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// becomes...

const { today, tomorrow } = HIGH_TEMPERATURES;

// Destructuring also allows you to assign new variables when extracting values.

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// becomes...

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// With nested objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// becomes...

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST

// To assign variables from arrays

// Destructuring an array unpacks all of the contents into a comma separated list.
// You cannot pick/choose which elements you want to assign to variables.

// Example
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

// Example
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

// Swap a and b using destructuring.
let a = 8, b = 6;

[a, b] = [b, a];

// Performing an effective Array.prototype.slice();

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list; // a and b are assigned 1, 2.  The rest of the list is stored in arr.
  return arr;
}

const arr = removeFirstTwo(source);

// In some cases, you can destructure the object in the function argument.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (stats) => (stats.max + stats.min) / 2.0; 

// becomes...
const half = ({ max, min }) => (max + min) / 2.0;