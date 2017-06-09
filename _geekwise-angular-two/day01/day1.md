Node.js & NPM & gulp

model-view-controller (MVC)

electric mucus 'Futureama'

Get TypeScript Addon for ATOM

Semantic UI vs Bootstrap

=> lamda

_____________________________________________________________________________

// CARDS EXERCISE

index.html

<!DOCTYPE html>
<html>

<head>
	<script data-require="jquery@*" data-semver="3.1.1" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<link data-require="semantic-ui@2.1.8" data-semver="2.1.8" rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.1.8/semantic.min.css" />
	<script data-require="semantic-ui@2.1.8" data-semver="2.1.8" src="https://cdn.jsdelivr.net/semantic-ui/2.1.8/semantic.min.js"></script>
</head>

<body>
  <button id="pickACard" class="ui large inverted orange button">Pick a Card</button>
  <div id="deckStatus" class="ui orange inverted segment"></div>

  <script src="deck.js"></script>
  <script src="typescript.js"></script>
</body>

</html>

_____________________________________________________________________________


deck.ts

// define an interface for a Card; a Card should have a suit and number value

interface Card {
  suit: string;
  rank: string;
}

// define a class for a Deck (this includes implementation details):

// "numberOfCards," "cardSuits," and "cardNumbers" should be private properties - this is done for you

// public pieces should include:
//  - an array of cards picked
//  - number of cards left in the deck
//  - a createCardPicker method which returns a function to draw a card
//  - createCardPicker function should return a Card from our above interface
//  - once done, apply the fancy decorator to get all suave-like

//	private readonly numberOfCards: number = 52;
//	private cardSuits: Array<string> = ["H", "S", "C", "D"];
//	private cardNumbers: Array<string> = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

class Deck {
  public readonly numberOfCards: number = 52;

  shuffleDeck():void {
    console.log("Deck Shuffled");
  }
}


// here is your decorator, implemented for you, but you still have to use it
// notice that it must override a property in your class
function fancy<T extends { new (...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		cardSuits = ["♡", "♤", "♧", "♢"];
	}
}

// instance the class and use it
var deckInstance = new Deck();
console.log(deckInstance.numberOfCards);

_____________________________________________________________________________


typescript.ts

// use your class implementation here and update your HTML using native methods


_______________________________________________________________________

// CARDS EXERCISE ANSWER

index.html

<!DOCTYPE html>
<html>

<head>
	<script data-require="jquery@*" data-semver="3.1.1" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<link data-require="semantic-ui@2.1.8" data-semver="2.1.8" rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.1.8/semantic.min.css" />
	<script data-require="semantic-ui@2.1.8" data-semver="2.1.8" src="https://cdn.jsdelivr.net/semantic-ui/2.1.8/semantic.min.js"></script>
</head>

<body>
  <button id="pickCardButton" class="ui large inverted orange button">Pick a Card</button>
  <div id="deckDiv" class="ui orange inverted segment"></div>

  <script src="deck.js"></script>
  <script src="typescript.js"></script>
</body>

</html>

_______________________________________________________________________


// typescript.ts

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

_______________________________________________________________________


// deck.ts

// define an interface for a Card; a Card should have a suit and rank value

interface ICard {
	suit:string;
	rank:string;
}

@fancy
class Deck {
	private readonly numberOfCards: number = 52;
	private cardSuits: Array<string> = ["H", "S", "C", "D"];
	private cardRanks: Array<string> = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

	public cardsPicked:ICard[] = [];

	public getCardsRemaining():number {
		return this.numberOfCards - this.cardsPicked.length;
	}

	public createCardPicker():() => ICard {
		return () => {
		  if (!this.getCardsRemaining()) return;

			let card:ICard;

			const suit = this.cardSuits[Math.floor(Math.random() * this.cardSuits.length)];
			const rank = this.cardRanks[Math.floor(Math.random() * this.cardRanks.length)];

			card = {
				suit,
				rank
			};

			this.cardsPicked.push(card);

			return card;
		};
	}
}

// here is your decorator, implemented for you, but you still have to use it
// notice that it must override a property in your class
function fancy<T extends { new (...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		cardSuits = ["♡", "♤", "♧", "♢"];
	}
}

_______________________________________________________________________
