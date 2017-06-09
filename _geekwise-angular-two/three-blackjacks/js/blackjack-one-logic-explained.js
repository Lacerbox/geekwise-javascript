var cards = [
'cards/c01.png', 'cards/c02.png', 'cards/c03.png', 'cards/c04.png', 'cards/c05.png',
'cards/c06.png', 'cards/c07.png', 'cards/c08.png', 'cards/c09.png', 'cards/c10.png',
'cards/c11.png', 'cards/c12.png', 'cards/c13.png',
'cards/d01.png', 'cards/d02.png', 'cards/d03.png', 'cards/d04.png', 'cards/d05.png',
'cards/d06.png', 'cards/d07.png', 'cards/d08.png', 'cards/d09.png', 'cards/d10.png',
'cards/d11.png', 'cards/d12.png', 'cards/d13.png',
'cards/h01.png', 'cards/h02.png', 'cards/h03.png', 'cards/h04.png', 'cards/h05.png',
'cards/h06.png', 'cards/h07.png', 'cards/h08.png', 'cards/h09.png', 'cards/h10.png',
'cards/h11.png', 'cards/h12.png', 'cards/h13.png',
'cards/s01.png', 'cards/s02.png', 'cards/s03.png', 'cards/s04.png', 'cards/s05.png',
'cards/s06.png', 'cards/s07.png', 'cards/s08.png', 'cards/s09.png', 'cards/s10.png',
'cards/s11.png', 'cards/s12.png', 'cards/s13.png',
];

function randomNumber() {
  var msg = '';

  // HANDLE CARD ONE
  var ranNum = Math.floor((Math.random() * cards.length)); // Math.floor() rounds the number down & Math.random() returns a random number within the length of the array
  //document.getElementById("card1").src = cards[ranNum]; // Sends the random number back to html
  var c1 = cards[ranNum]; // Grabs the random card picked 'cards/c01.png' for parsing on the next line
  console.log('Random Card Picked To Check For Blackjack: ' + c1);
  //var card_a = c1.charAt(7).concat(c1.charAt(8)); // 'card_a' holds the 7th & 8th element of 'cards/c01.png' which would be '01'
                                                  // Then it compares it to 'card_b' below in the 'if' statements for a Blackjack
  var i = cards.indexOf(c1);
  if (i === -1) { // If 'i' = '-1', show this 'console.log'
    console.log('End of Deck: (card_a): i === ' + i);
  }
  if(i != -1) { // If 'i' is not equal to '-1', continue to 'splice' (remove) the item fron the array
    console.log('i Is Not Equal To -1: i Is The ' + i + 'th Card In The Array Which Is ' + cards[i] + ': PURGE CARD ' + cards[i] + ' And Keep Going');
  	cards.splice(i, 1); // At position 'i', remove that item from the array
  }
  console.log(cards);
  //console.log('cards Array Length Now Equal To: ' + cards.length);


  // HANDLE CARD TWO
  var ranNum = Math.floor((Math.random() * cards.length)); // Math.floor() rounds the number down & Math.random() returns a random number within the length of the array
  //document.getElementById("card2").src = cards[ranNum]; // Sends the random number back to html
  var c2 = cards[ranNum]; // Grabs the random card picked 'cards/s13.png' for parsing on the next line
  console.log('Random Card Picked To Check For Blackjack: ' + c2);
  //var card_b = c2.charAt(7).concat(c2.charAt(8)); // 'card_b' holds the 7th & 8th element of 'cards/s13.png' which would be '13'
                                                  // Then it compares it to 'card_a' below in the 'if' statements for a Blackjack
  var i = cards.indexOf(c2);
  if (i === -1) { // If 'i' = '-1', show this 'console.log'
    console.log('End of Deck: (card_b): i === ' + i);
  }
  if (i != -1) { // If 'i' is not equal to '-1', continue to 'splice' (remove) the item fron the array
    console.log('i Is Not Equal To -1: i = The ' + i + 'th Card In The Array Which Is ' + cards[i] + ': PURGE CARD ' + cards[i] + ' And Keep Going');
  	cards.splice(i, 1); // At position 'i', remove that item from the array
  }
  console.log(cards);
  //console.log('cards Array Length Now Equal To: ' + cards.length);


  // THIS IF STATEMENT IS NO LONGER NEEDED
  /*if (cards.length === 2) {        // If there are 2 cards left, sends message back to html and prints 'Re-shuffling' to the screen
    window.setTimeout(function() { // When the button is clicked, the next if statement is invoked which reloads the page
      msg = 'Re-shuffling';
      document.getElementById("fromJav").innerHTML = msg;
    }, 500);
  }*/

  // FUNCTION TO HANDLE THE DELAY AND RELOADING OF THE PAGE (NOT NEEDED AS THE DELAY AND RELOAD ARE HANDLED BELOW)
  /*function delayBeforeReload() {
    var button = document.getElementById("Button");
    button.disabled = true; // Disables the button
    setTimeout("document.location.reload()", 4000); // Reloads the page after a 4 second delay allowing the last 2 cards to be seen
  }*/


  // HANDLE ZERO CARDS LEFT, SEND MESSAGE 'Re-shuffling' TO HTML, AND HANDLE DELAY AND RELOADING OF PAGE
  if (cards.length === 0) {
    msg = 'Re-shuffling'; // If there are 0 cards left, sends message back to html and prints 'Re-shuffling' to the screen
    document.getElementById("fromJav").innerHTML = msg;
    var button = document.getElementById("Button");
    button.disabled = true; // Disables the button
    setTimeout("document.location.reload()", 4000); // Reloads the page after a 4 second delay allowing the last 2 cards to be seen
    //delayBeforeReload(); // The function 'delayBeforeReload' is called for a delay and reloading of the page
    //location.reload(); // THIS IF STATEMENT USED TO SIMPLY RELOAD THE PAGE WHEN 'cards.length' WAS EQUAL TO ZERO
  }

  // CHECKS FOR EIGHT POSSIBLE BLACKJACKS
  /*if (card_a === '01' && card_b === '10') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '01' && card_b === '11') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '01' && card_b === '12') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '01' && card_b === '13') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '10' && card_b === '01') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '11' && card_b === '01') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '12' && card_b === '01') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '13' && card_b === '01') {
    msg = 'BLACKJACK!!!';
  }*/
  document.getElementById("fromJav").innerHTML = msg; //  If the 2 compared cards equal Blackjack, sends the message
}                                                     // 'BLACKJACK!!!' back to html and prints it out to the screen
