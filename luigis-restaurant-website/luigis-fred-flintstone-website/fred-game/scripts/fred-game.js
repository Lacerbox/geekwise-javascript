// FOR FRED-GAME.HTML

var toJav, chk, ans;
var fred1 = 'Fred Flintstone', fred2 = 'fredflintstone', fredFirst = 'fred', fredLast = 'flintstone';
var barney1 = 'Barney Rubble', barney2 = 'barneyrubble', barneyFirst = 'barney', barneyLast = 'rubble';
var roxy1 = 'Roxy Lady', roxy2 = 'roxylady', roxyFirst = 'roxy', roxyLast = 'lady';
var jeannie = 'Jeannie', sexyJeannie = 'Sexy Jeannie';

function funcFred() {
  chk = document.getElementById("toJav").value;

  if (chk.toUpperCase() === fred1.toUpperCase()) {
    document.getElementById("image").src = "img/fred.gif";
    window.location.replace("fred-game-3.html");
    //ans = 'Yes, Fred Flintstone is correct! You would have won a Fred, but they don\'t exist anymore!';
  }
  else if (chk.toUpperCase() === fred2.toUpperCase()) {
    document.getElementById("image").src = "img/fred.gif";
    ans = 'Well, you left out a space, but we\'ll give it to you anyway. Fred Flintstone is correct, but no space, no prize!';
  }
  else if (chk.toUpperCase() === fredFirst.toUpperCase()) {
    document.getElementById("image").src = "img/fred.gif";
    ans = 'C\'mon, he\'s got a last name too. Try again!';
  }
  else if (chk.toUpperCase() === fredLast.toUpperCase()) {
    document.getElementById("image").src = "img/fred.gif";
    ans = 'Well, that\'s his last name but, duh, he\'s got a first name too. Try again!';
  }
  else if (chk.toUpperCase() === barney1.toUpperCase() || chk.toUpperCase() === barney2.toUpperCase() ||
           chk.toUpperCase() === barneyFirst.toUpperCase() || chk.toUpperCase() === barneyLast.toUpperCase()) {
    document.getElementById("image").src = "img/barney-rubble.png";
    ans = 'Barney? Really? No, try again!';
  }
  else if (chk.toUpperCase() === jeannie.toUpperCase()) {
    window.location.replace("fred-game-jeannie.html");
  }
  else if (chk.toUpperCase() === sexyJeannie.toUpperCase()) {
    window.location.replace("fred-game-jeannie-2.html");
  }
  else if (chk.toUpperCase() === roxyLast.toUpperCase()) {
    document.getElementById("image").src = "img/fred.gif";
    ans = 'Lady? Do you see a lady in here somewhere? Mannaggia, try again!';
  }
  else if (chk.toUpperCase() === roxyFirst.toUpperCase()) {
    document.getElementById("image").src = "img/fred.gif";
    ans = 'Hey, who told you to enter that. Roxy is off–limits. Now play nice or you\'ll be getting a visit from my uncle Vito and his nephew\'s Tiny and Rocco!<br><br>This is where you try again, or else!';
  }
  else if (chk.toUpperCase() === roxy2.toUpperCase()) {
    document.getElementById("image").src = "img/fred.gif";
    ans = 'I don\'know who told you to enter that, but you\'ve really got some coglioni\'s. Roxy is off–limits, now try again before you get hurt!';
  }
  else if (chk.toUpperCase() === roxy1.toUpperCase()) {
    window.location.replace("fred-game-roxy.html");
    // ALL THE FOLLOWING MOVED TO 'roxy.html'
    //document.getElementById("image").src = "img/roxy.jpg";
    //ans = 'NOW you\'ve done it! You pissed Fred off! Now Wilma\'s gonna be upset so he left. We told you not to enter Fred\'s private "Roxy Lady" picture. Now someone "IS" gonna get hurt!';
    /*window.setTimeout(function() {
        window.location.replace("fred-2.html");
    }, 3000);
    window.setTimeout();*/
  }
  else if (chk == '') {
    document.getElementById("image").src = "img/fred.gif";
    ans = 'Hey, if you don\'t enter something, somebody\'s gonna get hurt! (Psst! Enter \"Roxy Lady\" and you\'ll really piss Fred off!)';
  }
  else {
    document.getElementById("image").src = "img/fred.gif";
    ans = 'Well, either you spelled it wrong, or you\'re just plain Stupid! You\'re wrong, try again!';
  }
  document.getElementById("fromJav").innerHTML = ans;
}
