// FUNCTION THAT GETS THE FIRST AND LAST NAME FROM A USER, THEN MODIFIES THE STRING
// CAPITALIZING THE FIRST LETTER OF BOTH NAMES AND LOWERCASE ALL REMAINING LETTERS

function changeCaseInName() {
  var str = document.getElementById("toJav").value; // Gets user information from 'assignment.html'
  if (str != "" && str != null) {  // If nothing is entered, the rest of the function is skipped
    var arr = str.split(" ");      // Splits the string into an array of substrings
    var firstName = "", lastName = "", fullName = "";
    var first = arr.shift();       // Removes first name and saves it to 'var first'
    var last = arr.pop();          // Removes last name and saves it to 'var last'

    for (var i = 0; i < first.length; i++) {    // Loops the length of the first name
      if (i === 0) {
        firstName += (first[0].toUpperCase());  // Changes first character of first name to upper case
        i++;
      }
      firstName += (first[i].toLowerCase());    // Changes rest of characters of first name to lower case
    }
    for (var i = 0; i < last.length; i++) {     // Loops the length of the last name
      if (i === 0) {
        lastName += (last[0].toUpperCase());    // Changes first character of last name to upper case
        i++;
      }
      lastName += (last[i].toLowerCase());      // Changes rest of characters of last name to lower case
    }
    fullName = firstName.concat(' ', lastName); // Concatenates 'firstName' and 'lastName' to 'fullName'
    document.getElementById("fromJav").innerHTML = fullName; // Sends 'fullName' back to 'assignment.html'
  }
  document.getElementById("toJav").value = '';  // To clear the box after user information is entered
}
