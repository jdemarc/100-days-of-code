/*

Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

Now create a getter and a setter in the class, to obtain the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32,
where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.

*/

// Only change code below this line
class Thermostat {
  constructor(temperature) {
    this._temperature = temperature;
  }

  get temperature() {
    return (5/9 * (this._temperature - 32));
  }

  set temperature(updatedTemp) {
    this._temperature = updatedTemp * 9.0 / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale

// Instantiates the object thermos with a temperature of 76.
// It is converted to Celsius on instantiation.

let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// Underscores are used to denote private variables. But it is just a convention.