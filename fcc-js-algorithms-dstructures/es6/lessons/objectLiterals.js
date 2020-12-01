/**
 * Object Literal Declaration and Shorthand
 */

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

// can be written as

const getMousePosition = (x, y) => ({ x, y });

// Example

const createPerson = (name, age, gender) => {
  "use strict";
  return { name, age, gender };
};