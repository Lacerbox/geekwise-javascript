/*
var meObj = {
  firstname: 'Louis',
  lastname: 'Cerbo',
  hair: 'white',
  eyes: 'brown',
  height: 5.8,
  talk: function(msg){
    alert('Hello, my name is ' + this.firstname + ', and my eyes are ' + this.eyes);
    console.log(this);
    console.log('Hello, my name is ' + this.firstname + ', and my eyes are ' + this.eyes);
  }
};
meObj.talk();

meObj.firstname = 'Herman';
meObj.eyes = 'green';

meObj.talk();

// Object Constructor
function Person(first, last, age, eyes) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyes = eyes;
  this.talk = function(salutation){
    alert(salutation + this.firstname + ', from ' + this.firstname);
  }
};

// var today = new Date();
var fred = new Person('Fred', 'Flintstone', 55, 'Blue');
console.log(fred);
myFather.userage = 57;
console.log(fred);

var myFather = new Person('Fred', 'Flintstone', 55, 'Blue');
console.log(myFather);
myFather.userage = 57;
console.log(myFather);

var myMother = new Person('Wilma', 'Flintstone', 49, 'Blue');
console.log(myMother);
myMother.userage = 50;
console.log(myMother);
*/

//__________________________________________________________________


localStorage.setItem('user', 'Fred Flintstone');
//localStorage.setItem('user', 'Louis Cerbo');
//localStorage.removeItem('user');
if(localStorage.getItem('user') === 'Louis Cerbo') {
  document.body.style.backgroundColor = 'green';
}

//sessionStorage.setItem('password', '12345')

var userArr = [];

if(localStorage.getItem('users')) { // IF TRUE DO, IF FALSE SKIP
  userArr = JSON.parse(localStorage.getItem('users'));
  outputUsers();
}

// Listen for a 'New User' click
var newUser = document.querySelector('nav button');
var newUserForm = document.querySelector('nav form');

/*newUser.addEventListener('click', function(){
  newUserForm.classList.toggle('hidden'); // DONE WITH CSS
  //newUserForm.style.display('none'); // DONE WITH JS
  newUserForm.reset();
});*/

var hoverIntent;
newUser.addEventListener('mouseenter', function(){
  hoverIntent = setTimeout(function(){
    newUserForm.classList.remove('hidden'); // DONE WITH CSS
  //newUserForm.style.display('none'); // DONE WITH JS
  //newUserForm.reset();
}, 500);
});

newUser.addEventListener('mouseleave', function(){
  clearTimeout(hoverIntent);
  if(newUserForm.classList.contains('hidden')){
  newUserForm.classList.add('hidden'); // DONE WITH CSS
  }
  //newUserForm.style.display('none'); // DONE WITH JS
  //newUserForm.reset();
});

/**
*   Listen for a 'Create User' click
**/
var newUserBtn = document.querySelector('nav form input[type="submit"]')

newUserBtn.addEventListener('click', function(e){
  e.preventDefault();
  //console.log(newUserForm.elements);
  //console.log(newUserForm.children);
  //var f = newUserForm.elements;
  //console.log(new UserObj(f[0].value, f[1].value, f[2].value));
  genUser(newUserForm.elements); // 'children' ASLO WORKS ('elements' Is Better)
  newUserForm.classList.toggle('hidden');
  newUserForm.reset();
});

// User Object Constructor
function UserObj(fn, ln, un, av) {
  this.firstname = fn;
  this.lastname = ln;
  this.username = un;
  this.avatar = av;
}

function genUser(f) { // 'f' IS FOR FORM
  userArr.push(new UserObj(f[0].value, f[1].value, f[2].value, genAvatar()));
  console.log(userArr);
  outputUsers();
  localStorage.setItem('user', JSON.stringify(userArr)); // JSON.stringify();
}

function genAvatar() {
  // GRID 4 x 4 = TOTAL OF 16 BLOCKS
  var avatarBox = document.createElement('ul'); // TO CREATE 'UL's'
  var randColor = Math.floor(Math.random() * 360) // FOR 360 COLOR POSSIBILITIES
  for(let i = 0; i < 16; i++) {
    var avatarBlok = document.createElement('li'); // TO CREATE 16 'LI's' INSIDE THE 'UL's'
    avatarBlok.style.backgroundColor = 'white'; //getRandomColor();

    if(Math.floor(Math.random() * 2) === 1) { // IF 1 RUN, IF 0 SKIP - Math.floor(Math.random() * 2) RETURNS 0 OR 1
      avatarBlok.style.backgroundColor = `hsl(${randColor}, 50%, 50%)`; //getRandomColor(); // ROUND DOWN TO 1 OR 0, IF 1 RETURN GREEN
    }                                 // 'hsl('+randColor+', 50%, 50%)'; // DOES SAME AS ABOVE
    avatarBox.append(avatarBlok);
  }
  return avatarBox.outerHTML; // RETURNS ENTIRE UL
}

// Output 'userArr'
function outputUsers() {
  var userProfiles = document.getElementById('userProfiles');
  userProfiles.innerHTML = '';
  for(let i = 0; i < userArr.length; i++) {
    var userLi = document.createElement('li'),
        userDiv = document.createElement('div'),
        userH1 = document.createElement('h1');

    userDiv.innerHTML = userArr[i].avatar; // THIS PUTS AVATAR IN UPPER LEFT UNDER 'Users'
    userH1.textContent = userArr[i].username;
    userLi.append(userDiv, userH1);
    userProfiles.append(userLi);
  }
}
