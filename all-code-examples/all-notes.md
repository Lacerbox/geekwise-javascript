Add-Ons for Atom

atom-live-server
autoclose-html
highlight-selected
pigments

Ctrl / = Comment
! + tab in Atom

Ctrl Alt 3 in Atom to do something in browser (Firefox needs to be default)

https://www.mozilla.org/en-US/firefox/54.0a2/firstrun/ to get Firefox Developers Edition

Ctrl R to refresh Firefox
__________________________________________________

#  Day01 Homework & Answers
1. In assignment.html, create boilerplate & link assignment.js.
2. Ask for first name, last name, age, & a place.
3. Ask user if place is correct.
4. Create a popup messaging first & last name combined.
5. Log age.

var fN, lN, age, pL;

confirm('You said your favorite place was ' + place + '. Is that correct');

SEE: 'name-age-place'

__________________________________________________

# Day02 Homework & Answers
1. Create a random number generator outputting a number between 1 - 100  // Math.floor((Math.random() * 100) + 1);
2. Create a random number generator outputting a number between 0 - 100  // Math.floor(Math.random() * 101);
3. Prompt user for their first AND last name
   Convert user response to modify string formatting capitalize first letter of both names, and lowercase all remaining letters
   example: user input -> MattHeW hiGlEY
   console: Matthew Higley

SEE: 'capitalize-first-last'

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

# Day04 Assignment

1. Use array of images
2. Find random number between 1-20
3. Output the corresponding image for the random number

var images = [
'http://planetoftheweb.com/i/8ball/19.png',
'http://planetoftheweb.com/i/8ball/18.png',
'http://planetoftheweb.com/i/8ball/17.png',
'http://planetoftheweb.com/i/8ball/16.png',
'http://planetoftheweb.com/i/8ball/15.png',
'http://planetoftheweb.com/i/8ball/14.png',
'http://planetoftheweb.com/i/8ball/13.png',
'http://planetoftheweb.com/i/8ball/12.png',
'http://planetoftheweb.com/i/8ball/11.png',
'http://planetoftheweb.com/i/8ball/10.png',
'http://planetoftheweb.com/i/8ball/9.png',
'http://planetoftheweb.com/i/8ball/8.png',
'http://planetoftheweb.com/i/8ball/7.png',
'http://planetoftheweb.com/i/8ball/6.png',
'http://planetoftheweb.com/i/8ball/5.png',
'http://planetoftheweb.com/i/8ball/4.png',
'http://planetoftheweb.com/i/8ball/3.png',
'http://planetoftheweb.com/i/8ball/2.png',
'http://planetoftheweb.com/i/8ball/1.png',
'http://planetoftheweb.com/i/8ball/0.png'
];

SEE: 'magic-8-ball'

__________________________________________________


// in 'Elements' in Chrome, click arrow on far left and then click on the image

# Day04 Assignment

1. Using everything that we've learned up to this point, and putting a heavy emphasis on if statements,
   it's time to create your Choose Your Own Adventure interactive website.
2. Pick any topic you prefer, but make it fun!
3. Try and incorporate the use of a loop if you can.
4. Your page must utilize user submitted questions or responses through confirms or prompts.
5. The story must branch off in at least two different directions based on user inputs.

SEE: 'freds-haunted-mansion'
