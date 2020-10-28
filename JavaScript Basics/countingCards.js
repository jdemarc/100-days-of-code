/**
 * Counting Cards
 */

/**
 * You will write a card counting function.
 * It will receive a card parameter, which can be a number or a string,
 * and increment or decrement the global count variable according to the card's value (see table).
 * The function will then return a string with the current count and the string Bet
 *  if the count is positive, or Hold if the count is zero or negative.
 * The current count and the player's decision (Bet or Hold) should be separated by a single space.
 * 
 * Example output
 * -3 Hold
 * 5 Bet
 * 
 * Do NOT reset count to 0 when value is 7, 8, or 9.
 * Do NOT return an array.
 * Do NOT include quotes (single or double) in the output.
 */

 /**
  * Table
  * Count Change  	Cards
  *   +1	            2, 3, 4, 5, 6
  *    0	            7, 8, 9
  *   -1	            10, 'J', 'Q', 'K', 'A'
  */

var count = 0;
function countingCards(card) {
  var bet = '';

  switch(card) {
    case(2):
    case(3):
    case(4):
    case(5):
    case(6):
      count++;
      break;
    case(7):
    case(8):
    case(9):
      break;
    case(10):
    case('J'):
    case('Q'):
    case('K'):
    case('A'):
      count--;
  }

  if (count > 0) {
    bet = "Bet";
  } else {
    bet = "Hold";
  }

  return count + " " + bet;
}

// countingCards(2);
// countingCards(3);
// countingCards(7);
// countingCards('K');
// countingCards('A');

// A better solution.
var count = 0;
function cc(card) {
  var regex = /[JQKA]/;

  if (card > 1 && card < 7) {
    count ++;
  } else if (card === 10 || regex.test(card)) {
    count --;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

// Notes: The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.