// Alert
//alert('Here is my alert!');

// Prompt
//var name = prompt('What is your name?');

// Confirm
//confirm('Your name is ' + name);

__________________________________________________

// String Methods

// .length method
console.log("anystring".length);

var str = "AnotherStringThisOneVeryLong"
console.log(str.length);

// .charAt
console.log(str.charAt());
console.log(str.charAt(8));
console.log(str.charAt(250));

// .indexOf
console.log(str.indexOf('t'));
console.log(str.indexOf('T'));

// .concat
var hello = 'Hello';
console.log(hello.concat(' JavaScript'));
console.log(hello + ' JavaScript'));

// .substring
var myName = 'Stephen';
console.log(myName.substring(0, 3));
console.log(myName.substring(3, 6));
console.log(myName.substring(3));

// .substr
var myHome = 'FresnoYeah';
console.log(myName.substring(0, 3)); // where it starts and how much to print
console.log(myName.substring(3, 2));
console.log(myName.substring(3));

// .toLowerCase()
var myDog = 'Allie';
console.log(myDog.toLowerCase());

// .toUpperCase()
myDog = 'Callie';
console.log(myDog.toUpperCase());

// .trim
var extraSpaces = '     stuff and things          '; // works
var extraSpaces = '     stuff      and things          '; // leaves space between 'stuff      and things'
console.log(extraSpaces);
console.log(extraSpaces.trim()); // removes white space from beginning and end of string

__________________________________________________

// Number Methods

// Number.isInteger()
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.5));
console.log(Number.isInteger(NaN));

// Number.parseFloat()
console.log(Number.parseFloat('5.2'));
console.log(Number.parseFloat('365.1 degrees'));
console.log(Number.parseFloat('Lex Murphy is 11'));

// Number.parseInt()
console.log(Number.parseInt('89'));
console.log(Number.parseInt('words words'));
console.log(parseInt('word'));

var userNum = prompt('pick a number');
console.log(typeof userNum);
var userNum = parseNum(('pick a number')); // parseNum ???
var userNum = parseInt(('pick a number')); // correct
console.log(typeof userNum);

// Number.isNaN()
console.log(Number.isNaN(5)); // false
console.log(Number.isNaN('matt')); // false but should be true
console.log(isNaN('matt')); // true
console.log(Number.isNaN(NaN)); // true
console.log(isNaN(NaN)); // true but should be false

var userNum = parseInt(prompt('pick a number'));
console.log(Number.isNaN(userNum)); // true or false?
console.log(!Number.isNaN(userNum)); // (IS NOT NOT A NUMBER) true or false?

__________________________________________________

// Date Object
var newDate = new Date();
console.log(newDate);

// getdate()
console.log(newDate.getdate()); // day of month

// getFullYear()
console.log(newDate.getFullYear()); // year

// getDay() // day of the week !!zwro based!!
console.log(newDate.getDay());

// getMonth() // month of theyeay !!zwro based!!
console.log(newDate.getMonth());

if (newDate.getDay() == 3) {
  console.log('April');
}

var fullMonth = newDate.toLocaleString('en-us', {month: 'long'})
console.log(fullMonth);
var fullMonth = newDate.toLocaleString('en-us', {month: 'short'})
console.log(fullMonth);

__________________________________________________

// Math Object

/*
% = Modulus (for checking if 'Odd' or 'Even')

*/
console.log(7 % 5); // = 2

var rand = Math.random(); // between 0 and 1
var rand = Math.random() * 100;

var roundUp = Math.ceil(8.3); // between 0 and 1
var roundDown = Math.floor(9.9); // between 0 and 1
var roundNum = Math.round(4.999999999); // between 0 and 1

// max(), min()
// pow(x, y)
// sqrt(x)

__________________________________________________
