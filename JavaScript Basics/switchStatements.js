/**
 * Switch statements
 */

function caseInSwitch(val) {
  var answer = "";

  switch(val) {
    case(1):
      answer = "alpha";
      break;
    case(2):
      answer = "beta";
      break;
    case(3):
      answer = "gamma";
      break;
    case(4):
      answer = "delta";
      break
  }

  return answer;
}

caseInSwitch(1);

// With a default

function switchOfStuff(val) {
  var answer = "";
  switch(val) {

    case("a"):
      answer = "apple";
      break;
    case("b"):
      answer = "bird";
      break;
    case("c"):
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  return answer;
}

switchOfStuff(1);

// Omitting a break from a case will cause each case to execute until a break is encountered.

function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case(1):
    case(2):
    case(3):
      answer = "Low";
      break;
    case(4):
    case(5):
    case(6):
      answer = "Mid";
      break;
    case(7):
    case(8):
    case(9):
      answer = "High";
      break;
  }

  return answer;
}

sequentialSizes(1);

// Converting if-else to switch
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

// Becomes ...

function chainToSwitch(val) {
  var answer = "";

  switch(val) {
    case("bob"):
      answer = "Marley";
      break;
    case(42):
      answer = "The Answer";
      break;
    case(1):
      answer = "There is no #1";
      break;
    case(99):
      answer = "Missed me by this much!";
      break;
    case(7):
      answer = "Ate Nine";
      break;
  }

  return answer;
}

chainToSwitch(7);
