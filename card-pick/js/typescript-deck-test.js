var cardsRemainingInDeck
var Deck = (function () {
    function Deck() {
        this.numberOfCards = 52;
        this.allCards = [
        "Two of Hearts &#9825;", "Three of Hearts &#9825;", "Four of Hearts &#9825;", "Five of Hearts &#9825;",
        "Six of Hearts &#9825;", "Seven of Hearts &#9825;", "Eight of Hearts &#9825;", "Nine of Hearts &#9825;",
        "Ten of Hearts &#9825;", "Jack of Hearts &#9825;", "Queen of Hearts &#9825;", "King of Hearts &#9825;",
        "Ace of Hearts &#9825;",
        "Two of Spades &#9828;", "Three of Spades &#9828;", "Four of Spades &#9828;", "Five of Spades &#9828;",
        "Six of Spades &#9828;", "Seven of Spades &#9828;", "Eight of Spades &#9828;", "Nine of Spades &#9828;",
        "Ten of Spades &#9828;", "Jack of Spades &#9828;", "Queen of Spades &#9828;", "King of Spades &#9828;",
        "Ace of Spades &#9828;",
        "Two of Clubs &#9831;", "Three of Clubs &#9831;", "Four of Clubs &#9831;", "Five of Clubs &#9831;",
        "Six of Clubs &#9831;", "Seven of Clubs &#9831;", "Eight of Clubs &#9831;", "Nine of Clubs &#9831;",
        "Ten of Clubs &#9831;", "Jack of Clubs &#9831;", "Queen of Clubs &#9831;", "King of Clubs &#9831;",
        "Ace of Clubs &#9831;",
        "Two of Diamonds &#9826;", "Three of Diamonds &#9826;", "Four of Diamonds &#9826;", "Five of Diamonds &#9826;",
        "Six of Diamonds &#9826;", "Seven of Diamonds &#9826;", "Eight of Diamonds &#9826;", "Nine of Diamonds &#9826;",
        "Ten of Diamonds &#9826;", "Jack of Diamonds &#9826;", "Queen of Diamonds &#9826;", "King of Diamonds &#9826;",
        "Ace of Diamonds &#9826;"
        ];
        this.cardsPicked = [];
        console.log(this);
        console.log(this.allCards);
        console.log(this.cardsPicked);
        console.log(this.numberOfCards + ' CARDS IN DECK TO START');
    } // Function to check how many cards remain
    Deck.prototype.getCardsRemaining = function () {              // 'this.numberOfCards' = '52' and
        if(this.numberOfCards - this.cardsPicked.length === 0) {  // 'this.cardsPicked.length' equals
          var button = document.getElementById("pickCardButton"); // (number increases by 1 with each button click)
          button.disabled = true;         // so when 'this.numberOfCards - this.cardsPicked.length' = '0'
        }                                 // all 52 cards in the deck have been used and the button is disabled
        cardsRemainingInDeck = this.numberOfCards - this.cardsPicked.length;
        return cardsRemainingInDeck; // Returns the number of cards remaining
    };
    Deck.prototype.createCardPicker = function () {
        var _this = this; // Copies 'numberOfCards' 'allCards' and 'cardsPicked' to '_this'
        return function () {
            if (!_this.getCardsRemaining()) // IF THE CARD DECK IS EMPTY, RETURN AND SKIP THE FUNCTION
                return;
            var card = _this.allCards[Math.floor(Math.random() * _this.allCards.length)];
            // The above line gets a random card within the length of the array thus picking the next card
            _this.cardsPicked.push(card);   // Pushes 'card' to '_this.cardsPicked' which holds all the cards that have been picked
            console.log(_this.cardsPicked); // Then '_this.cardsPicked' is used to return card for printing out to the screen???
            console.log(card);
            console.log(cardsRemainingInDeck - 1 + ' CARDS REMAINING IN DECK');


            //var ranNum = Math.floor((Math.random() * cards.length)); // Gets a random number within the length of the array thus picking the next card
            //document.getElementById("card1").innerHTML = cards[ranNum]; // Sends the random number back to html
            var c1 = card; // Grabs the random card picked 'Two of Hearts &#9825;' for parsing on the next line
            //var cardToCompare = c1.charAt(0).concat(c1.charAt(1), c1.charAt(c1.length-2)); // 'cardToCompare' holds the 0th, 1st & 7th element the card
            var cardPicked = c1.charAt(0).concat(c1.charAt(1)); // 'cardPicked' holds the 0th & 1st element the card
            var j = _this.allCards.indexOf(c1);                      // Then it compares it to 'card_b' below in the 'if' statements for a Blackjack
            console.log(cardPicked);
            console.log("(" + card + "), THE " + j + "TH CARD IN THE ARRAY, IS THE CARD CHOSEN SO TO THE CHOPPING BLOCK!");

            // ***** THIS MADE IT ALL WORK. FINALLY, AFTER FUCKING WITH IT FOR TWO WEEKS!!! *****
            for (let i = 0; i < _this.allCards.length; i++) { // Loop the array and when '_this.allCards[i]'
              if (_this.allCards[i] === card) { // becomes equal to 'card' (the picked card) delete that card
                console.log("(" + card + ") IS THE " + i + "TH CARD IN THE ARRAY AND IS EQUAL TO (" + _this.allCards[i] + ") SO PURGE THAT CARD FROM THE ARRAY AND KEEP GOING.");
                _this.allCards.splice(i, 1); // At position 'i', 'splice' (remove) that item from the array
              }
            }

            //if(i != -1) { // If 'i' [which is 'cards.indexOf(c1)'] is not equal to '-1', continue to 'splice' (remove) the item fron the array
            	//_this.allCards.splice(i, 1); // At position 'i', remove that item from the array
            //}
            console.log(_this.allCards);

            /*var cardToRemove = card.charAt(0).concat(card.charAt(1), card.charAt(7)); // 'cardToRemove' holds the 0th, 1st & th element the card
            var i = card.indexOf(card);  // If 'i' (which is a card (item) in the array) is not equal to '-1',
            console.log(cardToRemove);
            if(i != -1) {              // continue to 'splice' (remove) the card (item) from the array
            	card.splice(i, 1);       // At position 'i', remove that item from the array
            }*/

            return card; // Returnes the card picked???
        };
    };
    return Deck;
}());

var button = document.getElementById("pickCardButton");
var deckDiv = document.getElementById("deckDiv");
var deck = new Deck();
var cardPicker = deck.createCardPicker();
button.addEventListener("click", function () {
    var card = cardPicker();
    // Sends card back to <button> in html and prints to the button on the page (line below)
    button.innerHTML = getCardLabel(card) + ' - ' + deck.getCardsRemaining() + ' Cards Left In Deck';
    deckDiv.innerHTML += getCardLabel(card); // Sends card with a <br> (for new line)
    deckDiv.innerHTML += "<br />";           // back to <div> in html and prints to page
});
function getCardLabel(card) { // Function to put the card rank and suit together for 'innerHTML' to send it to html to print to page
    return card;
}




/*_________________________________________________________________________________________________________




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
}                                                     // 'BLACKJACK!!!' back to html and prints it out to the screen*/
