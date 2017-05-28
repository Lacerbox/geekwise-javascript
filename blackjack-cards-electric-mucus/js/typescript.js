// use your class implementation here and update your HTML using native methods
var button = document.getElementById("pickCardButton");
var deckDiv = document.getElementById("deckDiv");
var deck = new Deck();
var cardPicker = deck.createCardPicker();
button.addEventListener("click", function () {
    var card = cardPicker();
    button.innerHTML = getCardLabel(card) + ' - ' + deck.getCardsRemaining() + ' Cards Left';
    deckDiv.innerHTML += getCardLabel(card);
    deckDiv.innerHTML += "<br />";
});
function getCardLabel(card) {
    return card.rank + " of " + card.suit;
}
