/**
 * Find One or More Criminals in a Hunt
 */

/*

A group of criminals escaped from jail and ran away, but you don't know how many.
However, you do know that they stay close together when they are around other people.
You are responsible for finding all of the criminals at once.

Write a greedy regex that finds one or more criminals within a group of other people.
A criminal is represented by the capital letter C.

*/

let reCriminals = /C+/g;

let testOne = "C";
let testTwo = "CC";
let testThree = "P6P2P7P4P5CCCCCP3P1";
let testFour = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3";

let resOne = testOne.match(reCriminals);
let resTwo = testTwo.match(reCriminals);
let resThree = testThree.match(reCriminals);
let resFour = testFour.match(reCriminals);

console.log(resOne);
console.log(resTwo);
console.log(resThree);
console.log(resFour);