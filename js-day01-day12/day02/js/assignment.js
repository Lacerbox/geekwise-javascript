// FUNCTION THAT GETS THE FIRST AND LAST NAME FROM A USER, THEN MODIFIES THE STRING
// CAPITALIZING THE FIRST LETTER OF BOTH NAMES AND LOWERCASE ALL REMAINING LETTERS

function changeCaseInName() {
  var str = document.getElementById("toJav").value; // Gets user information from 'assignment.html'
  if (str != "" && str != null) { // If nothing is entered, the rest of the function is skipped
    var newStr = "";
    for (var i = 0; i < str.length; i++) { // Loops the length of the string entered by the user
      if (i === 0) {
        newStr += (str[0].toUpperCase());  // Changes first character of first name to upper case
        i++;                 // Increments to the second character of the first name
      }
      if (str[i] === " ") {  // If character is a 'space', then changes the next character (first letter of the last name) to upper case
        i++;                 // Increments to the character after the 'space'
        newStr += (' ' + str[i].toUpperCase());
        i++;                 // Increments to the second character of the last name
      }
      newStr += (str[i].toLowerCase());    // Changes rest of characters to lower case
    }
    document.getElementById("fromJav").innerHTML = newStr; // Sends 'newStr' back to 'assignment.html'
  }
  document.getElementById("toJav").value = ''; // To clear the box after user information is entered
}
