// FUNCTIONS

// Named Function Declaration (A function with a name)
function myName() {
  console.log('Cool');
}
myName();

// Anonymous Function (A function without a name. You won't use code like this on it's own.
// It however is a piece of code written for a function expression.)
function() {
  console.log('Cool');
}


// Function Expression
// A function expression is very similar to and has almost the same syntax as a function statement.
// The main difference between a function expression and a function statement is the function name,
// which can be omitted in function expressions to create anonymous functions.
// Note: You cannot self-invoke a function declaration.
var myName = function() {
  console.log('Cool');
};
myName(); // <- invoked when called (Calls The Function)

var myName = function() {
  console.log('Cool');
}(); // <- invoked immediately (Calls The Function Immediately)


// Immediately Invoked Function Expression (IIFE)
// An IIFE (/ˈɪfi/) is a function that is called directly after the function is loaded into the browser’s compiler.
// The way to identify an IIFE is by locating the extra left and right parenthesis at the end of the function’s declaration.
(function myName() {
  console.log('Immediate');
}());

(function() {
    // code block
}()); // <- invoked immediately


//____________________________________________________


// Parameters
// Function parameters are names listed in the function declaration. Think of parameters as being variables that only exist
// within the function. They don't need to be declared with the var keyword. They're placeholders for the arguments being passed in.
// function functionName(parameter1, parameter2, parameter3) {}
function myName(x) { // 'x' Is A Placeholder
  console.log('Cool');
}
// Arguments
// Function arguments are the real values being passing into the function.
// When something is passed into the function, it is then being referenced by the parameter (or variable).
myName('Louis');


function myName(first, last) { // Parameters
  console.log(first + ' ' + last);
}
myName('Louis', 'Cerbo'); // Arguments


function myName(a) { // Parameters
  console.log(a * 5);
}
myName(2); // Arguments


// Arguments Object
// Function expressions have a unique ability of accepting an unlimited number of arguments.
// The function declaration must have all parameters pre-defined.
var myName = function() {
    console.log(arguments); // <- HTMLCollection
};
myName('Matthew', 'David', 'Higley', 'Larry', 'Moe', 'Curly', 'Shemp');


var myName = function() {
  console.log(arguments[0] + ' ' + arguments[3]);
  //for(let i = 0; i < arguments; i++) {
    //console.log(arguments[i]);
  //}
  for(args in arguments) {
    console.log(arguments[args]);
  }
};
myName('Louis', false, ['red', 'green', 'blue'], 'Cerbo', 23, true);


// Return Statement
// The return statement ends function execution and specifies a value to be returned to the function caller.
var myName = getName();
function getName() {
  return 'Louis';
}
console.log(myName);

// Call getName passing in a string & return string back
var myName = getName('Cerbo');
function getName(last) {
  return 'Louis ' + last;
}
console.log(myName);

// Here are a more complicated, yet useful examples:
var firstName = getUserName('first'),
    lastName = getUserName('last');

function getUserName(name) {
    var name = prompt('what is your '+ name +' name?');
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    return name;
}
console.log(firstName, lastName);


// CAN USE prompt('City');
// CAN USE prompt('State');
var userCity = 'Fresno', userState = 'CA';

function setBirthPlace(city, state) {
  return city + ' ' + state;
}
console.log(setBirthPlace(userCity, userState));


var userName = modUserName(prompt('Name'));
var lastName = modUserName(prompt('Last'));

function modUserName(name) {
  return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()
}
console.log(userName + ' ' + lastName);


//____________________________________________________


// Targeting DOM Elements

// .getElementById();
// Returns a reference to the element by its ID; the ID is a string which
// can be used to uniquely identify the element, found in the HTML id attribute.
var btn = document.getElementById('myBtn'); //.value;

// .getElementsByTagName();
// Returns an array-like object (HTMLCollection) of elements with the given tag name.
var links = document.getElementsByTagName('a');

