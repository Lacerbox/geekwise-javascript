// FIVE FOR LOOPS AND IF STATEMENTS USING 'allCards' BELOW

// ***** THE PROBLEM *****
// THERE WILL ALWAYS BE A MATCH WITH MULTIPLE FOR LOOPS AND IF STATEMENTS
// AS 'allCards' WILL ALWAYS BE EQUAL TO SOMETHING IN 'newCardRankSuit'
// JUST LIKE IT'S ALWAYS EQUAL TO SOMETHING IN A SINGLE FOR LOOP AND IF STATEMENT

var allCards = [
"Two Hearts", "Three Hearts", "Four Hearts", "Five Hearts", "Six Hearts",
"Seven Hearts", "Eight Hearts", "Nine Hearts", "Ten Hearts", "Jack Hearts",
"Queen Hearts", "King Hearts", "Ace Hearts",
"Two Spades", "Three Spades", "Four Spades", "Five Spades", "Six Spades",
"Seven Spades", "Eight Spades", "Nine Spades", "Ten Spades", "Jack Spades",
"Queen Spades", "King Spades", "Ace Spades",
"Two Clubs", "Three Clubs", "Four Clubs", "Five Clubs", "Six Clubs",
"Seven Clubs", "Eight Clubs", "Nine Clubs", "Ten Clubs", "Jack Clubs",
"Queen Clubs", "King Clubs", "Ace Clubs",
"Two Diamonds", "Three Diamonds", "Four Diamonds", "Five Diamonds", "Six Diamonds",
"Seven Diamonds", "Eight Diamonds", "Nine Diamonds", "Ten Diamonds", "Jack Diamonds",
"Queen Diamonds", "King Diamonds", "Ace Diamonds"
];

var cardsRemainingInDeck, cardsCheck = [], cardsChecked = [], rank = 0, suit = 0, cardRankSuit, newCardRankSuit,
    _cardRankSuit, _newCardRankSuit, __cardRankSuit, __newCardRankSuit, ___cardRankSuit, ___newCardRankSuit,
    ____cardRankSuit, ____newCardRankSuit;
