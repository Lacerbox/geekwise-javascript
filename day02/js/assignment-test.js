// FUNCTION - 1 TO GET THE FIRST AND LAST NAME FROM A USER, THEN MODIFY THE STRING
// CAPITALIZING THE FIRST LETTER OF BOTH NAMES AND LOWERCASE ALL REMAINING LETTERS

function changeCaseInName() {
  var str = document.getElementById("toJav").value; // Gets information from html
  if (str != "" && str != null) { // If nothing is entered, the rest of the function is skipped
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
      if (i === 0) {
        newStr += (str[0].toUpperCase()); console.log('IF-1.1: ' + newStr); // TO SEE WHAT'S GOING ON
        i++; console.log('IF-1.2: ' + newStr); // TO SEE WHAT'S GOING ON
      }
      if (str[i] === " ") {
        i++; console.log('IF-2.1: ' + newStr); // TO SEE WHAT'S GOING ON
        newStr += (' ' + str[i].toUpperCase());
        i++; console.log('IF-2.2: ' + newStr); // TO SEE WHAT'S GOING ON
      }
      newStr += (str[i].toLowerCase()); console.log('ELSE: ' + newStr); // TO SEE WHAT'S GOING ON
    }
    document.getElementById("fromJav").innerHTML = newStr;
  }
  document.getElementById("toJav").value = ''; // To clear the box after user information is entered
}

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

// FUNCTION 2 - TO GET THE FIRST AND LAST NAME FROM A USER, THEN MODIFY THE STRING
// CAPITALIZING THE FIRST LETTER OF BOTH NAMES AND LOWERCASE ALL REMAINING LETTERS

function changeCaseInName() {
  var str = document.getElementById("toJav").value; // Gets information from html
  if (str != "" && str != null) { // If nothing is entered, the rest of the function is skipped
    console.log(str); // TO SEE WHAT'S GOING ON
    // !!!!!***** THIS IS WHERE I LEFT OFF (Convert String To Array) *****!!!!!
    var arr = str.split(" "); // To split the string into an array of substrings
    console.log(arr);
    var firstName = "", lastName = "", fullName = "";
    var first = arr.shift();
    var last = arr.pop();
    console.log(first); // TO SEE WHAT'S GOING ON
    console.log(last); // TO SEE WHAT'S GOING ON

    for (var i = 0; i < first.length; i++) {
      if (i === 0) {
        firstName += (first[0].toUpperCase());
        i++;
      }
      firstName += (first[i].toLowerCase());
    }
    for (var i = 0; i < last.length; i++) {
      if (i === 0) {
        lastName += (last[0].toUpperCase());
        i++;
      }
      lastName += (last[i].toLowerCase()); //console.log(newStr);
    }
    fullName = firstName.concat(' ', lastName);
    console.log(firstName.concat(' ', lastName)); // TO SEE WHAT'S GOING ON
    console.log(fullName); // TO SEE WHAT'S GOING ON
    document.getElementById("fromJav").innerHTML = fullName;
  }
  document.getElementById("toJav").value = ''; // To clear the box after user information is entered
}
