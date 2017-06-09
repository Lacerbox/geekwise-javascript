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
        console.log(this.allCards);
        console.log(this.cardsPicked);
        console.log(this.numberOfCards + ' CARDS IN DECK TO START');
    } // Function to check how many cards remain
    Deck.prototype.getCardsRemaining = function () {              // 'this.numberOfCards' = '52' and
        if(this.numberOfCards - this.cardsPicked.length === 0) {  // 'this.cardsPicked.length' equals
          var button = document.getElementById("pickCardButton"); // (number increases by 1 with each button click)
          button.disabled = true;         // so when 'this.numberOfCards' minus 'this.cardsPicked.length' = '0'
        }                                 // all 52 cards in the deck have been picked and the button is disabled
        cardsRemainingInDeck = this.numberOfCards - this.cardsPicked.length;
        return cardsRemainingInDeck; // Returns the number of cards remaining
    };
    Deck.prototype.createCardPicker = function () {
        var _this = this; // Copies 'numberOfCards' 'allCards' and 'cardsPicked' to '_this'
        return function () {
            if (!_this.getCardsRemaining()) // IF THE CARD DECK IS EMPTY, RETURN AND SKIP THE FUNCTION
                return;
            // The line below gets a random card within the length of the array thus picking the next card
            var card = _this.allCards[Math.floor(Math.random() * _this.allCards.length)];
            _this.cardsPicked.push(card);   // Pushes 'card' to '_this.cardsPicked' which holds all the
            console.log(_this.cardsPicked); // cards that have been picked, I just wish I knew the hell why
            console.log("(" + card + ") IS THE CARD CHOSEN SO, TO THE CHOPPING BLOCK!");

            // ***** THIS MADE IT ALL WORK. FINALLY, AFTER FUCKING WITH IT FOR TWO WEEKS!!! *****
            for (let i = 0; i < _this.allCards.length; i++) { // Loop the array and when '_this.allCards[i]'
              if (_this.allCards[i] === card) { // becomes equal to 'card' (the picked card) delete that card
                console.log("(" + _this.allCards[i] + ") IS EQUAL TO (" + card + ") SO PURGE THAT CARD FROM THE ARRAY");
                _this.allCards.splice(i, 1); // At position 'i', 'splice' (remove) that item from the array
              }
            }
            console.log(_this.allCards);
            console.log(cardsRemainingInDeck - 1 + ' CARDS REMAINING IN DECK');
            return card; // Returns the card picked
        };
    };
    return Deck; // Returns the number of cards that have been picked
}());

var button = document.getElementById("pickCardButton");
var deckDiv = document.getElementById("deckDiv");
var deck = new Deck();
var cardPicker = deck.createCardPicker();
button.addEventListener("click", function () {
    var card = cardPicker();
    // Sends card back to <button> in html and prints to the button on the page
    button.innerHTML = getCardLabel(card) + ' - ' + deck.getCardsRemaining() + ' Cards Left In Deck';
    deckDiv.innerHTML += getCardLabel(card); // Sends card with a <br> (for new line)
    deckDiv.innerHTML += "<br />";           // back to <div> in html and prints to page
});
function getCardLabel(card) { // Function to return the card for 'innerHTML' to send to html to print to page
    return card;
}
