var suit, rank;

var Deck = (function () {
    function Deck() {
        this.numberOfCards = 52;
        this.cardSuits = ["Hearts &#9825;", "Spades &#9828;", "Clubs &#9831;", "Diamonds &#9826;"];
        this.cardRanks = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
        this.cardsPicked = [];
    }
    Deck.prototype.getCardsRemaining = function () {
        return this.numberOfCards - this.cardsPicked.length;
    };
    Deck.prototype.createCardPicker = function () {
        var _this = this;
        return function () {
            if (!_this.getCardsRemaining())
                return;
            var card;
            var suit = _this.cardSuits[Math.floor(Math.random() * _this.cardSuits.length)];
            var rank = _this.cardRanks[Math.floor(Math.random() * _this.cardRanks.length)];
            card = {
                suit: suit,
                rank: rank
            };
            _this.cardsPicked.push(card);
            return card;
        };
    };
    return Deck;
}());
