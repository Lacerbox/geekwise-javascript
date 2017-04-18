#  Day01 Homework Answers
1. In assignment.html, create boilerplate & link assignment.js.
2. Ask for first name, last name, age, & a place.
3. Ask user if place is correct.
4. Create a popup messaging first & last name combined.
5. Log age.

var fN, lN, age, pL;

confirm('You said your favorite place was ' + place + '. Is that correct');

__________________________________________________

# Day02 Homework
1. Create a random number generator outputting a number between 1 - 100  // Math.floor((Math.random() * 100) + 1);
2. Create a random number generator outputting a number between 0 - 100  // Math.floor(Math.random() * 101);
3. Prompt user for their first AND last name
   Convert user response to modify string formatting capitalize first letter of both names, and lowercase all remaining letters
   example: user input -> MattHeW hiGlEY
   console: Matthew Higley

__________________________________________________

<html>
  <body>

  <p id="demo"></p>

  <script>
  var str = "lOuIs cERbo";
  var text = "";
  var i;
  for (i = 0; i < str.length; i++) {
     text += str[i];
  }
  document.getElementById("demo").innerHTML = text;
  </script>

  </body>
</html>

__________________________________________________


// FUNCTION TO CAPITALIZE THE FIRST LETTER OF EACH WORD IN A STRING
function titleCase(str) {
  words = str.toLowerCase().split(' ');     // Converts the string to lower case and splits it into an array of substrings

  for(var i = 0; i < words.length; i++) {   // Loops the number of words in the array using str.length
    var letters = words[i].split('');       // Loops throuch each word and splits it into an array of letters
    letters[0] = letters[0].toUpperCase();  // Converts the first letter of each word to uppercase
    words[i] = letters.join('');            // Converts the array of letters back into a string of words
  }
  return words.join(' ');                   // Converts the array of words back into a string of words separated by spaces
}
titleCase("I'm a little tea pot");

__________________________________________________


// FUNCTION TO CAPITALIZE THE FIRST LETTER OF EACH WORD IN A STRING
function namesToTitleCase(aString) {
  var stringToLowerCase = aString.toLowerCase();         // CONVERTS THE STRING TO LOWER CASE
  var stringToArray = stringToLowerCase.split(' ');      // CONVERTS THE STRING TO AN ARRAY

  for(var i = 0 ; i < stringToArray.length ; i++) {      // LOOPS FOR THE NUMBER OF WORDS IN THE ARRAY USING '.length'
    var wordsToLetters = stringToArray[i].split('');     // CONVERTS EACH WORD ARRAY INTO AN ARRAY OF LETTERS
    wordsToLetters[0] = wordsToLetters[0].toUpperCase(); // CONVERTS THE FIRST LETTER OF EACH WORD TO UPPER CASE
    var lettersBackToWords = wordsToLetters.join('');    // CONVERTS THE ARRAY OF LETTERS BACK INTO A STRING FOR EACH WORD
    stringToArray[i] = lettersBackToWords;               // COPIES EACH WORD BACK INTO THE ORIGINAL "stringToArray" ON EACH LOOP
    var arrayBackToString = stringToArray.join(' ');     // CONVERTS THE ARRAY BACK TO A STRING SEPARATING EACH WORD WITH A SPACE
  }
  return arrayBackToString;                              // RETURNS THE NEW 'TITLE CASE' STRING
}
console.log(namesToTitleCase('heRMaN cREepY mUNstER tHE fIRsT'));


__________________________________________________


function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
var newStr = toTitleCase("lOUiS ceRbO");
console.log(newStr);

__________________________________________________