var Deck = (function () {
    var hearts = 0, spades = 0, clubs = 0, diamonds = 0,
    two = 0, three = 0, four = 0, five = 0, six = 0, seven = 0, eight = 0, nine = 0, ten = 0, jack = 0, queen = 0, king = 0, ace = 0;
    function Deck() {
        this.numberOfCards = 52;
        this.cardSuits = ["Hearts &#9825;", "Spades &#9828;", "Clubs &#9831;", "Diamonds &#9826;"]; // For html special characters
        this.cardRanks = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
        this.cardsPicked = [];
        console.log(this);
        console.log(this.cardSuits);
        console.log(this.cardRanks);
        console.log(this.cardsPicked);
        console.log(this.numberOfCards + ' CARDS IN DECK TO START');
    }
    Deck.prototype.getCardsRemaining = function () { // Function to check how many cards remain
        if(this.numberOfCards - this.cardsPicked.length === 0) {  // 'this.numberOfCards' = '52' and 'this.cardsPicked.length'
          var button = document.getElementById("pickCardButton"); // equals (the number increases by 1 with each button click)
          button.disabled = true;                               // so when 'this.numberOfCards - this.cardsPicked.length' = '0'
        }                                                       // all 52 cards in the deck have been used and the button is disabled
        //console.log(this.numberOfCards - this.cardsPicked.length);
        cardsRemainingInDeck = this.numberOfCards - this.cardsPicked.length;
        return cardsRemainingInDeck; // Returns the number of cards remaining
    };
    Deck.prototype.createCardPicker = function () {
        var _this = this; // Copies 'numberOfCards' 'cardSuits' 'cardRanks' and 'cardsPicked' to '_this'
        return function () {
            if (!_this.getCardsRemaining()) // IF THE CARD DECK IS EMPTY, RETURN AND SKIP THE FUNCTION
                return;
            var card;

            /*cardChecking();
            if (count > 0) {
              console.log('IN COUNT IF: ' + count);
              count = 0;
              cardChecking();
            }*/

            // The line below gets a random 'suit' within the length of the array thus picking the next card 'suit'
            suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];

            // The line below gets a random 'rank' within the length of the array thus picking the next card 'rank'
            rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];

            console.log(rank + ' OF ' + suit);
            // THE FOLLOWING PREVENTS THE SAME CARDS FROM BEING PICKED:
            // When 13 of the same suit have been picked, remove that suit from the array
            // When 4 of the same rank have been picked, remove that rank from the array

            // -UPDADE- 5/24/2017:
            // THE FOLLOWING SHOULD PREVENT THE SAME CARDS FROM BEING PICKED, BUT IT DOESN'T WORK:

            // -UPDADE: WHY IT DOESN'T WORK- 5/25/2017:
            // THE RANK PART WORKS, BUT AS LONG AS A RANK IS LESS THAN OR WHEN IT BECOMES EQUAL TO 4,
            // IT CAN GRAB ANY SUIT AS LONG AS THAT SUIT IS LESS THAN OR WHEN IT BECOMES EQUAL TO 13.

            //function cardChecking() {
              // SAVE ALL PICKED CARDS TO AN ARRAY TO CHECK AGAINST FOR REPEATED CARDS
              //console.log(rank + ' ' + suit); // SAVE THIS TO AN ARRAY AND THEN USE A LOOP TO CHECK IF IT'S BEEN PICKED ALREADY

              /*for (let i = 0; i < cardRankSuit.length; i++) { // Loops the length of the string
                if (cardRankSuit[i] === "&") {  // Checks for the character '&'
                  i--;                          // Decrements to the character before the '&'
                  newCardRankSuit = cardRankSuit.slice(0, i);
                  i++;
                }
              }*/
              cardRankSuit = rank + ' ' + suit;
              newCardRankSuit = "";
              // THE TWO LINES BELOW DOES THE SAME AS THE LOOP ABOVE
              var pos = cardRankSuit.indexOf("&"); // Gets the position of the character '&'
              newCardRankSuit = cardRankSuit.slice(0, pos-1); // Backs up a space and removes everything from that position to the end of the string

              for (let i = 0; i < allCards.length; i++) {
                //console.log("BEFORE 1ST IF ************************* BEFORE 1ST IF: " + cardsCheck[i] + " | " + newCardRankSuit);
                if (allCards[i] === newCardRankSuit) {
                  console.log("IN 1ST IF ************************* IN 1ST IF: " + allCards[i] + " | " + newCardRankSuit);
                  suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];
                  rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];
                  console.log(rank + ' OF ' + suit);

                  _cardRankSuit = rank + ' ' + suit;
                  _newCardRankSuit = "";
                  var _pos = _cardRankSuit.indexOf("&"); // Gets the position of the character '&'
                  _newCardRankSuit = _cardRankSuit.slice(0, _pos-1); // Backs up a space and removes everything from that position to the end of the string

                  for (let i = 0; i < allCards.length; i++) {
                    if (allCards[i] === _newCardRankSuit) {
                      console.log("IN 2ND IF ************************* IN 2ND IF: " + allCards[i] + " | " + _newCardRankSuit);
                      suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];
                      rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];
                      console.log(rank + ' OF ' + suit);

                      __cardRankSuit = rank + ' ' + suit;
                      __newCardRankSuit = "";
                      var __pos = __cardRankSuit.indexOf("&"); // Gets the position of the character '&'
                      __newCardRankSuit = __cardRankSuit.slice(0, __pos-1); // Backs up a space and removes everything from that position to the end of the string

                      for (let i = 0; i < allCards.length; i++) {
                        if (allCards[i] === __newCardRankSuit) {
                          console.log("IN 3RD IF ************************* IN 3RD IF: " + allCards[i] + " | " + __newCardRankSuit);
                          suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];
                          rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];
                          console.log(rank + ' OF ' + suit);

                          ___cardRankSuit = rank + ' ' + suit;
                          ___newCardRankSuit = "";
                          var ___pos = ___cardRankSuit.indexOf("&"); // Gets the position of the character '&'
                          ___newCardRankSuit = ___cardRankSuit.slice(0, ___pos-1); // Backs up a space and removes everything from that position to the end of the string

                          for (let i = 0; i < allCards.length; i++) {
                            if (allCards[i] === ___newCardRankSuit) {
                              console.log("IN 4TH IF ************************* IN 4TH IF: " + allCards[i] + " | " + ___newCardRankSuit);
                              suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];
                              rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];
                              console.log(rank + ' OF ' + suit);

                              ____cardRankSuit = rank + ' ' + suit;
                              ____newCardRankSuit = "";
                              var ____pos = ____cardRankSuit.indexOf("&"); // Gets the position of the character '&'
                              ____newCardRankSuit = ____cardRankSuit.slice(0, ____pos-1); // Backs up a space and removes everything from that position to the end of the string

                              for (let i = 0; i < allCards.length; i++) {
                                if (allCards[i] === ____newCardRankSuit) {
                                  console.log("IN 5TH IF ************************* IN 5TH IF: " + allCards[i] + " | " + ____newCardRankSuit);
                                  suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];
                                  rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];
                                  console.log(rank + ' OF ' + suit);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              //console.log('newCardRankSuit: ' + newCardRankSuit);
              cardsCheck.push(newCardRankSuit);
              //console.log(allCards);
              console.log(cardsCheck);
            //}


            //console.log(rank + ' OF ' + suit);
            card = {   // Then the 'card' object grabs the 'suit' and 'rank' and puts them together to be saved to '_this.cardsPicked'
                suit: suit,
                rank: rank
            };

            _this.cardsPicked.push(card); // Pushes 'card' to '_this.cardsPicked' which holds all the cards that have been picked
                                          // Then '_this.cardsPicked' is used to return card for printing out to the screen???
            //console.log(card);            // CHECKED AND '_this.cardsPicked' IS A NUMBER SO I'M NOT SURE WHAT'S GOING ON HERE
            //console.log(card.rank + " " + card.suit);
            console.log(cardsRemainingInDeck - 1 + ' CARDS REMAINING IN DECK');
            return card; // Returnes the card picked???                         // OR HERE...
        };
    };
    return Deck; // OR HERE...
}());