// .getElementsByClassName();
// Returns an array-like object (HTMLCollection) of all child elements which have all of the given class names.
var dropdownLinks = document.getElementsByClassName('dropdown');

// .querySelector();
// Returns the first Element within the document that matches the specified selector,
// or group of selectors. Use of . for classes and # for ID's apply.
// Note: Be cautioned that this selector is for targeting a single item.
// If multiple exist, it will only return the first of the items.
var turkey = document.querySelector('#turkey');
var oneLink = document.querySelector('ul li:last-child a');
var oneLink = document.querySelector('ul li:last-child li:first-child a');

// .querySelectorAll();
// Returns a list (NodeList) of the elements within the document that match the specified group of selectors.
// Use of . for classes and # for ID's apply.
var allDropdowns = document.querySelectorAll('.dropdown');
var allSubLinks = document.querySelectorAll('ul li li a');

//console.log(oneLink);
//console.log(allDropdowns);
//console.log(allSubLinks);


//____________________________________________________


// Event Listeners

// Click (Event occurs on a complete action of left clicking and releasing)
var btn = document.querySelector('#myBtn');

btn.addEventListener('click', function() {
  btn.style.backgroundColor = 'red';
});

// mousedown (Event occurs at the moment the left click is pressed)
btn.addEventListener('mousedown', function() {
  btn.style.backgroundColor = 'green';
});

// mouseup (Event occurs at the moment the left click is released)
btn.addEventListener('mouseup', function() {
  btn.style.backgroundColor = 'blue';
});

// mousemove (Event occurs anytime the mouse is moved)
window.addEventListener('mousemove', function(e) {
  console.log(e);
  console.clear();
  console.log(e.screenX + ':' + e.screenY);
});

// mouseenter (Event occurs when the cursor enters the targeted element)
var btn = document.querySelector('#myBtn');

btn.addEventListener('mouseenter', function(){
    btn.style.fontSize = '2em';
    btn.style.color = 'white';
    btn.style.backgroundColor = 'black';
});

// mouseleave (Event occurs when the cursor leaves the targeted element)
btn.addEventListener('mouseleave', function(){
    btn.style.fontSize = '1em';
    btn.style.color = 'black';
    btn.style.backgroundColor = 'gray';
});

// scroll (Event occurs when the user scrolls the page, either up or down. Does not
// fire automatically when the scroll wheel is spun. Only if the page scrolls.)
window.addEventListener('scroll', function(e){
    console.log(e);
});

// keypress (Event occurs on the complete action pressing and releasing any key)
// Note: Chrome and older versions of IE do not regiser arrow key presses
// with the keypress event. You'll have to use keydown for those browsers.
window.addEventListener('keypress', function(e) {
    console.log(e);
});

// keydown (Event occurs at the moment any key is pressed)
window.addEventListener('keydown', function(e){
    console.log(e);
});

// keyup (Event occurs at the moment any key is released)
window.addEventListener('keyup', function(e){
    console.log(e);
});


//____________________________________________________

// My Shit
function start() {
  chk = document.getElementById("toJav").value;

  /*if (chk.toUpperCase() === yes.toUpperCase() || chk.toUpperCase() === y.toUpperCase()) {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
    window.setTimeout(function() {
        window.location.replace("mansion-outside.html");
    }, 500);
    window.setTimeout();
  }
  else if (chk.toUpperCase() === no.toUpperCase() || chk.toUpperCase() === n.toUpperCase()) {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
    window.setTimeout(function() {
        window.location.replace("going-anyway.html");
    }, 500);
    window.setTimeout();
  }
  else if (chk == '') {
    ans = 'Hey, if you don\'t enter something, somebody\'s gonna get hurt!';
  }
  else {
    ans = 'Well, either you spelled it wrong, or you\'re just plain Stupid! Try again!';
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
  }

  document.getElementById("fromJav").innerHTML = ans;
}*/
