// Prompt
/*function infoFunction() {
    var info = prompt("Please enter your name");
    if (info != "" && info != null) {
        document.getElementById("info").innerHTML =
        "Hello " + info + "! How are you today?";
    }
}*/

function infoFunction() {
    var info = prompt("Please Enter Your First Name, Last Name, Age, & Your Favorite Place.");
    if (info != "" && info != null) {
        var arr = info.split(" "); // To split string into array of substrings
        console.log(arr);
        document.getElementById("info").innerHTML =
        "Hey " + arr[0] + ", so you're " + arr[2] + " and you think " + arr[3] + " is a cool place. I'm sorry but " + arr[3] + " sucks!";
    }
    alert('How You Doin\' ' + arr[0] + ' ' + arr[1]);
    confirm("Did you say " + arr[3] + "! I'm sorry but " + arr[3] + " sucks!");
    var userAge = parseInt(arr[2]); // Parses the string and returns an integer
    if (userAge < 50) {
      alert('Wow ' + arr[2] + ', that\'s a good age.');
      console.log('Wow ' + arr[2] + ', that\'s a good age.');
    }
    else {
      alert('Shit! ' + arr[2] + '. You\'re an old fart!');
      console.log('Shit! ' + arr[2] + '. You\'re an old fart!');
    }
}

/*function infoFunction() {
    var info = prompt("Please Enter Your First Name, Last Name, Age, & Your Favorite Place");
    var arr = info.split(" "); // To split string into array of substrings
    document.getElementById("info").innerHTML =
    "Hey " + arr[0] + ", so you're " + arr[2] + " and you think " + arr[3] + " is a cool place. I'm sorry but " + arr[3] + " sucks!";
    alert('How You Doin\' ' + arr[0] + ' ' + arr[1]);
    alert("Did you say " + arr[3] + "! I'm sorry but " + arr[3] + " sucks!");
    alert('So ' + arr[0] + ', you\'re ' + arr[2] + ' years old.');
    console.log('So ' + arr[0] + ', you\'re ' + arr[2] + ' years old.');
}*/