// FROM 'typescript.js'
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
    return card.rank + " of " + card.suit;
}

_______________________________________________________________________________________________________________


// SINGLE FOR LOOP AND IF STATEMENT USING 'allCards' BELOW

// ***** THE PROBLEM *****
// THERE WILL ALWAYS BE A MATCH WITH MULTIPLE FOR LOOPS AND IF STATEMENTS
// AS 'allCards' WILL ALWAYS BE EQUAL TO SOMETHING IN 'newCardRankSuit'
// JUST LIKE IT'S ALWAYS EQUAL TO SOMETHING IN A SINGLE FOR LOOP AND IF STATEMENT

var allCards = [
"Two Hearts", "Three Hearts", "Four Hearts", "Five Hearts", "Six Hearts",
"Seven Hearts", "Eight Hearts", "Nine Hearts", "Ten Hearts", "Jack Hearts",
"Queen Hearts", "King Hearts", "Ace Hearts",
"Two Spades", "Three Spades", "Four Spades", "Five Spades", "Six Spades",
"Seven Spades", "Eight Spades", "Nine Spades", "Ten Spades", "Jack Spades",
"Queen Spades", "King Spades", "Ace Spades",
"Two Clubs", "Three Clubs", "Four Clubs", "Five Clubs", "Six Clubs",
"Seven Clubs", "Eight Clubs", "Nine Clubs", "Ten Clubs", "Jack Clubs",
"Queen Clubs", "King Clubs", "Ace Clubs",
"Two Diamonds", "Three Diamonds", "Four Diamonds", "Five Diamonds", "Six Diamonds",
"Seven Diamonds", "Eight Diamonds", "Nine Diamonds", "Ten Diamonds", "Jack Diamonds",
"Queen Diamonds", "King Diamonds", "Ace Diamonds"
];

var cardsRemainingInDeck, cardsCheck = [], cardsChecked = [], rank = 0, suit = 0, cardRankSuit, newCardRankSuit,
    _cardRankSuit, _newCardRankSuit, __cardRankSuit, __newCardRankSuit, ___cardRankSuit, ___newCardRankSuit,
    ____cardRankSuit, ____newCardRankSuit;
