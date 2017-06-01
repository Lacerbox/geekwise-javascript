// FOR FREDS-HAUNTED-MANSION.HTML

var toJav, chk, ans;
var yes = 'Yes', no = 'No', y = 'y', n = 'n'; // VARIABLES FOR 'mansion-start' PAGE
var inside = 'Inside', party = 'Party'; // VARIABLES FOR 'mansion-outside' PAGE
var creepy = 'Creepy', scary = 'Scary'; // VARIABLES FOR 'room-1' PAGE
var exit = 'Exit'; // VARIABLE FOR 'room-2' AND 'room-3' PAGES
var open = 'Open'; // VARIABLE FOR 'door-closed' PAGE


// FUNCTION FOR 'mansion-start' PAGE
function start() {
  chk = document.getElementById("toJav").value;

  if (chk.toUpperCase() === yes.toUpperCase() || chk.toUpperCase() === y.toUpperCase()) {
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
}


// FUNCTION FOR 'mansion-outside' PAGE
function outside() {
  chk = document.getElementById("toJav").value;

  if (chk.toUpperCase() === inside.toUpperCase()) {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
    window.setTimeout(function() {
        window.location.replace("ghosts.html");
    }, 500);
    window.setTimeout();
  }
  else if (chk.toUpperCase() === party.toUpperCase()) {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
    window.setTimeout(function() {
        window.location.replace("party.html");
    }, 500);
    window.setTimeout();
  }
  else if (chk == '') {
    ans = 'Hey, you didn\'t enter anything, you big scaredy-cat chicken!';
  }
  else {
    ans = 'Well, either you spelled it wrong, or you\'re just plain Chicken! Try again!';
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
  }
  document.getElementById("fromJav").innerHTML = ans;
}


// FUNCTION FOR 'room-1' PAGE
function creepyOrScary() {
  chk = document.getElementById("toJav").value;

  if (chk.toUpperCase() === creepy.toUpperCase()) {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
    window.setTimeout(function() {
        window.location.replace("room-2.html");
    }, 500);
    window.setTimeout();
  }
  else if (chk.toUpperCase() === scary.toUpperCase()) {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
    window.setTimeout(function() {
        window.location.replace("room-3.html");
    }, 500);
    window.setTimeout();
  }
  else {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
  }
  document.getElementById("fromJav").innerHTML = ans;
}


// FUNCTION FOR 'room-2' AND 'room-3' PAGE
function toExit() {
  chk = document.getElementById("toJav").value;

  if (chk.toUpperCase() === exit.toUpperCase()) {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
    window.setTimeout(function() {
        window.location.replace("room-4.html");
    }, 500);
    window.setTimeout();
  }
  else if (chk == '') {
    ans = 'Hey, if you don\'t enter something, you\'ll never get out of here!';
  }
  else {
    ans = 'You didn\'t enter \'Exit\'! What, do you want to stay here? Try again!';
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
  }
  document.getElementById("fromJav").innerHTML = ans;
}


// FUNCTION FOR 'pirates' PAGE
function toExitAgain() {
  chk = document.getElementById("toJav").value;

  if (chk.toUpperCase() === exit.toUpperCase()) {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
    window.setTimeout(function() {
        window.location.replace("hall.html");
    }, 500);
    window.setTimeout();
  }
  else if (chk == '') {
    ans = 'Again, if you don\'t enter something, you\'ll never get out of here!';
  }
  else {
    ans = 'You didn\'t enter \'Exit\'! I guess you like it here? Try again if you want to leave.';
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
  }
  document.getElementById("fromJav").innerHTML = ans;
}


// FUNCTION FOR 'hatbox-ghost' PAGE
function toExitAgainHatbox() {
  chk = document.getElementById("toJav").value;

  if (chk.toUpperCase() === exit.toUpperCase()) {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
    window.setTimeout(function() {
        window.location.replace("hall.html");
    }, 500);
    window.setTimeout();
  }
  else {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
  }
  document.getElementById("fromJav").innerHTML = ans;
}


// FUNCTION FOR 'door-closed' PAGE
function toDoor() {
  chk = document.getElementById("toJav").value;

  if (chk.toUpperCase() === open.toUpperCase()) {
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
    window.setTimeout(function() {
        window.location.replace("door-open.html");
    }, 200);
    window.setTimeout();
  }
  else if (chk == '') {
    ans = 'Hey, if you don\'t enter something, you\'ll never get through that door!';
  }
  else {
    ans = 'You didn\'t enter \'Open\'! You\'d better hurry, Frank is coming!';
    document.getElementById("toJav").value = ''; // To clear the box after user information is entered
  }
  document.getElementById("fromJav").innerHTML = ans;
}
