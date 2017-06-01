var cardsRemainingInDeck;
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

            // The line below gets a random 'suit' within the length of the array thus picking the next card 'suit'
            var suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];

            // The line below gets a random 'rank' within the length of the array thus picking the next card 'rank'
            var rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];

            // THE FOLLOWING PREVENTS THE SAME CARDS FROM BEING PICKED:
            // When 13 of the same suit have been picked, remove that suit from the array
            // When 4 of the same rank have been picked, remove that rank from the array

            // -UPDADE- 5/24/2017:
            // THE FOLLOWING SHOULD PREVENT THE SAME CARDS FROM BEING PICKED, BUT IT DOESN'T WORK:

            // -UPDADE: WHY IT DOESN'T WORK- 5/25/2017:
            // THE RANK PART WORKS, BUT AS LONG AS A RANK IS LESS THAN OR WHEN IT BECOMES EQUAL TO 4,
            // IT CAN GRAB ANY SUIT AS LONG AS THAT SUIT IS LESS THAN OR WHEN IT BECOMES EQUAL TO 13.

            // BEGIN: KEEP COUNT OF SUITS THAT HAVE BEEN DISPLAYED AND WHEN EACH SUIT REACHES 13 DELETE THAT SUIT FROM ARRAY
            if (suit === "Hearts &#9825;") {
              hearts += 1; // If the variable 'suit' = 'Hearts &#9825;', add 1 to the variable 'hearts'
              console.log('HEARTS = ' + hearts);
              // TRIED AN IF STATEMENT FOR PREVENTING CARDS WITH A GIVEN RANK TO GET THE SAME SUIT AGAIN, BUT NO GO
              /*if (two === 4 || three === 4 || four === 4 || five === 4 || six === 4 || seven === 4 || eight === 4 ||
                  nine === 4 || ten === 4 || jack === 4 || queen === 4 || king === 4 || ace === 4) {
                    return;
                  }*/
              if (hearts === 13) { // When 'hearts' reaches 13 (13 cards with that suit), then do the following
                var index = _this.cardSuits.indexOf("Hearts &#9825;"); // Get the index of 'Hearts'
                _this.cardSuits.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (suit === "Spades &#9828;") {
              spades += 1; // If the variable 'suit' = 'Spades &#9828;', add 1 to the variable 'spades'
              console.log('SPADES = ' + spades);
              if (spades === 13) { // When 'spades' reaches 13 (13 cards with that suit), then do the following
                var index = _this.cardSuits.indexOf("Spades &#9828;"); // Get the index of 'Spades'
                _this.cardSuits.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (suit === "Clubs &#9831;") {
              clubs += 1; // If the variable 'suit' = 'Clubs &#9831;', add 1 to the variable 'clubs'
              console.log('CLUBS = ' + clubs);
              if (clubs === 13) { // When 'clubs' reaches 13 (13 cards with that suit), then do the following
                var index = _this.cardSuits.indexOf("Clubs &#9831;"); // Get the index of 'Clubs'
                _this.cardSuits.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (suit === "Diamonds &#9826;") {
              diamonds += 1; // If the variable 'suit' = 'Diamonds &#9826;', add 1 to the variable 'diamonds'
              console.log('DIAMONDS = ' + diamonds);
              if (diamonds === 13) { // When 'diamonds' reaches 13 (13 cards with that suit), then do the following
                var index = _this.cardSuits.indexOf("Diamonds &#9826;"); // Get the index of 'Diamonds'
                _this.cardSuits.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            console.log(_this.cardSuits);
            // END: KEEP COUNT OF SUITS THAT HAVE BEEN DISPLAYED AND WHEN EACH SUIT REACHES 13 DELETE THAT SUIT FROM ARRAY

            // BEGIN: KEEP COUNT OF RANKS THAT HAVE BEEN DISPLAYED AND WHEN EACH RANK REACHES 4 DELETE THAT RANK FROM ARRAY
            if (rank === "Two") {
              two += 1; // If the variable 'rank' = 'Two', add 1 to the variable 'two'
              console.log('TWO = ' + two);
              if (two === 4) { // When 'two' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Two"); // Get the index of 'Two'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Three") {
              three += 1; // If the variable 'rank' = 'Three', add 1 to the variable 'three'
              console.log('THREE = ' + three);
              if (three === 4) { // When 'three' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Three"); // Get the index of 'Three'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Four") {
              four += 1; // If the variable 'rank' = 'Four', add 1 to the variable 'four'
              console.log('FOUR = ' + four);
              if (four === 4) { // When 'four' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Four"); // Get the index of 'Four'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Five") {
              five += 1; // If the variable 'rank' = 'Five', add 1 to the variable 'five'
              console.log('FIVE = ' + five);
              if (five === 4) { // When 'five' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Five"); // Get the index of 'Five'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Six") {
              six += 1; // If the variable 'rank' = 'Six', add 1 to the variable 'six'
              console.log('SIX = ' + six);
              if (six === 4) { // When 'six' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Six"); // Get the index of 'Six'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Seven") {
              seven += 1; // If the variable 'rank' = 'Seven', add 1 to the variable 'seven'
              console.log('SEVEN = ' + seven);
              if (seven === 4) { // When 'seven' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Seven"); // Get the index of 'Seven'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Eight") {
              eight += 1; // If the variable 'rank' = 'Eight', add 1 to the variable 'eight'
              console.log('EIGHT = ' + eight);
              if (eight === 4) { // When 'eight' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Eight"); // Get the index of 'Eight'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Nine") {
              nine += 1; // If the variable 'rank' = 'Nine', add 1 to the variable 'nine'
              console.log('NINE = ' + nine);
              if (nine === 4) { // When 'nine' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Nine"); // Get the index of 'Nine'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Ten") {
              ten += 1; // If the variable 'rank' = 'Ten', add 1 to the variable 'ten'
              console.log('TEN = ' + ten);
              if (ten === 4) { // When 'ten' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Ten"); // Get the index of 'Ten'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Jack") {
              jack += 1; // If the variable 'rank' = 'Jack', add 1 to the variable 'jack'
              console.log('JACK = ' + jack);
              if (jack === 4) { // When 'jack' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Jack"); // Get the index of 'Jack'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Queen") {
              queen += 1; // If the variable 'rank' = 'Queen', add 1 to the variable 'queen'
              console.log('QUEEN = ' + queen);
              if (queen === 4) { // When 'queen' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Queen"); // Get the index of 'Queen'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "King") {
              king += 1; // If the variable 'rank' = 'King', add 1 to the variable 'king'
              console.log('KING = ' + king);
              if (king === 4) { // When 'king' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("King"); // Get the index of 'King'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            if (rank === "Ace") {
              ace += 1; // If the variable 'rank' = 'Ace', add 1 to the variable 'ace'
              console.log('ACE = ' + ace);
              if (ace === 4) { // When 'ace' reaches 4 (4 cards with that rank), then do the following
                var index = _this.cardRanks.indexOf("Ace"); // Get the index of 'Ace'
                _this.cardRanks.splice(index, 1); // At position 'index', remove that item fron the array
              }
            }
            console.log(_this.cardRanks);
            // END: KEEP COUNT OF RANKS THAT HAVE BEEN DISPLAYED AND WHEN EACH RANK REACHES 4 DELETE THAT RANK FROM ARRAY

            console.log(rank + ' OF ' + suit);
            card = {   // Then the 'card' object grabs the 'suit' and 'rank' and puts them together to be saved to '_this.cardsPicked'
                suit: suit,
                rank: rank
            };
            // TRIED TO SAVE ALL PICKED CARDS TO AN ARRAY TO CHECK AGAINST FOR REPEATED CARDS, BUT NO GO
            /*var pickedCards = [];
            pickedCards += card.suit.concat(card.rank);
            console.log(pickedCards);*/
            _this.cardsPicked.push(card); // Pushes 'card' to '_this.cardsPicked' which holds all the cards that have been picked
                                          // Then '_this.cardsPicked' is used to return card for printing out to the screen???
            console.log(card);            // CHECKED AND '_this.cardsPicked' IS A NUMBER SO I'M NOT SURE WHAT'S GOING ON HERE
            console.log(cardsRemainingInDeck - 1 + ' CARDS REMAINING IN DECK');
            return card; // Returnes the card picked???                         // OR HERE...
        };
    };
    return Deck;
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