var Deck = (function () {
    var hearts = 0, spades = 0, clubs = 0, diamonds = 0,
    two = 0, three = 0, four = 0, five = 0, six = 0, seven = 0, eight = 0, nine = 0, ten = 0, jack = 0, queen = 0, king = 0, ace = 0;
    function Deck() {
        this.numberOfCards = 52;
        this.cardSuits = ["Hearts &#9825;", "Spades &#9828;", "Clubs &#9831;", "Diamonds &#9826;"]; // For html special characters
        this.cardRanks = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
        this.cardsPicked = [];
        console.log(this);
        console.log(this.cardSuits);
        console.log(this.cardRanks);
        console.log(this.cardsPicked);
        console.log(this.numberOfCards + ' CARDS IN DECK TO START');
    }
    Deck.prototype.getCardsRemaining = function () { // Function to check how many cards remain
        if(this.numberOfCards - this.cardsPicked.length === 0) {  // 'this.numberOfCards' = '52' and 'this.cardsPicked.length'
          var button = document.getElementById("pickCardButton"); // equals (the number increases by 1 with each button click)
          button.disabled = true;                               // so when 'this.numberOfCards - this.cardsPicked.length' = '0'
        }                                                       // all 52 cards in the deck have been used and the button is disabled
        //console.log(this.numberOfCards - this.cardsPicked.length);
        cardsRemainingInDeck = this.numberOfCards - this.cardsPicked.length;
        return cardsRemainingInDeck; // Returns the number of cards remaining
    };
    Deck.prototype.createCardPicker = function () {
        var _this = this; // Copies 'numberOfCards' 'cardSuits' 'cardRanks' and 'cardsPicked' to '_this'
        return function () {
            if (!_this.getCardsRemaining()) // IF THE CARD DECK IS EMPTY, RETURN AND SKIP THE FUNCTION
                return;
            var card;

            /*cardChecking();
            if (count > 0) {
              console.log('IN COUNT IF: ' + count);
              count = 0;
              cardChecking();
            }*/

            // The line below gets a random 'suit' within the length of the array thus picking the next card 'suit'
            suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];

            // The line below gets a random 'rank' within the length of the array thus picking the next card 'rank'
            rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];

            console.log(rank + ' OF ' + suit);
            // THE FOLLOWING PREVENTS THE SAME CARDS FROM BEING PICKED:
            // When 13 of the same suit have been picked, remove that suit from the array
            // When 4 of the same rank have been picked, remove that rank from the array

            // -UPDADE- 5/24/2017:
            // THE FOLLOWING SHOULD PREVENT THE SAME CARDS FROM BEING PICKED, BUT IT DOESN'T WORK:

            // -UPDADE: WHY IT DOESN'T WORK- 5/25/2017:
            // THE RANK PART WORKS, BUT AS LONG AS A RANK IS LESS THAN OR WHEN IT BECOMES EQUAL TO 4,
            // IT CAN GRAB ANY SUIT AS LONG AS THAT SUIT IS LESS THAN OR WHEN IT BECOMES EQUAL TO 13.

            //function cardChecking() {
              // SAVE ALL PICKED CARDS TO AN ARRAY TO CHECK AGAINST FOR REPEATED CARDS
              //console.log(rank + ' ' + suit); // SAVE THIS TO AN ARRAY AND THEN USE A LOOP TO CHECK IF IT'S BEEN PICKED ALREADY

              /*for (let i = 0; i < cardRankSuit.length; i++) { // Loops the length of the string
                if (cardRankSuit[i] === "&") {  // Checks for the character '&'
                  i--;                          // Decrements to the character before the '&'
                  newCardRankSuit = cardRankSuit.slice(0, i);
                  i++;
                }
              }*/
              cardRankSuit = rank + ' ' + suit;
              newCardRankSuit = "";
              // THE TWO LINES BELOW DOES THE SAME AS THE LOOP ABOVE
              var pos = cardRankSuit.indexOf("&"); // Gets the position of the character '&'
              newCardRankSuit = cardRankSuit.slice(0, pos-1); // Backs up a space and removes everything from that position to the end of the string

              for (let i = 0; i < allCards.length; i++) {
                // THERE WILL ALWAYS BE A MATCH WITH MULTIPLE FOR LOOPS AND IF STATEMENTS
                // AS 'allCards' WILL ALWAYS BE EQUAL TO SOMETHING IN 'newCardRankSuit'
                // JUST LIKE IT'S ALWAYS EQUAL TO SOMETHING IN THIS FOR LOOP AND IF STATEMENT
                if (allCards[i] === newCardRankSuit) {
                  console.log("IN 1ST IF ************************* IN 1ST IF: " + allCards[i] + " | " + newCardRankSuit);
                  suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];
                  rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];
                  console.log(rank + ' OF ' + suit);
                }
              }
              //console.log('newCardRankSuit: ' + newCardRankSuit);
              cardsCheck.push(newCardRankSuit);
              //console.log(allCards);
              console.log(cardsCheck);
            //}


            //console.log(rank + ' OF ' + suit);
            card = {   // Then the 'card' object grabs the 'suit' and 'rank' and puts them together to be saved to '_this.cardsPicked'
                suit: suit,
                rank: rank
            };

            _this.cardsPicked.push(card); // Pushes 'card' to '_this.cardsPicked' which holds all the cards that have been picked
                                          // Then '_this.cardsPicked' is used to return card for printing out to the screen???
            //console.log(card);            // CHECKED AND '_this.cardsPicked' IS A NUMBER SO I'M NOT SURE WHAT'S GOING ON HERE
            //console.log(card.rank + " " + card.suit);
            console.log(cardsRemainingInDeck - 1 + ' CARDS REMAINING IN DECK');
            return card; // Returnes the card picked???                         // OR HERE...
        };
    };
    return Deck; // OR HERE...
}());

// FROM 'typescript.js'
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
    return card.rank + " of " + card.suit;
}
