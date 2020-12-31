/**
 * Map the Debris
 * 
 * Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
 * 
 * The values should be rounded to the nearest whole number.
 * The body being orbited is Earth.
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */

function orbitalPeriod(arr) {

  // T = 2 * PI * sqrt((a + earthRadius)^3 / GM);

  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let a = 2 * Math.PI;
  let newArr = [];

  const getOrbPeriod = function(object) {
    let b = Math.pow(object.avgAlt + earthRadius, 3);
    let c = Math.sqrt(b / GM);
    let orb = Math.round(a * c);

    return {name: object.name, orbitalPeriod: orb};
  }

  for (let el in arr) {
    newArr.push(getOrbPeriod(arr[el]));
  }

  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));

