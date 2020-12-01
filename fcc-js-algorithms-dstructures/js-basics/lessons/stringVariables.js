/**
 * Declare String variables.
 */

 var myString = 'my string';

 // Escaping quotations, single or double, with a backslash.
 var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

 var singleQuotedString = 'one string';
 var doubleQuotedString = "two string";

 // Using both, no backslash needed.
 var conversation = 'Finn exclaims to Jake, "Algebraic!"';

 var myLinkStr = '<a href="http://www.example.com" target="_blank">Link</a>';

 // Escaping other things.
 // Newline, tab, backslash, newline
 var myEscapedStr = "FirstLine\n\t\\SecondLine\nThirdLine"

 // Concatenation
 var concatted = "This is the start. " + "This is the end."

 var anotherConcattedStr = "This is the first sentence. ";
 anotherConcattedStr += "This is the second sentence.";

 // Using variables.
 var myName = "Joseph";
 var myStr = "My name is " + myName + " and I am well!";

 var someAdjective = "wet";
 var myStr = "Learning to code is ";

 myStr += someAdjective;
 // Learning to code is wet.

 // Find the length of a string using the .length property.
 var firstName = "Joseph";
 var strLength = 0;

 strLength = firstName.length; // assigns 6

 // Use bracket notation to find the character at a given index of a string.
 var firstLetter = firstName[0]; // assigns 'J'

 // Strings are IMMUTABLE.
 // var myStr = "Bob";
 // myStr[0] = "J";
 // does not work!

 // instead,
 var myString = "Bob";
 myString = "Job";

 // Find another letter using bracket notation.
 var thirdLetter = firstName[2]; // assigns 's'

// Find the last letter using bracket notation
 var lastLetter = firstName[firstName.length-1]; // assigns 'h'

 // Second to last letter...
 var secondToLastLetter = firstName[firstName.length-2]; // assigns 'p'

 // Building bigger sentences.
 var myNoun = "dog";
 var myAdjective = "big";
 var myVerb = "ran";
 var myAdverb = "quickly";

 // Only change code below this line
 var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " very " + myAdverb;