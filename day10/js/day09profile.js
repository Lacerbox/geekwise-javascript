var userArr = [];

// Listen for a NewUser click
var newUser = document.querySelector('nav button');
var newUserForm = document.querySelector('nav form');

newUser.addEventListener('click', function(){
  newUserForm.classList.toggle('hidden');
  // newUserForm.reset();
});

// Listen for a CreateUser click
var newUserBtn = document.querySelector('nav form input[type="submit"]')

newUserBtn.addEventListener('click', function(e){
  e.preventDefault();
  //console.log(newUserForm.children);
  createUser(newUserForm.children); // 'elements' ASLO WORKS ('elements' Is Better)
  newUserForm.classList.toggle('hidden');
  newUserForm.reset();
});

function NewUserObj(fn, ln, un, av) {
  this.firstname = fn;
  this.lastname = ln;
  this.username = un;
  this.avatar = av;
}

function createUser(obj) {
  userArr.push(new NewUserObj(obj[0].value, obj[1].value, obj[2].value, makeAvatar()));
  console.log(userArr);
  outputUsers();
}

function makeAvatar() {
  var avatarBox = document.createElement('ul');
  for(let i = 0; i < 16; i++) {
    var avatarBlok = document.createElement('li');
    avatarBlok.style.backgroundColor = 'white'; //getRandomColor();

    if(Math.floor(Math.random() * 2)) {
      avatarBlok.style.backgroundColor = 'green'; //getRandomColor();
    }
    avatarBox.append(avatarBlok);
  }
  return avatarBox.outerHTML;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function outputUsers() {
  var userProfiles = document.getElementById('userProfiles');
  userProfiles.innerHTML = '';
  for(let i = 0; i < userArr.length; i++) {
    var userLi = document.createElement('li'),
        userH1 = document.createElement('h1'),
        userDiv = document.createElement('div');

    userH1.textContent = userArr[i].username;
    userDiv.innerHTML = userArr[i].avatar;
    userLi.append(userDiv, userH1);
    userProfiles.append(userLi);
  }
}
