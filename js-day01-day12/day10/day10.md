// Day10 In Class JavaScript
// JavaScript/JSON snippet created on May 3, 2017

/*
var meObj = {
    firstname: 'matthew',
    lastname: 'higley',
    hair: 'brown',
    eyes: 'green',
    height: 6,
    talk: function(msg){
        alert('hello from ' + this.firstname);
    }
};

meObj.firstname = 'david';

var youObj = {
    firstname: 'stephen',
    lastname: 'barry',
    hair: 'brown',
    eyes: 'green',
    height: 6
}


// Object Constructor
function Person(first, last, age, eyes){
    // var firstname = first;
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyes = eyes;
    this.talk = function(salutation){
        alert(salutation + ', from ' + this.firstname);
    }
}

// var today = new Date();
var matt = new Person('Matthew', 'Higley', 23, 'green');
var steve = new Person('Stephen', 'Barry', 19, 'green');
*/

// localStorage.setItem('user', 'Scooby Doo');
// localStorage.setItem('user', 'Matthew Higley');
//
// sessionStorage.setItem('password', '12345');
//
// if(localStorage.getItem('user') === 'Scooby Doo'){
//     document.body.style.backgroundColor = 'green';
// }

var userArr = [];

if(localStorage.getItem('users')){
    userArr = JSON.parse(localStorage.getItem('users'));
    outputUsers();
}


/**
*   Listening for a New User click
**/
var newUser = document.querySelector('nav button');
var newUserForm = document.querySelector('nav form');

newUser.addEventListener('click', function(){
    newUserForm.classList.toggle('hidden');
    newUserForm.reset();
});
var hoverIntent;
newUser.addEventListener('mouseenter', function(){
    hoverIntent = setTimeout(function(){
        newUserForm.classList.remove('hidden');
    }, 500);
});
newUser.addEventListener('mouseleave', function(){
    clearTimeout(hoverIntent);
    // if(newUserForm.classList.contains('hidden')){
    //     newUserForm.classList.add('hidden');
    // }
});

/**
*   Listening for a Create User click
**/
var createUser = document.querySelector('nav form input[type="submit"]');
createUser.addEventListener('click', function(e){
    e.preventDefault();
    genUser(newUserForm.elements);
    newUserForm.reset();
    newUserForm.classList.toggle('hidden');
});


// User Object Constructor
function UserObj(firstname, lastname, username, avatar){
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.avatar = avatar;
}

// Generate New User
function genUser(f){
    userArr.push(new UserObj(f[0].value, f[1].value, f[2].value, genAvatar()));
    outputUsers();
    localStorage.setItem('users', JSON.stringify(userArr));
    // JSON.stringify();
}

// Output userArr
function outputUsers(){
    var userProfiles = document.getElementById('userProfiles');
    userProfiles.innerHTML = '';
    for(let i = 0; i < userArr.length; i++){
        var userLi = document.createElement('li'),
            userDiv = document.createElement('div'),
            userH1 = document.createElement('h1');

        userDiv.innerHTML = userArr[i].avatar;
        userH1.textContent = userArr[i].username;
        userLi.append(userDiv, userH1);
        userProfiles.append(userLi);
    }
}

function genAvatar(){
    var avatarBox = document.createElement('ul');
    var randColor = Math.floor(Math.random() * 360);
    for(let i = 0; i < 16; i++){
        var avatarBlok = document.createElement('li');
        avatarBlok.style.backgroundColor = 'white';
        if(Math.floor(Math.random() * 2)){
            avatarBlok.style.backgroundColor = `hsl(${randColor}, 50%, 50%)`;
            //avatarBlok.style.backgroundColor = 'hsl('+randColor+', 50%, 50%)';
        }
        avatarBox.append(avatarBlok);
    }
    return avatarBox.outerHTML;
}

// grid 4 x 4 = total 16 blocks
