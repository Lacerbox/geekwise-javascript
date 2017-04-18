/* ********** TO TITLE CASE FUNCTIONS ********** */

// FUNCTION TO CAPITALIZE THE FIRST LETTER OF EACH WORD IN A STRING
function titleCase(str) {
  str = str.toLowerCase().split(' ');     // will split the string delimited by space into an array of words

  for(var i = 0; i < str.length; i++){    // str.length holds the number of occurrences of the array...
    str[i] = str[i].split('');            // splits the array occurrence into an array of letters
    str[i][0] = str[i][0].toUpperCase();  // converts the first occurrence of the array to uppercase
    str[i] = str[i].join('');             // converts the array of letters back into a word
  }
  return str.join(' ');                   // converts the array of words back to a sentence
}
titleCase("I'm a little tea pot");

//____________________________________________________________________________________________________


// FUNCTION TO CAPITALIZE THE FIRST LETTER OF EACH WORD IN A STRING
// BUT PUT INTO DIFFERENT EASIER TO READ AND UNDERSTAND VARIABLES
function titleCase(str) {
  words = str.toLowerCase().split(' ');     // Converts the string to lower case and splits it into an array of substrings

  for(var i = 0; i < words.length; i++) {   // Loops the number of words in the array using str.length
    var letters = words[i].split('');       // Loops throuch each word and splits it into an array of letters
    letters[0] = letters[0].toUpperCase();  // Converts the first letter of each word to uppercase
    words[i] = letters.join('');            // Converts the array of letters back into a string of words
  }
  return words.join(' ');                   // Converts the array of words back into a string of words separated by spaces
}
titleCase("I'm a little tea pot");

//____________________________________________________________________________________________________


// FUNCTION EXAMINED AND EXPLAINED
function titleCase(str) {                   console.log('IN ZERO-0: ' + str);       // "IN ZERO-0:  i'M a lITtlE teA pOt"
  words = str.toLowerCase().split(' ');     console.log('IN ONE-1: ' + words);      // "IN ONE-1:   i'm,a,little,tea,pot"

  for(var i = 0; i < words.length; i++) {
    var letters = words[i].split('');       console.log('IN TWO-2: ' + letters);    // "IN TWO-2:   (1) i,',m" "(2) a" "(3) l,i,t,t,l,e" "(4) t,e,a" "(5) p,o,t"
    letters[0] = letters[0].toUpperCase();  console.log('IN THREE-3: ' + letters);  // "IN THREE-3: (1) I,',m" "(2) A" "(3) L,i,t,t,l,e" "(4) T,e,a" "(5) P,o,t"
    words[i] = letters.join('');            console.log('IN FOUR-4: ' + words);     // "IN FOUR-4:  (1) I'm,a,little,tea,pot" "(2) I'm,A,little,tea,pot"
  }                                                                                 // "(3) I'm,A,Little,tea,pot" "(4) I'm,A,Little,Tea,pot" "(5) I'm,A,Little,Tea,Pot"
  return words.join(' ');
}

//titleCase("i'M a lITtlE teA pOt");
console.log('IN FIVE-5: ' + titleCase("i'M a lITtlE teA pOt"));                     // "IN FIVE-5: I'm A Little Tea Pot"

/*
IN ZERO-0:  i'M a lITtlE teA pOt
IN ONE-1:   i'm,a,little,tea,pot

IN TWO-2:   i,',m
IN THREE-3: I,',m
IN FOUR-4:  I'm,a,little,tea,pot

IN TWO-2:   a
IN THREE-3: A
IN FOUR-4:  I'm,A,little,tea,pot

IN TWO-2:   l,i,t,t,l,e
IN THREE-3: L,i,t,t,l,e
IN FOUR-4:  I'm,A,Little,tea,pot

IN TWO-2:   t,e,a
IN THREE-3: T,e,a
IN FOUR-4:  I'm,A,Little,Tea,pot

IN TWO-2:   p,o,t
IN THREE-3: P,o,t
IN FOUR-4:  I'm,A,Little,Tea,Pot

IN FIVE-5:  I'm A Little Tea Pot
*/
