// ternary statements
/*var age = prompt('How old are you?');

var movieRestriction = age >= 18 ?
  console.log('Old Enough') :
  console.log('Too Young');

// same as
if(age >= 18) {
  console.log('Old Enough')
}
else {
  console.log('Too Young')
}*/


// another exercise
/*var age = prompt('How old are you?');

var url = age >= 18 ?
  (
    alert('Ok, you may proceed'),
    'proceed.html'
  ) :
  (
    alert('Sorry, not old enough'),
    'stop.html'
  );

window.location.assign(url);*/

//______________________________

// switch statements
/*var today = new Date().getDay();

switch(today) {
  case 0:
    console.log('sun');
    break;
  case 1:
    console.log('m');
    break;
  case 2:
    console.log('tu');
    break;
  case 3:
    console.log('w');
    break;
  case 4:
    console.log('th');
    break;
  case 5:
    console.log('f');
    break;
  case 6:
    console.log('sat');
    break;
}*/

/*var today = new Date().getDay();

switch(today) {
  case 0:
  case 6:
    console.log('Happy Weekend');
    break;

  default:
    console.log('Not Whatever');
}*/

//______________________________

//
//.trim(); // GETS RID OF BEFORE & AFTER SPACE

// cluttering the global namespace. BAD!
var coffee = 'Dutch Bros';

function myCoffee() {
  var coffee = 'Starbucks'; // ONLY CAN USE IN THIS FUNCTION
  console.log(coffee);

  coffee = 'Peets';
  console.log(coffee);

  otherCoffee = 'Dunkin';
}
myCoffee();

console.log(coffee);
console.log(otherCoffee);

// Use 'let' Instead 'var' In 'for' Loops Because Then 'i' Can't Be Accessed Globally

// 'var' is function scope
// 'let' is block scope
// 'const' cannot be changed

// 'Variable Hoisting' LIFTS VAR TO TOP

//______________________________

var today = new Date().getDay();

switch(today) {
  case 'mr':
  case 'mr.':
  case 'mister':
    // STUFF
  break;
  case 'mrs':
  case 'mrs.':
  case 'ms':
  case 'missus':
    // STUFF
  break;
}
