function infoFunction() {
  var info = document.getElementById("toJav").value; // Gets information from html
  if (info != "" && info != null) { // If nothing is entered, the rest of the function is skipped
    var arr = info.split(" "); // To split the string into an array of substrings
    var userAge = parseInt(arr[2]); // Parses the string and returns an integer
    if (userAge < 50) { // If age is less than 50, this is displayed
      document.getElementById("fromJav").innerHTML = // Sends information to html
      "Hey " + arr[0] + ", so you're not that old at " + arr[2] + ", but you think " + arr[3] + " is a cool place. I'm sorry but " + arr[3] + " sucks!";
    }
    else { // If age is 50 or more, then this is displayed
      document.getElementById("fromJav").innerHTML = // Sends information to html
      "Shit " + arr[0] + "! So you're an old fart of " + arr[2] + " and you think " + arr[3] + " is a cool place. I'm sorry but " + arr[3] + " sucks!";
    }
  }
  document.getElementById("toJav").value = ''; // To clear the box after user information is entered
}
