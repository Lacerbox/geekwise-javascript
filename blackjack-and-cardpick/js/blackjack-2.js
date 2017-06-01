var cards = [
"Two of Hearts &#9825;", "Three of Hearts &#9825;", "Four of Hearts &#9825;", "Five of Hearts &#9825;", "Six of Hearts &#9825;",
"Seven of Hearts &#9825;", "Eight of Hearts &#9825;", "Nine of Hearts &#9825;", "Ten of Hearts &#9825;", "Jack of Hearts &#9825;",
"Queen of Hearts &#9825;", "King of Hearts &#9825;", "Ace of Hearts &#9825;",
"Two of Spades &#9828;", "Three of Spades &#9828;", "Four of Spades &#9828;", "Five of Spades &#9828;", "Six of Spades &#9828;",
"Seven of Spades &#9828;", "Eight of Spades &#9828;", "Nine of Spades &#9828;", "Ten of Spades &#9828;", "Jack of Spades &#9828;",
"Queen of Spades &#9828;", "King of Spades &#9828;", "Ace of Spades &#9828;",
"Two of Clubs &#9831;", "Three of Clubs &#9831;", "Four of Clubs &#9831;", "Five of Clubs &#9831;", "Six of Clubs &#9831;",
"Seven of Clubs &#9831;", "Eight of Clubs &#9831;", "Nine of Clubs &#9831;", "Ten of Clubs &#9831;", "Jack of Clubs &#9831;",
"Queen of Clubs &#9831;", "King of Clubs &#9831;", "Ace of Clubs &#9831;",
"Two of Diamonds &#9826;", "Three of Diamonds &#9826;", "Four of Diamonds &#9826;", "Five of Diamonds &#9826;", "Six of Diamonds &#9826;",
"Seven of Diamonds &#9826;", "Eight of Diamonds &#9826;", "Nine of Diamonds &#9826;", "Ten of Diamonds &#9826;", "Jack of Diamonds &#9826;",
"Queen of Diamonds &#9826;", "King of Diamonds &#9826;", "Ace of Diamonds &#9826;"
];

function randomNumber() {
  var msg = '';

  // HANDLE CARD ONE
  var ranNum = Math.floor((Math.random() * cards.length)); // Gets a random number within the length of the array thus picking the next card
  document.getElementById("card1").innerHTML = cards[ranNum]; // Sends the random number back to html
  var c1 = cards[ranNum]; // Grabs the random card picked 'Two of Hearts &#9825;' for parsing on the next line
  var card_a = c1.charAt(0).concat(c1.charAt(1)); // 'card_a' holds the 0th & 1st element of 'Two of Hearts &#9825;' which is 'Tw'
  var i = cards.indexOf(c1);                      // Then it compares it to 'card_b' below in the 'if' statements for a Blackjack
  if(i != -1) { // If 'i' [which is 'cards.indexOf(c1)'] is not equal to '-1', continue to 'splice' (remove) the item fron the array
  	cards.splice(i, 1); // At position 'i', remove that item from the array
  }

  // HANDLE CARD TWO
  var ranNum = Math.floor((Math.random() * cards.length)); // Gets a random number within the length of the array thus picking the next card
  document.getElementById("card2").innerHTML = cards[ranNum]; // Sends the random number back to html
  var c2 = cards[ranNum]; // Grabs the random card picked 'Ace of Diamonds &#9826;' for parsing on the next line
  var card_b = c2.charAt(0).concat(c2.charAt(1)); // 'card_b' holds the 0th & 1st element of 'Ace of Diamonds &#9826;' which is 'Ac'
  var i = cards.indexOf(c2);                      // Then it compares it to 'card_a' below in the 'if' statements for a Blackjack
  if(i != -1) { // If 'i' [which is 'cards.indexOf(c2)'] is not equal to '-1', continue to 'splice' (remove) the item fron the array
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
  if (card_a === 'Te' && card_b === 'Ac' || card_a === 'Ja' && card_b === 'Ac' ||
      card_a === 'Qu' && card_b === 'Ac' || card_a === 'Ki' && card_b === 'Ac' ||
      card_a === 'Ac' && card_b === 'Te' || card_a === 'Ac' && card_b === 'Ja' ||
      card_a === 'Ac' && card_b === 'Qu' || card_a === 'Ac' && card_b === 'Ki') {
    msg = 'BLACKJACK!!!';
  }
  document.getElementById("fromJav").innerHTML = msg; //  If the 2 compared cards equal Blackjack, sends the message
}                                                     // 'BLACKJACK!!!' back to html and prints it out to the screen
