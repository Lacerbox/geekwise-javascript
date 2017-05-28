// use your class implementation here and update your HTML using native methods

const button = document.getElementById("pickCardButton");
const deckDiv = document.getElementById("deckDiv");

const deck = new Deck();
const cardPicker = deck.createCardPicker();

button.addEventListener("click", () => {
	let card:ICard = cardPicker();

	button.innerHTML = getCardLabel(card) + deck.getCardsRemaining();

	deckDiv.innerHTML += getCardLabel(card);
	deckDiv.innerHTML += "<br />";
});

function getCardLabel(card:ICard) {
	return card.rank + " of " + card.suit;
}
