var cardsRemainingInDeck
var Deck = (function () {
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

            // THE FOLLOWING WOULD PREVENT THE SAME CARDS FROM BEING PICKED, BUT IT'S NOT DONE IN THIS JS CODE:
            // When 13 of the same suit have been picked, remove that suit from the array
            // When 4 of the same rank have been picked, remove that rank from the array

            // -UPDADE: DOESN'T WORK- 5/25/2017:
            // THE RANK PART WORKS, BUT AS LONG AS A RANK IS LESS THAN OR WHEN IT BECOMES EQUAL TO 4,
            // IT CAN GRAB ANY SUIT AS LONG AS THAT SUIT IS LESS THAN OR WHEN IT BECOMES EQUAL TO 13.

            var card;
            var suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];
            console.log(suit); // The above line gets a random 'suit' within the length of the array thus picking the next card 'suit'
            var rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];
            console.log(rank); // The above line gets a random 'rank' within the length of the array thus picking the next card 'rank'
            card = {   // Then the 'card' object grabs the 'suit' and 'rank' and puts them together to be saved to '_this.cardsPicked'
                suit: suit,
                rank: rank
            };
            _this.cardsPicked.push(card);   // Pushes 'card' to '_this.cardsPicked' which holds all the cards that have been picked
            console.log(_this.cardsPicked); // Then '_this.cardsPicked' is used to return card for printing out to the screen???
            console.log(card);
            console.log(cardsRemainingInDeck - 1 + ' CARDS REMAINING IN DECK');
            return card; // Returnes the card picked???
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
