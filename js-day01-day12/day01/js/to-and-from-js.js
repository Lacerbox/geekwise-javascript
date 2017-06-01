// FOR 'TO-AND-FROM-JS.HTML'

// FUNCTION TO GET 'FIRST NAME, LAST NAME, AGE, & FAVORITE PLACE' FROM A USER, THEN CONVERT THE STRING
// TO AN ARRAY LIKE ["Fred", "Flintstone", "45", "Bedrock"], ACCESS THE ARRAY BY USING 'arr[0]' THRU 'arr[3]'
// AND THEN MANIPULATE THE DATA AND SEND IT BACK THE HTML TO PRINT TO THE WEBPAGE. THIS FUNCTION LESS THAN THE ONE BELOW.
/*function infoFunction() {
  var info = document.getElementById("toJav").value; // Gets information from html
  var arr = info.split(" "); // To split the string into an array of substrings
  document.getElementById("fromJav").innerHTML = // Sends information to html
  "Hey " + arr[0] + ", so you're " + arr[2] + " and you think " + arr[3] + " is a cool place. I'm sorry but " + arr[3] + " sucks!";
}

// FUNCTION TO GET 'FIRST NAME, LAST NAME, AGE, & FAVORITE PLACE' FROM A USER, THEN CONVERT THE STRING
// TO AN ARRAY LIKE ["Fred", "Flintstone", "45", "Bedrock"], ACCESS THE ARRAY BY USING 'arr[0]' THRU 'arr[3]'
// AND THEN MANIPULATE THE DATA AND SEND IT BACK THE HTML TO PRINT TO THE WEBPAGE.
function infoFunction() {
  var info = document.getElementById("toJav").value; // Gets information from html
  if (info != "" && info != null) { // If nothing is entered, the rest of the function is skipped
      var arr = info.split(" "); // To split the string into an array of substrings
      document.getElementById("fromJav").innerHTML = // Sends information to html
      "Hey " + arr[0] + ", so you're " + arr[2] + " and you think " + arr[3] + " is a cool place. I'm sorry but " + arr[3] + " sucks!";
  }
  document.getElementById("toJav").value = ''; // To clear the box after user information is entered
}*/

// FUNCTION TO GET 'FIRST NAME, LAST NAME, AGE, & FAVORITE PLACE' FROM A USER, THEN CONVERT THE STRING
// TO AN ARRAY LIKE ["Fred", "Flintstone", "45", "Bedrock"], ACCESS THE ARRAY BY USING 'arr[0]' THRU 'arr[3]'
// AND THEN MANIPULATE THE DATA AND SEND IT BACK THE HTML TO PRINT TO THE WEBPAGE. THIS FUNCTION MORE THAN THE ONE ABOVE.
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
