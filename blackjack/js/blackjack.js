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
  var ranNum = Math.floor((Math.random() * cards.length)); // Gets a random number within the length of the array thus picking the next card
  document.getElementById("card1").src = cards[ranNum]; // Sends the random number back to html
  var c1 = cards[ranNum]; // Grabs the random card picked 'cards/c01.png' for parsing on the next line
  var card_a = c1.charAt(7).concat(c1.charAt(8)); // 'card_a' holds the 7th & 8th element of 'cards/c01.png' which would be '01'
  var i = cards.indexOf(c1);                      // Then it compares it to 'card_b' below in the 'if' statements for a Blackjack
  if(i != -1) { // If 'i' [which is 'cards.indexOf(c1)'] is not equal to '-1', continue to 'splice' (remove) the item fron the array
  	cards.splice(i, 1); // At position 'i', remove that item from the array
  }

  // HANDLE CARD TWO
  var ranNum = Math.floor((Math.random() * cards.length)); // Gets a random number within the length of the array thus picking the next card
  document.getElementById("card2").src = cards[ranNum]; // Sends the random number back to html
  var c2 = cards[ranNum]; // Grabs the random card picked 'cards/s13.png' for parsing on the next line
  var card_b = c2.charAt(7).concat(c2.charAt(8)); // 'card_b' holds the 7th & 8th element of 'cards/s13.png' which would be '13'
  var i = cards.indexOf(c2);                      // Then it compares it to 'card_a' below in the 'if' statements for a Blackjack
  if (i != -1) { // If 'i' [which is 'cards.indexOf(c2)'] is not equal to '-1', continue to 'splice' (remove) the item fron the array
  	cards.splice(i, 1); // At position 'i', remove that item from the array
  }

  // HANDLE ZERO CARDS LEFT, SEND MESSAGE 'Re-shuffling' TO HTML, AND HANDLE DELAY AND RELOADING OF PAGE
  if (cards.length === 0) {
    msg = 'Re-shuffling'; // If there are 0 cards left, sends message 'Re-shuffling' back to html and prints it to the screen
    document.getElementById("fromJav").innerHTML = msg;
    document.getElementById("Button").disabled = true; // Since 'cards.length === 0' (NO CARDS LEFT IN DECK) the button is disabled
    setTimeout("document.location.reload()", 4000); // Reloads the page after a 4 second delay allowing the last 2 cards to be seen
  }

  // CHECKS FOR EIGHT POSSIBLE BLACKJACKS
  if (card_a === '01' && card_b === '10' || card_a === '01' && card_b === '11' ||
      card_a === '01' && card_b === '12' || card_a === '01' && card_b === '13' ||
      card_a === '10' && card_b === '01' || card_a === '11' && card_b === '01' ||
      card_a === '12' && card_b === '01' || card_a === '13' && card_b === '01') {
    msg = 'BLACKJACK!!!';
  }
  document.getElementById("fromJav").innerHTML = msg; //  If the 2 compared cards equal Blackjack, sends the message
}                                                     // 'BLACKJACK!!!' back to html and prints it out to the screen
