// JS FOR 'CREATE USER, USER NAME, & AVATAR' WEBPAGE
var userArr = [];

/*if(localStorage.getItem('users')){ // IF TRUE DO, IF FALSE SKIP
    userArr = JSON.parse(localStorage.getItem('users'));
    outputUsers();
}*/

/**
*   Listening for a New User click
**/
var newUser = document.querySelector('nav button');
var newUserForm = document.querySelector('nav form');
var newUserInfo = document.getElementById('newUser');

newUser.addEventListener('click', function(){
  newUserForm.classList.toggle('hidden');
  newUserForm.reset();
});


/*newUser.addEventListener('click', function(){ // Matt Added Click Back
    newUserForm.classList.toggle('hidden'); // DONE WITH CSS
    //newUserForm.style.display('none'); // DONE WITH JS
    newUserForm.reset();
});

/*newUserInfo.addEventListener('click', function(){ // Matt Added Click Back
    newUser.style.display = 'block';
    //newUserForm.classList.toggle('hidden'); // DONE WITH CSS
    //newUserForm.style.display('none'); // DONE WITH JS
    newUserForm.reset();
});*/

/*var hoverIntent;
newUser.addEventListener('mouseenter', function(){ // MOUSE HOVER CAUSES 'New User'
    hoverIntent = setTimeout(function(){           // LIST TO APPEAR AFTER 0.5 SECONDS
        newUserForm.classList.remove('hidden');
        //$(newUserForm.classList).hide();
        //$(newUserForm.classList).fadeIn(2000);
    }); //, 500);
});

newUser.addEventListener('mouseleave', function(){
    clearTimeout(hoverIntent);
    // if(newUserForm.classList.contains('hidden')){ // MOUSE LEAVE CAUSES 'New User' LIST TO DISAPPEAR
    //     newUserForm.classList.add('hidden');      // WHEN MOUSE MOVES AWAY SO IT WAS COMMENTED OUT
    // }
});*/

/*newUser.addEventListener('mouseleave', function(){
    //clearTimeout(hoverIntent);
    hoverIntent = setTimeout(function(){
    newUserForm.classList.contains('hidden'); // MOUSE LEAVE CAUSES 'New User' LIST TO DISAPPEAR
        newUserForm.classList.add('hidden');  // WHEN MOUSE MOVES AWAY
    }, 1000);
    // if(newUserForm.classList.contains('hidden')){ // MOUSE LEAVE CAUSES 'New User' LIST TO DISAPPEAR
    //     newUserForm.classList.add('hidden');      // WHEN MOUSE MOVES AWAY SO IT WAS COMMENTED OUT
    // }
});*/

/**
*   Listening for a Create User click
**/
var createUser = document.querySelector('nav form input[type="submit"]');
createUser.addEventListener('click', function(e){
    e.preventDefault();
    genUser(newUserForm.elements); // 'newUserForm.children' ASLO WORKS BUT 'elements' BETTER
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
function genUser(f){ // 'f' IS FOR FORM
    userArr.push(new UserObj(f[0].value, f[1].value, f[2].value, genAvatar()));
    console.log(userArr);
    outputUsers();
    //localStorage.setItem('users', JSON.stringify(userArr)); // STORES USERS IN LOCAL STORAGE
    //localStorage.removeItem('user'); // REMOVES USERS FROM LOCAL STORAGE
    // USING - 'JSON.stringify();'
}

// Output 'userArr'
function outputUsers(){
    var userProfiles = document.getElementById('userProfiles');
    userProfiles.innerHTML = '';
    for(let i = 0; i < userArr.length; i++){
        var userLi = document.createElement('li'),
            userDiv = document.createElement('div'),
            userH1 = document.createElement('h1');

        userDiv.innerHTML = userArr[i].avatar; // THIS PUTS AVATAR IN UPPER LEFT UNDER 'Users'
        userH1.textContent = userArr[i].username;
        userLi.append(userDiv, userH1);
        userProfiles.append(userLi);
    }
}

// Generate An Avatar
function genAvatar(){ // GRID 4 x 4 = TOTAL OF 16 BLOCKS
    var avatarBox = document.createElement('ul'); // TO CREATE 'UL's'
    var randColor = Math.floor(Math.random() * 360); // FOR 360 COLOR POSSIBILITIES
    for(let i = 0; i < 16; i++){
        var avatarBlok = document.createElement('li'); // TO CREATE 16 'LI's' INSIDE THE 'UL's'
        avatarBlok.style.backgroundColor = 'white'; //getRandomColor(); // CALLS RANDOM COLOR FUNCTION IF USED INSTEAD OF 'white'

      //if(Math.floor(Math.random() * 2) === 1){ // BELOW COULD ALSO BE WRITTEN LIKE THIS
        if(Math.floor(Math.random() * 2)){ // IF 1 RUN, IF 0 SKIP - Math.floor(Math.random() * 2) RETURNS 0 OR 1
            avatarBlok.style.backgroundColor = `hsl(${randColor}, 50%, 50%)`; // ROUND DOWN TO 1 OR 0, IF 1 RETURN RANDOM COLOR
            //avatarBlok.style.backgroundColor = 'hsl('+randColor+', 50%, 50%)'; // DOES SAME AS ABOVE
        }
        avatarBox.append(avatarBlok);
    }
    return avatarBox.outerHTML;
}

// This Function Is Not Being Used
// FUNCTION I FOUND TO GENERATE RANDOM COLOR (Makes Each Block A Different Color)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
